import os
import numpy as np
import cv2
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from tensorflow.keras.layers import Input, Dense, Flatten, Conv2D, MaxPooling2D, BatchNormalization, Dropout, LeakyReLU
from tensorflow.keras.models import Model
from tensorflow.keras.optimizers import Adam

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Image dimensions standardization
image_dimensions = {'height': 256, 'width': 256, 'channels': 3}

# Wrapper class for model
class Classifier:
    def __init__(self):
        self.model = None

    def predict(self, x):
        if x.size == 0:
            return []
        return self.model.predict(x)

    def fit(self, x, y):
        return self.model.train_on_batch(x, y)

    def get_accuracy(self, x, y):
        return self.model.test_on_batch(x, y)

    def load(self, path):
        self.model.load_weights(path)

class Meso4(Classifier):
    # Initializing the class
    def __init__(self, learning_rate=0.001):
        self.model = self.init_model()
        optimizer = Adam(learning_rate=learning_rate)
        self.model.compile(optimizer=optimizer, loss='mean_squared_error', metrics=['accuracy'])

    def init_model(self):
        # Input Layer
        x = Input(shape=(image_dimensions['height'], image_dimensions['width'], image_dimensions['channels']))

        # 4 convolutional blocks
        x1 = Conv2D(8, (3, 3), padding='same', activation='relu')(x)
        x1 = BatchNormalization()(x1)
        x1 = MaxPooling2D(pool_size=(2, 2), padding='same')(x1)

        x2 = Conv2D(8, (5, 5), padding='same', activation='relu')(x1)
        x2 = BatchNormalization()(x2)
        x2 = MaxPooling2D(pool_size=(2, 2), padding='same')(x2)

        x3 = Conv2D(16, (5, 5), padding='same', activation='relu')(x2)
        x3 = BatchNormalization()(x3)
        x3 = MaxPooling2D(pool_size=(2, 2), padding='same')(x3)

        x4 = Conv2D(16, (5, 5), padding='same', activation='relu')(x3)
        x4 = BatchNormalization()(x4)
        x4 = MaxPooling2D(pool_size=(4, 4), padding='same')(x4)

        y = Flatten()(x4)
        y = Dropout(0.5)(y)
        y = Dense(16)(y)
        y = LeakyReLU(negative_slope=0.1)(y)
        y = Dropout(0.5)(y)
        y = Dense(1, activation='sigmoid')(y)

        return Model(inputs=x, outputs=y)

# Initialize model and load weights
model = Meso4()
model_path = '../model/Meso4_DF.h5'

if not os.path.isfile(model_path):
    raise FileNotFoundError(f"The model file {model_path} does not exist.")

model.load(model_path)

# Preprocess the image
def preprocess_image(image, target_size=(256, 256)):
    img = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB
    img = cv2.resize(img, target_size)  # Resize image to target size
    img = img.astype('float32') / 255.0  # Normalize pixel values
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

# Analyze video frames with the deepfake model
def analyze_video(video_path, model):
    list_of_predictions = []
    total_frames = 0

    # Open the video file
    cap = cv2.VideoCapture(video_path)

    # Get video properties
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = frame_count / fps if fps else 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Preprocess the frame
        preprocessed_frame = preprocess_image(frame)

        # Make predictions
        predictions = model.predict(preprocessed_frame)

        # Get prediction value
        prediction_value = predictions[0][0]
        list_of_predictions.append(prediction_value)
        total_frames += 1

    # Release resources
    cap.release()

    # Calculate the average of the predictions
    if list_of_predictions:
        average_prediction = np.mean(list_of_predictions)
    else:
        average_prediction = 0

    # Determine if the video is real or fake based on the average prediction
    is_deepfake = average_prediction <= 0.5
    result = "REAL VIDEO" if not is_deepfake else "FAKE VIDEO"
    
    return result, duration, bool(is_deepfake)  # Convert to standard boolean

# Serve video files from the uploads directory
@app.route('/uploads/<filename>', methods=['GET'])
def serve_video(filename):
    return send_from_directory('uploads', filename)

# Video processing function
def process_video(video_path):
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = frame_count / fps if fps else 0
    cap.release()

    return "Video processed successfully", duration, "fake" in video_path.lower()

# Route to handle video upload
@app.route('/upload', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file provided'}), 400
    
    video = request.files['video']
    video_path = os.path.join('uploads', video.filename)

    # Save the video to the server
    video.save(video_path)
    print(f"Video {video.filename} saved to {video_path}")

    # Process the video and get the result, duration, and deepfake status
    try:
        result, duration, is_deepfake = analyze_video(video_path, model)
    except ValueError as e:
        print(f"Error unpacking values: {e}")
        return jsonify({'error': 'An error occurred during video analysis.'}), 500

    # Convert values to standard types if necessary
    response_data = {
        'result': result,
        'duration': duration,
        'videoFileName': video.filename,
        'isDeepfake': bool(is_deepfake)  # Ensure it's a standard boolean
    }

    return jsonify(response_data)

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)

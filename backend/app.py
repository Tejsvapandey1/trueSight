import os
import time
import cv2
from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this to handle CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define the process_video function
def process_video(video_path):
    cap = cv2.VideoCapture(video_path)
    
    # Get video properties
    fps = cap.get(cv2.CAP_PROP_FPS)  # Frames per second
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))  # Total number of frames
    
    # Calculate video duration (in seconds)
    duration = frame_count / fps if fps else 0

    interval = 1
    start_time = time.time()

    while cap.isOpened():
        ret, frame = cap.read()

        if not ret:
            break

        # Skip the imshow part
        # cv2.imshow('Video', frame)

        if (time.time() - start_time) >= interval:
            print("Hello")
            start_time = time.time()

        if cv2.waitKey(int(1000 // fps)) & 0xFF == ord('q'):
            break

    cap.release()
    # cv2.destroyAllWindows()  # No need to destroy window since we didn't create one
    
    # Return the result and video duration
    return "Hello at the end of the video", duration

# Define the upload route
@app.route('/upload', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file provided'}), 400
    
    video = request.files['video']
    print(video, "recieved")
    video_path = os.path.join('uploads', video.filename)

    # Save the video to the server
    video.save(video_path)

    # Process the video and get the result and duration
    result, duration = process_video(video_path)

    # Return the result and duration to the frontend
    return jsonify({'result': result, 'duration': duration})

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True) 
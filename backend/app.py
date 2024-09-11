import os
import time
import cv2
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

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

        # Simulate some processing every interval
        if (time.time() - start_time) >= interval:
            print("Processing frame...")
            start_time = time.time()

        if cv2.waitKey(int(1000 // fps)) & 0xFF == ord('q'):
            break

    cap.release()

    # Simulate deepfake detection (just as an example)
    is_deepfake = "fake" in video_path.lower()  # Simulating deepfake detection based on file name

    # Return a result and the video duration
    result = "Video processed successfully"
    return result, duration, is_deepfake

# Define the route to serve video files from the 'uploads' directory
@app.route('/uploads/<filename>')
def get_video(filename):
    return send_from_directory('uploads', filename)

# Define the upload route
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
    result, duration, is_deepfake = process_video(video_path)

    # Return the result, duration, filename, and deepfake detection result to the frontend
    return jsonify({
        'result': result,
        'duration': duration,
        'videoFileName': video.filename,
        'isDeepfake': is_deepfake
    })

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)

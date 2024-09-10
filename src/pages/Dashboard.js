import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios"; // Axios is used for making HTTP requests
import { Button } from "@mui/material";

function Dashboard() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoFile, setVideoFile] = useState(null); // State to store the selected video file
  const [videoFormat, setVideoFormat] = useState(""); // State to store the video format (MIME type)

  const handleVideoUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setVideoFile(file); // Store the video file in state

    // Print video format (MIME type)
    if (file) {
      setVideoFormat(file.type); // Set the video format state
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL); // Set the video preview URL
    }
  };

  const handleSubmit = async () => {
    if (!videoFile) return;

    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append("video", videoFile); // 'video' is the key used in the backend to access the file

    try {
      // Send a POST request to the backend
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure that the request is sent as multipart
        },
      });
      console.log("Video uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <input
       className="text-white"
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
      />
      {videoSrc && (
        <div  className="text-white">
          <video width="400" controls  className="text-white">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-white">Video format: {videoFormat}</p> {/* Display the video format */}
          <Button onClick={handleSubmit}  className="text-white">Upload Video</Button> {/* Button to trigger video upload */}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Dashboard;

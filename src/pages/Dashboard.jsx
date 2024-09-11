import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Button } from "@mui/material";

function Dashboard() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoFile, setVideoFile] = useState(null); // State to store the selected video file
  const [videoFormat, setVideoFormat] = useState(""); // State to store the video format (MIME type)
  const navigate = useNavigate(); // For navigating to other routes

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

    // Redirect to loader page while uploading
    navigate("/loader");

    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      // Send a POST request to the backend
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Video uploaded successfully:", response.data);

      // After successful upload, redirect to result page with response data
      navigate("/result", { state: { data: response.data } });
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-[16rem] flex flex-col my-10 justify-center items-center">
        <input
          className="my-3 text-white rounded-md"
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
        />
        {videoSrc && (
          <div className="flex flex-col text-white">
            <video width="400" controls className="text-white">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <Button onClick={handleSubmit} className="self-center my-3 text-white">
              Upload Video
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;

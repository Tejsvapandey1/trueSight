import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

function Dashboard() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoFile, setVideoFile] = useState(null); // State to store the selected video file
  const navigate = useNavigate(); // For navigating to other routes

  const handleVideoUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setVideoFile(file); // Store the video file in state

    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL); // Set the video preview URL
    }
  };

  const handleSubmit = () => {
    if (!videoFile) return;

    // Redirect to loader page (simulated upload)
    navigate("/loader");

    // Simulate an upload process with a 5-second delay
    setTimeout(() => {
      // Redirect to result page with simulated data
      navigate("/result", { state: { data: { message: "Upload simulated successfully!" } } });
    }, 5000); // 5 seconds delay
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-[16rem] flex flex-col my-10 justify-center items-center">
        <input
          className="ml-[15%] my-3 text-white rounded-md"
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
            <div className="flex content-center justify-center my-3 border border-blue-600">
              <Button onClick={handleSubmit} className="self-center my-3 mt-4 text-white">
                Upload Video
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;

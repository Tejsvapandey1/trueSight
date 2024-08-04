import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";

function Dashboard() {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordedUrl, setRecordedUrl] = useState("");
  const videoRef = useRef(null);
  const recordedVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoRef.current.srcObject = stream;
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.onstop = handleStop;
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };
    getMedia();

    // Cleanup function to stop the video stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => [...prev, event.data]);
    }
  };

  const handleStop = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    setRecordedUrl(url);
  };

  const startRecording = () => {
    setRecordedChunks([]);
    setRecordedUrl("");
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const navigateToResults = () => {
    // Stop the media stream
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }

    // Create a file from the recorded chunks
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const file = new File([blob], "recording.webm", { type: "video/webm" });

    // Navigate to the /results route with the file
    navigate("/results", { state: { file } });
  };

  useEffect(() => {
    console.log("Recorded chunks:", recordedChunks);
  }, [recordedChunks]);

  useEffect(() => {
    if (recordedVideoRef.current) {
      recordedVideoRef.current.src = recordedUrl;
    }
  }, [recordedUrl]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
        <div>
          <h1 className="my-3 text-3xl font-semibold text-center text-white">
            Preview
            <p className="text-sm font-light text-center text-white">please make sure to place your head properly</p>
          </h1>
          <video ref={videoRef} autoPlay width="640" height="480"></video>
          <br />
          <div className="flex items-center justify-around">
            <Button
              variant="contained"
              disabled={recording}
              className="mx-1 text-white"
              onClick={startRecording}
            >
              Start Recording
            </Button>
            <Button
              variant="contained"
              disabled={!recording}
              className="mx-1 text-white"
              onClick={stopRecording}
            >
              Stop Recording
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          
          {recordedUrl && (
            <Button
              variant="contained"
              className="my-10 text-white"
              onClick={navigateToResults}
            >
              Get Insights
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;

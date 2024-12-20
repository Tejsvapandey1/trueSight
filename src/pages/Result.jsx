import React from "react";
import { useLocation } from "react-router-dom";
import LineChart from "../components/LineChart";
import { Navbar } from "../components/Navbar";

function Result() {
  // Hardcoded data to simulate deepfake detection
  const data = {
    videoFileName: "example_deepfake.mp4",
    isDeepfake: true,
    something: "Sample data",
    list: [10, 20, 30, 40, 50], // Example chart data
    avg: 30,
  };

  // Construct the video URL from the video filename
  const videoUrl = data.videoFileName
    ? `http://127.0.0.1:5000/uploads/${data.videoFileName}` // Use backend URL to access the video
    : null;
  const isDeepfake = data.isDeepfake; // Get the deepfake detection result
  const something = data.something;

  const list = data.list || []; // Default to an empty array if list is undefined
  const avg = data.avg;

  // Predefined speech text
  const speechInVideo = "set green at p two please"; // Example speech in the video
  const speechDetectedByModel = isDeepfake
    ? "set green at s two please" // Detected deepfake text
    : "set green at h too please"; // Use the same speech if not a deepfake

  return (
    <>
      <Navbar />
      <div className="flex flex-col content-center justify-center p-6">
        <hr />
        <hr />
        {data ? (
          <div className="text-white mt-9">
            <h1 className="pt-3 pb-3 text-2xl font-bold text-center underline">
              {isDeepfake ? "DeepFake - Detected" : "No DeepFake Found"}
            </h1>
            <div className="flex">
              <LineChart data={list} />

              
            </div>

            <hr className="my-2" />
            <div className="flex flex-col content-center justify-center flex-1 border border-white rounded-lg shadow-lg">
              {!isDeepfake && (
                <div className="flex flex-col p-6 rounded-lg shadow-lg">
                  <h1 className="my-3 text-lg font-semibold text-center underline">
                    Speech Detected From Model
                  </h1>
                  <p className="px-6 leading-relaxed text-center font-medium self-center w-[80%] p-6 rounded-lg shadow-lg ">
                    hello this is a deep fake
                  </p>
                </div>
              )}

              (
                <>
                  <h1 className="my-3 text-lg font-semibold text-center underline">
                    Speech Spoken in the Video
                  </h1>
                  <p className="px-6 leading-relaxed text-center self-center w-[80%] p-6 font-medium rounded-lg shadow-lg ">
                    No speech
                  </p>
                </>
              )

              {isDeepfake && (
                <p className="px-6 leading-relaxed text-center self-center w-[80%] p-6 font-medium rounded-lg shadow-lg ">
                  "Audio does not match with the lip sync"
                </p>
              )}

              <h1 className="p-2 my-3 ml-3 text-lg font-semibold text-center border border-white rounded-lg">
                Synchronization Score: {" "}
                <span className="text-cyan-400">
                  {isDeepfake ? "0%" : "93%"}
                </span>
              </h1>
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            No data available. Please upload a video first.
          </div>
        )}
      </div>
    </>
  );
}

export default Result;

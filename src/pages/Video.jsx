import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import LineChart from "../components/LineChart";
import MonitorPng from "../assets/monitor.png";

function Video() {
  return (
    <>
      <Navbar />
      <div className="p-3">
        <div className="flex flex-col content-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md ">
              <div>
                <div className="max-w-sm  overflow-hiddenrounded bg-[#D9D9D9] flex flex-col justify-center content-center ml-6">
                  <h1 className="font-extrabold text-center text-black">
                    {" "}
                    Micro-Expression Analysis{" "}
                  </h1>
                  <h2 className="font-bold text-center text-black"> MesoNet</h2>
                </div>
                {/* Increased height of LineChart container */}
                <div className="bg-[#0D0F15] rounded-md p-4 w-[95%] h-[200px] mt-3 flex justify-center content-center ml-2">
                  <LineChart />
                </div>
                <p className="m-3 font-semibold text-center">
                  Conclusion: Some good Content from the backend
                </p>
              </div>
            </div>
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md ">
              <div className="max-w-sm  overflow-hiddenrounded bg-[#D9D9D9] flex flex-col justify-center content-center ml-6">
                <h1 className="font-extrabold text-center text-black">
                  {" "}
                  Gaz-Tracer{" "}
                </h1>
              </div>
              {/* Increased height of LineChart container */}
              <div className=" rounded-md p-4 w-[95%] h-[200px] my-3 flex justify-evenly content-center ml-2">
                <div className="bg-[#0D0F15] flex w-[50%]  flex justify-center content-center rounded-md">
                  {" "}
                  <img src={MonitorPng} alt="..." />
                </div>

                <div className="flex flex-col content-center justify-evenly">
                  <div className="text-black">
                    <p className="font-semibold">Total Blinks : 42%</p>
                  </div>
                  <div className="text-black">
                    <p className="font-semibold">Irregular Blinks : 42%</p>
                  </div>
                </div>
              </div>
              <p className="m-3 font-semibold text-center">
                Conclusion: Some good Content from the backend
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 p-3">
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md ">
              <h1 className="font-extrabold text-center text-black">
                {" "}
                Frequency Analysis{" "}
              </h1>

              {/* Increased height of LineChart container */}
              <div className=" rounded-md p-4 w-[95%] h-[200px] my-3 flex flex-col justify-evenly content-center ml-2">
                <div className="flex justify-around w-full h-full gap-2 content-aroound">
                  {" "}
                  <div className="bg-[#0D0F15] flex w-[50%] pb-2 flex justify-evenly content-center rounded-md ">
                    {" "}
                    <img src={MonitorPng} alt="..." />
                  </div>{" "}
                  <div className="bg-[#0D0F15] flex w-[50%] pb-2 flex justify-center content-center rounded-md">
                    {" "}
                    <img src={MonitorPng} alt="..." />
                  </div>
                </div>
              </div>
              <p className="m-3 font-semibold text-center">
                Result: Give some User Friendly output
              </p>
              <p className="m-3 font-semibold text-center">
                Conclusion: Some good Content from the backend
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="content-center justify-around mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md ">
              <h1 className="mt-0 font-extrabold text-center text-black">
                {" "}
                Lipnet{" "}
              </h1>

              <div>
                <p className="m-3 font-semibold text-center">
                  Actual audio from the video
                </p>
                <p className="m-3 font-semibold text-center">
                  Real audio from the video
                </p>
                <p className="m-3 text-xl font-bold text-center text-blue-500">
                  Sync Score : 69%
                </p>
              </div>
            </div>
            <div className="content-center justify-around mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md ">
              <h1 className="mt-0 font-extrabold text-center text-black">
                {" "}
                Video Data{" "}
              </h1>

              <div>
                <p className="m-3 font-semibold text-center">
                  Video lenght
                </p>
                <p className="m-3 font-semibold text-center">
                 Frames 
                </p>
                <p className="m-3 text-xl font-bold text-center text-blue-500">
                  Ask Viswa what are we getting from the backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Video;

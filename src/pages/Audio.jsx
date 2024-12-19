import React from "react";
import MonitorPng from "../assets/monitor.png";
import LineChart from "../components/LineChart";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function Audio() {
  return (
    <>
    <Navbar />
      <div className="p-3 mt-3">
        
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
              <div className="bg-[#0D0F15] flex w-[50%]  justify-center content-center rounded-md">
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
      </div>
      <Footer />
    </>
  );
}

export default Audio;

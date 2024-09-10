import React from "react";
import { useLocation } from "react-router-dom";
import LineChart from "../components/LineChart";
import { Navbar } from "../components/Navbar";

function Result() {
  const location = useLocation();
  const { data } = location.state || {}; // Get the response data passed via navigate

  return (
    <>
    <Navbar/>
    <div className="flex flex-col content-center justify-center">

      <LineChart/>
      {data ? (
        <div>
          <p  className="text-white">{data.result}</p>
          <p  className="text-white">Video Duration: {data.duration} seconds</p>
        </div>
      ) : (
        <p className="text-white">No data available.</p>
      )}
    </div>
   
    </>
  );
}

export default Result;

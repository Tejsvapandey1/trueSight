import LineChart from "../charts/lineChart";
import React from "react";
import { useLocation } from "react-router-dom";
import BarChart from "../charts/barChart";
import RadarChart from "../charts/radarChart";
import DonutChart from "../charts/donutChart";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
// import focusData from "../data/data";

function Results() {
  const focusData = {
    overview: {
      totalFocusTime: "2 hours 15 minutes",
      totalDistractedTime: "45 minutes",
      averageFocusLevel: "75%",
      peakFocusLevel: "90% (2:00 PM - 2:30 PM)",
      lowestFocusLevel: "50% (1:30 PM - 1:45 PM)",
    },
    detailedTimeline: [
      {
        time: "1:00 PM",
        activity: "Started working",
        focusLevel: "70%",
        notes: "Focused on emails",
      },
      {
        time: "1:15 PM",
        activity: "Reading documents",
        focusLevel: "85%",
        notes: "Good concentration",
      },
      {
        time: "1:30 PM",
        activity: "Distraction",
        focusLevel: "50%",
        notes: "Phone notification",
      },
      {
        time: "1:45 PM",
        activity: "Resumed work",
        focusLevel: "80%",
        notes: "Back on track",
      },
      {
        time: "2:00 PM",
        activity: "Group discussion",
        focusLevel: "90%",
        notes: "Engaged and attentive",
      },
      {
        time: "2:30 PM",
        activity: "Writing report",
        focusLevel: "75%",
        notes: "Some minor distractions",
      },
      {
        time: "2:45 PM",
        activity: "Distraction",
        focusLevel: "60%",
        notes: "Social media browsing",
      },
      {
        time: "3:00 PM",
        activity: "Finalizing project",
        focusLevel: "80%",
        notes: "Productive conclusion",
      },
      {
        time: "3:15 PM",
        activity: "End of session",
        focusLevel: "70%",
        notes: "Overall productive day",
      },
    ],
    keyInsights: [
      "The primary distractions during this session were notifications from the phone and social media browsing.",
      "Peak focus was observed during the group discussion, indicating effective engagement with peers.",
      "Reducing distractions from notifications and setting dedicated focus periods could enhance productivity.",
    ],
    recommendations: [
      "Set 'Do Not Disturb' mode during work sessions to minimize distractions.",
      "Incorporate short breaks every hour to maintain focus and prevent burnout.",
      "Explore productivity tools like timers or focus apps to help manage work sessions more effectively.",
    ],
    conclusion:
      "This summary highlights your focus levels and distractions during today's session. By reflecting on these insights, you can make informed decisions to improve your focus and productivity in future tasks.",
  };

  const location = useLocation();
  const { file } = location.state || {};

  // Function to get the video duration in a human-readable format
  const getVideoDuration = (file) => {
    const videoElement = document.createElement("video");
    videoElement.src = URL.createObjectURL(file);

    return new Promise((resolve) => {
      videoElement.onloadedmetadata = () => {
        const duration = videoElement.duration; // duration in seconds
        resolve(formatDuration(duration));
      };
    });
  };

  // Helper function to format duration
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`; // Format as mm:ss
  };

  const [videoLength, setVideoLength] = React.useState("00:00");
  const today = new Date().toLocaleDateString(); // Get today's date

  // Fetch the video duration when the component mounts
  React.useEffect(() => {
    if (file) {
      getVideoDuration(file).then((duration) => setVideoLength(duration));
    }
  }, [file]);

  return (
    <>
      <Navbar />
      <div className="justify-center border-blue-400 d-flex">
        <div className="container grid items-center self-center justify-center grid-cols-2 gap-2">
          <LineChart />
          <BarChart />
          <RadarChart />
          <DonutChart />
        </div>
      </div>
      <div className="max-w-6xl p-6 mx-auto text-white bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Focus Overview</h2>
        <ul className="pl-5 mb-4 list-disc">
          <li>
            Total Focus Time: <span>{focusData.overview.totalFocusTime}</span>
          </li>
          <li>
            Total Distracted Time:{" "}
            <span>{focusData.overview.totalDistractedTime}</span>
          </li>
          <li>
            Average Focus Level:{" "}
            <span>{focusData.overview.averageFocusLevel}</span>
          </li>
          <li>
            Peak Focus Level: <span>{focusData.overview.peakFocusLevel}</span>
          </li>
          <li>
            Lowest Focus Level:{" "}
            <span>{focusData.overview.lowestFocusLevel}</span>
          </li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold">
          Detailed Focus and Distraction Timeline
        </h3>
        <table className="min-w-full mb-4 bg-gray-700 border border-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-600">Time</th>
              <th className="px-4 py-2 border-b border-gray-600">Activity</th>
              <th className="px-4 py-2 border-b border-gray-600">
                Focus Level
              </th>
              <th className="px-4 py-2 border-b border-gray-600">Notes</th>
            </tr>
          </thead>
          <tbody>
            {focusData.detailedTimeline.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-4 py-2 border-b border-gray-600">
                  {entry.time}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {entry.activity}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {entry.focusLevel}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {entry.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="mb-2 text-xl font-semibold">Key Insights</h3>
        <ul className="pl-5 mb-4 list-disc">
          {focusData.keyInsights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>

        <h3 className="mb-2 text-xl font-semibold">Recommendations</h3>
        <ul className="pl-5 mb-4 list-disc">
          {focusData.recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>

        <h3 className="mb-2 text-xl font-semibold">Conclusion</h3>
        <p>{focusData.conclusion}</p>
      </div>
      <Footer />
    </>
  );
}

export default Results;

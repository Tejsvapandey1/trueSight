import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto text-gray-800 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">Application Summary: User Focus Tracker</h1>
      
      <h2 className="mt-4 mb-2 text-2xl font-semibold">Overview:</h2>
      <p className="mb-4">
        The User Focus Tracker is an innovative application designed to monitor and analyze user focus levels during various tasks. By leveraging advanced tracking techniques, the application provides insights into user engagement and concentration, helping individuals optimize their productivity and achieve their goals.
      </p>

      <h2 className="mt-4 mb-2 text-2xl font-semibold">Key Features:</h2>
      <ul className="pl-5 mb-4 list-disc">
        <li><strong>Real-Time Focus Monitoring:</strong> Continuously tracks user attention through integrated camera and audio analysis, identifying periods of high and low focus.</li>
        <li><strong>User-Friendly Interface:</strong> Intuitive dashboard that visualizes focus data through charts and graphs, making it easy for users to understand their focus patterns over time.</li>
        <li><strong>Focus Analytics:</strong> Provides detailed reports on focus trends, including average focus duration, peak focus times, and distractions encountered during tasks.</li>
        <li><strong>Custom Alerts and Notifications:</strong> Users can set personalized alerts to remind them to refocus or take breaks when attention levels drop below a certain threshold.</li>
        <li><strong>Goal Setting and Tracking:</strong> Allows users to set specific focus-related goals and track their progress, fostering a proactive approach to managing attention.</li>
        <li><strong>Privacy and Data Security:</strong> Ensures user privacy by implementing strict data protection measures and giving users full control over their data.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-2xl font-semibold">Use Cases:</h2>
      <ul className="pl-5 mb-4 list-disc">
        <li>Ideal for students seeking to improve study habits and concentration during classes.</li>
        <li>Beneficial for professionals aiming to enhance productivity in the workplace.</li>
        <li>Useful for researchers studying attention spans and focus-related behaviors.</li>
      </ul>
    </div>
  );
};

export default About;

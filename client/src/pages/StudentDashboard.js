import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [qualification, setQualification] = useState('');
  const [exam, setExam] = useState('');
  const [duration, setDuration] = useState('');
  const [difficultTopic, setDifficultTopic] = useState('');
  const [roadmap, setRoadmap] = useState(null);

  const generateRoadmap = async () => {
    try {
      const response = await axios.post('your-backend-url/roadmap', {
        qualification,
        exam,
        duration,
        difficultTopic
      });
      setRoadmap(response.data.roadmap);
    } catch (error) {
      console.error('Error generating roadmap', error);
    }
  };

  useEffect(() => {
    // Fetch and display previous roadmap if available
    const storedRoadmap = localStorage.getItem('roadmap');
    if (storedRoadmap) {
      setRoadmap(storedRoadmap);
    }
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl mb-6">Student Dashboard</h2>
      <div className="mb-6">
        <input
          type="text"
          className="mb-4 p-2 border rounded w-full"
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
        <input
          type="text"
          className="mb-4 p-2 border rounded w-full"
          placeholder="Exam"
          value={exam}
          onChange={(e) => setExam(e.target.value)}
        />
        <input
          type="text"
          className="mb-4 p-2 border rounded w-full"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          className="mb-4 p-2 border rounded w-full"
          placeholder="Difficult Topic"
          value={difficultTopic}
          onChange={(e) => setDifficultTopic(e.target.value)}
        />
        <button
          onClick={generateRoadmap}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Generate Roadmap
        </button>
      </div>

      {roadmap && (
        <div className="mt-6 bg-white p-4 border rounded-lg">
          <h3 className="text-xl">Your Roadmap</h3>
          <p>{roadmap}</p>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;

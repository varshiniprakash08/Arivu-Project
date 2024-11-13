import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl mb-6">Teacher Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl">Available Training Programs</h3>
        {/* Map over available training programs */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl">Upload Your Resume</h3>
        <input type="file" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4">
          Upload Resume
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl">Apply as a Teacher</h3>
        {/* Map institutions list and apply */}
      </div>
    </div>
  );
};

export default TeacherDashboard;

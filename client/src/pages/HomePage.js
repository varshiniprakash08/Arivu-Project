import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to AI-Powered Education Platform</h1>
      <div className="flex space-x-6">
        <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-6 py-2 rounded-lg">Register</Link>
      </div>
    </div>
  );
}

export default HomePage;

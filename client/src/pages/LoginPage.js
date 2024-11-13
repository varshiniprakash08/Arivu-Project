import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('your-backend-url/login', {
        username,
        password,
        role
      });
      const { token } = response.data;
      localStorage.setItem('jwt', token);
      navigate(`/${role}-dashboard`);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input 
          type="text" 
          className="mb-4 p-2 border rounded w-full" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          className="mb-4 p-2 border rounded w-full" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <select 
          className="mb-4 p-2 border rounded w-full" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="institution">Institution</option>
        </select>
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full"
        >
          Login
        </button>
        <div className="mt-4">
          <span>Don't have an account?</span> <a href="/register" className="text-blue-500">Register</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

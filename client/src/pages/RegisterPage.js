import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('your-backend-url/register', { username, password, role });
      navigate('/login');
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
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
        </select>
        <button 
          onClick={handleRegister} 
          className="bg-green-500 text-white px-6 py-2 rounded-lg w-full"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;

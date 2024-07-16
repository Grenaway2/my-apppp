"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const [error, setError] = useState(null); // State to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Register button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    setError(null); // Reset error state
    try {
      await register(email, password);
      console.log('User registered successfully');
      alert('User registered successfully'); // Add alert to indicate success
    } catch (error) {
      console.error('Registration error:', error.message);
      setError(error.message); // Set error state
      alert('Registration failed: ' + error.message); // Add alert to indicate failure
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-600 text-white p-2 rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;



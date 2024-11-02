// src/pages/Register.js
import React, { useState } from 'react';
import api from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await api.post('/auth/register', { username, password, email });
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '400px' }}>
      <h4 className="text-primary">Create Your Account</h4>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleRegister}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;

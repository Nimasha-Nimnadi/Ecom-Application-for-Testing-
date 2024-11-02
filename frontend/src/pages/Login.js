// src/pages/Login.js
import React, { useState } from 'react';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '400px' }}>
      <h4 className="text-primary">Sign in to Your Account</h4>
      <form>
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
        <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleLogin}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;

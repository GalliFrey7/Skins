import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code to handle login
  };

  const handleRegister = () => {
    // add code to navigate to registration page
  };

  return (
    <><Header /><div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
      <a className="register-link">Don't have an account? <Link to={'/register'}>Register</Link></a>

    </div></>
  );
};

export default LoginPage;
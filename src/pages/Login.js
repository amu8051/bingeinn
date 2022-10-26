import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { UserAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, logIn } = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    try {
      await logIn(email, password);

      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }
  return (
    <div className="login_container">
      <Nav />
      {/* <img
        className="signup_bg_img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      /> */}
      <div className="login_box">
        <hi style={{ color: 'white', fontSize: '25px' }}>Log In</hi>
        {error ? <p style={{ color: 'white' }}> {error}</p> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">LogIn</button>
        </form>
        <p style={{ color: 'white' }}>
          <span>New to Netflix?</span>{' '}
          <Link to="/signup" style={{ color: 'red' }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { UserAuth } from '../context/AuthContext';
import Nav from '../components/Nav';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup_container">
      <Nav />
      {/* <img
        className="signup_bg_img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      /> */}
      <div className="signup_box">
        <hi style={{ color: 'white', fontSize: '25px' }}>Sign Up</hi>
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
          <button type="submit">Sign Up</button>
        </form>
        <p style={{ color: 'white' }}>
          <span>Already subscribed to Netflix?</span>{' '}
          <Link to="/login" style={{ color: 'red' }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

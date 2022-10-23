import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import { UserAuth } from '../context/AuthContext';

function Nav() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="nav">
      <Link to="/">
        <img
          className="nav_logo"
          src="https://static.wixstatic.com/media/aaf9ce_bcebd958835e41f8a978f5218ba179d2~mv2.png/v1/fill/w_106,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20bi.png"
          alt="NETFLIX"
        />
      </Link>

      {user?.email ? (
        <div className="buttons">
          <Link to="/account">
            <button style={{ backgroundColor: 'transparent' }}>Account</button>
          </Link>
          <Link>
            <button
              style={{ backgroundColor: 'red', marginRight: '40px' }}
              onClick={handleLogout}
            >
              LogOut
            </button>
          </Link>
        </div>
      ) : (
        <div className="buttons">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button style={{ backgroundColor: 'red', marginRight: '40px' }}>
              LogIn
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;

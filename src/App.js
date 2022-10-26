import './App.css';
import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import TinderCards from './components/TinderCards';
// import TinderCard from './components/TinderCard';

function App() {
  return (
    <AuthContextProvider>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/cards" element={<TinderCards />} />
      </Routes>
    </AuthContextProvider>
    // <div>
    //   <TinderCards />
    // </div>
  );
}

export default App;

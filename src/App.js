import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import HomePage from './HomePage';
import Booking from './Booking';
import Contact from './Contact';
import Login from './Login';


function App() {
  return (
    <Router>
      {/* Header - Outside the grid, spans full width */}
      <div className='head'>
        <header>
          <div className="header-content">
            <div className="brand">
              <span className="brand-icon">🏥</span>
              <div className="brand-text">
                <h1>MediCare</h1>
                <span className="tagline">Book your appointment today</span>
              </div>
            </div>
            <nav>
              <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Home
                </NavLink>
                <NavLink to="/booking" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Booking
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Contact
                </NavLink>
              </div>
              <div className="login-section">
                <NavLink to="/login" className={({ isActive }) => isActive ? "login-btn active" : "login-btn"}>
                  Sign In
                </NavLink>
              </div>
            </nav>
          </div>
        </header>
      </div>

      {/* Routes - These render your pages below the header */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
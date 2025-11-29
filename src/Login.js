
import { Link } from 'react-router-dom';
// import './Login.scss';
import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    alert('Login successful!');
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #fff5f5, #ffffff)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}>
        {/* Left Side - Info */}
        <div style={{
          background: 'linear-gradient(135deg, #c62828, #b71c1c)',
          padding: '3rem',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: '600' }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: '0.95rem', opacity: 0.95, lineHeight: '1.6' }}>
              Sign in to access your medical records, appointments, and health information
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                flexShrink: 0
              }}>
                📅
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>Manage Appointments</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0 }}>
                  Book and track your medical visits
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                flexShrink: 0
              }}>
                📊
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>Health Records</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0 }}>
                  Access your complete medical history
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                flexShrink: 0
              }}>
                💊
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>Prescriptions</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0 }}>
                  View and refill your medications
                </p>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '0.85rem',
            opacity: 0.9
          }}>
            🔒 Your data is secure and encrypted
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={{ padding: '3rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🏥</span>
              <h2 style={{ fontSize: '1.25rem', color: '#c62828', margin: 0, fontWeight: '600' }}>
                MediCare
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              Enter your credentials to continue
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#333',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.75rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c62828'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <span style={{
                  position: 'absolute',
                  left: '0.875rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.1rem'
                }}>
                  ✉️
                </span>
              </div>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#333',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.75rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c62828'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <span style={{
                  position: 'absolute',
                  left: '0.875rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.1rem'
                }}>
                  🔒
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem'
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer',
                    accentColor: '#c62828'
                  }}
                />
                <span style={{ color: '#666' }}>Remember me</span>
              </label>
              <a href="#" style={{
                color: '#c62828',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Forgot password?
              </a>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: '#c62828',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginTop: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#b71c1c';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(198, 40, 40, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#c62828';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Sign In
            </button>

            <div style={{
              textAlign: 'center',
              fontSize: '0.9rem',
              color: '#666',
              marginTop: '0.5rem'
            }}>
              Don't have an account?{' '}
              <a href="#" style={{
                color: '#c62828',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Sign up here
              </a>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0'
          }}>
            <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
            <span style={{ fontSize: '0.85rem', color: '#999' }}>or continue with</span>
            <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
          </div>

          {/* Social Login */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <button style={{
              padding: '0.75rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              background: 'white',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
              e.currentTarget.style.borderColor = '#c62828';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}>
              <span style={{ fontSize: '1.1rem' }}>🔵</span>
              Google
            </button>
            <button style={{
              padding: '0.75rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              background: 'white',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
              e.currentTarget.style.borderColor = '#c62828';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}>
              <span style={{ fontSize: '1.1rem' }}>📘</span>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
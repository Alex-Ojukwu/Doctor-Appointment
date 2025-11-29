
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #fff5f5, #ffffff)',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            color: '#333', 
            marginBottom: '0.5rem',
            fontWeight: '600'
          }}>
            Get In Touch
          </h1>
          <p style={{ color: '#666', fontSize: '0.95rem' }}>
            We're here to help and answer any questions you might have
          </p>
        </div>

        {/* Emergency Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #c62828, #b71c1c)',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          color: 'white'
        }}>
          <div style={{ fontSize: '2rem' }}>🚨</div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: '600' }}>
              Emergency Contact
            </h3>
            <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.95 }}>
              For medical emergencies, please call <strong>911</strong> immediately or visit your nearest emergency room.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
          {/* Contact Information */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #f0f0f0'
            }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#333' }}>
                Contact Information
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                We look forward to hearing from you and helping with your healthcare needs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#fff5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    📍
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.25rem' }}>
                      Address
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.5' }}>
                      123 Medical Center Drive<br />
                      Health City, HC 12345
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#fff5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    📞
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.25rem' }}>
                      Phone
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
                      +234 (81) 3699 3112
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#fff5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    ✉️
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.25rem' }}>
                      Email
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
                      alexO@doctorsappointment.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#fff5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    🕒
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#333', marginBottom: '0.25rem' }}>
                      Hours
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.5' }}>
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {['📘', '🐦', '📷', '💼'].map((icon, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      background: '#fff5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#c62828';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff5f5';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #f0f0f0'
          }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#333' }}>
              Send us a Message
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: '#333',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#c62828'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>

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
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#c62828'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
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
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c62828'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: '#333',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c62828'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  background: '#c62828',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
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
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Quick Response Info */}
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid #f0f0f0',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            📧 We typically respond within <strong style={{ color: '#c62828' }}>24 hours</strong> during business days
          </p>
        </div>
      </div>
    </div>
  );
}
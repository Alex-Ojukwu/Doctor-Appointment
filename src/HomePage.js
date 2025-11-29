import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Booking from './Booking';

export default function MedicalDashboard() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('services');

  const items = [
    'Dashboard',
    'My Account',
    'Find a Doctor',
    'Appointments',
    'Health History',
    'Notification Preferences',
    'Available Hospitals',
    'Billings & Payments',
    'Reports',
    'Settings'
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  const services = [
    { icon: '🩺', title: 'General Practice', desc: 'Routine check-ups and health screenings', wait: '15 min' },
    { icon: '❤️', title: 'Cardiology', desc: 'Heart and cardiovascular care', wait: '20 min' },
    { icon: '🦴', title: 'Orthopedics', desc: 'Bone, joint, and muscle treatment', wait: '25 min' },
    { icon: '🧠', title: 'Neurology', desc: 'Brain and nervous system specialists', wait: '30 min' },
    { icon: '👁️', title: 'Ophthalmology', desc: 'Eye care and vision services', wait: '15 min' },
    { icon: '🦷', title: 'Dental', desc: 'Oral health and dental procedures', wait: '20 min' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #fff5f5, #ffffff)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{
          width: '240px',
          background: 'white',
          borderRight: '1px solid #ffe5e5',
          minHeight: 'calc(100vh - 65px)',
          padding: '2rem 0'
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '0.875rem 1.5rem',
                cursor: 'pointer',
                color: idx === 0 ? '#c62828' : '#666',
                background: idx === 0 ? '#fff5f5' : 'transparent',
                borderLeft: idx === 0 ? '3px solid #c62828' : '3px solid transparent',
                fontSize: '0.95rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (idx !== 0) {
                  e.currentTarget.style.background = '#fafafa';
                  e.currentTarget.style.color = '#c62828';
                }
              }}
              onMouseLeave={(e) => {
                if (idx !== 0) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#666';
                }
              }}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
          {/* Stats Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #ffe5e5'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Total Patients</div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#c62828' }}>1,248</div>
              <div style={{ fontSize: '0.8rem', color: '#4caf50', marginTop: '0.5rem' }}>↑ 12% from last month</div>
            </div>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #ffe5e5'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Today's Appointments</div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#c62828' }}>32</div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>8 completed</div>
            </div>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #ffe5e5'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Avg. Wait Time</div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#c62828' }}>18m</div>
              <div style={{ fontSize: '0.8rem', color: '#4caf50', marginTop: '0.5rem' }}>↓ 5 min improvement</div>
            </div>
          </div>

          {/* Services Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Available Departments</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}>
              {services.map((service, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #f0f0f0',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(198, 40, 40, 0.1)';
                    e.currentTarget.style.borderColor = '#ffcdd2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#f0f0f0';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#333' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                    {service.desc}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #f5f5f5'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#999' }}>Wait: {service.wait}</span>
                    <span style={{ fontSize: '0.85rem', color: '#c62828', fontWeight: '500' }}>Book →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Patients */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #ffe5e5'
          }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#333' }}>Recent Patient Activity</h2>
            {loading ? (
              <div style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>Loading...</div>
            ) : (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {user.slice(0, 5).map((patient) => (
                  <div
                    key={patient.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      background: '#fafafa',
                      borderRadius: '8px',
                      border: '1px solid #f0f0f0'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#ffebee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c62828',
                        fontWeight: '600'
                      }}>
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: '500', color: '#333', fontSize: '0.95rem' }}>{patient.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#999' }}>{patient.email}</div>
                      </div>
                    </div>
                    <button style={{
                      background: 'transparent',
                      border: '1px solid #e0e0e0',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      color: '#666'
                    }}>
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
import React from 'react';
import { useApp } from '../../../context/AppContext';
import './MenteeDashboard.css';

const MenteeDashboard = () => {
  const { navigateToPage } = useApp();

  const sessions = [
    {
      id: 1,
      title: 'Python Fundamentals',
      mentor: 'Dr. Arun Patel',
      date: '2025-02-10',
      time: '10:00 AM',
      status: 'COMPLETED',
      statusColor: 'green'
    },
    {
      id: 2,
      title: 'ML Basics',
      mentor: 'Dr. Arun Patel',
      date: '2025-02-17',
      time: '10:00 AM',
      status: 'SCHEDULED',
      statusColor: 'blue'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
  };

  return (
    <div className="mentee-dashboard">
      <div className="mentee-page-header">
        <h1 className="mentee-page-title">My Sessions</h1>
      </div>

      <div className="mentee-sessions-container">
        {sessions.map((session) => (
          <div key={session.id} className="mentee-session-card">
            <div className="mentee-session-card-header">
              <h2 className="mentee-session-title">{session.title}</h2>
              <div className="mentee-session-actions">
                <span className={`mentee-status-badge mentee-status-${session.statusColor}`}>
                  {session.status}
                </span>
                {session.status === 'SCHEDULED' && (
                  <button 
                    className="mentee-join-call-btn"
                    onClick={() => navigateToPage('mentee-join-call')}
                  >
                    Join Call
                  </button>
                )}
              </div>
            </div>
            <div className="mentee-session-details">
              <p className="mentee-session-mentor">Mentor: {session.mentor}</p>
              <p className="mentee-session-date">
                {formatDate(session.date)} at {session.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenteeDashboard;

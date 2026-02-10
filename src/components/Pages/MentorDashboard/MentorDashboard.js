import React from 'react';
import { useApp } from '../../../context/AppContext';
import './MentorDashboard.css';

const MentorDashboard = () => {
  const { navigateToPage } = useApp();

  const sessions = [
    {
      id: 1,
      title: 'Python Fundamentals',
      mentee: 'Riya Kapoor',
      date: '2025-02-10',
      time: '10:00 AM',
      status: 'COMPLETED',
      statusColor: 'green'
    },
    {
      id: 2,
      title: 'ML Basics',
      mentee: 'Riya Kapoor',
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
    <div className="mentor-dashboard">
      <div className="mentor-page-header">
        <h1 className="mentor-page-title">My Sessions</h1>
      </div>

      <div className="mentor-sessions-container">
        {sessions.map((session) => (
          <div key={session.id} className="mentor-session-card">
            <div className="mentor-session-card-header">
              <h2 className="mentor-session-title">{session.title}</h2>
              <div className="mentor-session-actions">
                <span className={`mentor-status-badge mentor-status-${session.statusColor}`}>
                  {session.status}
                </span>
                {session.status === 'SCHEDULED' && (
                  <button 
                    className="mentor-join-call-btn"
                    onClick={() => navigateToPage('mentor-join-call')}
                  >
                    Join Call
                  </button>
                )}
              </div>
            </div>
            <div className="mentor-session-details">
              <p className="mentor-session-mentee">Mentee: {session.mentee}</p>
              <p className="mentor-session-date">
                {formatDate(session.date)} at {session.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorDashboard;

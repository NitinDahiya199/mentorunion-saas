import React from 'react';
import { useApp } from '../../../context/AppContext';
import './MentorDashboard.css';

const MentorDashboard = () => {
  const { navigateToPage, selectedOrganization } = useApp();

  // Get sessions for the selected organization
  const sessions = selectedOrganization?.sessions || [];

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
        <div>
          <h1 className="mentor-page-title">My Sessions</h1>
          {selectedOrganization && (
            <div className="mentor-org-badge">
              <i className={`fas ${selectedOrganization.icon}`}></i>
              <span>{selectedOrganization.name}</span>
            </div>
          )}
        </div>
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

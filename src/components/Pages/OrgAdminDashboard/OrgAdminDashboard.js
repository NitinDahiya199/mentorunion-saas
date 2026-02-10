import React from 'react';
import { useApp } from '../../../context/AppContext';
import './OrgAdminDashboard.css';

const OrgAdminDashboard = () => {
  const { navigateToPage } = useApp();

  const summaryCards = [
    { label: 'PROGRAMS', value: '1', color: 'orange' },
    { label: 'MENTORS', value: '1', color: 'default' },
    { label: 'MENTEES', value: '1', color: 'default' },
    { label: 'SESSIONS', value: '2', color: 'default' }
  ];

  const upcomingSessions = [
    {
      agenda: 'ML Basics',
      date: '2025-02-17',
      time: '10:00 AM',
      status: 'SCHEDULED',
      statusColor: 'blue'
    }
  ];

  const quickActions = [
    { label: '+ Book a Session', icon: 'fa-plus', page: 'session-booking' },
    { label: 'Manage Mentors', icon: 'fa-users', page: 'mentors' },
    { label: 'Manage Mentees', icon: 'fa-user-graduate', page: 'mentees' },
    { label: 'Manage Programs', icon: 'fa-th', page: 'programs' }
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
    <div className="org-admin-dashboard">
      <h1 className="org-dashboard-title">Organisation Dashboard</h1>

      <div className="org-summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className={`org-summary-card ${card.color === 'orange' ? 'org-card-orange' : ''}`}>
            <div className="org-card-label">{card.label}</div>
            <div className={`org-card-value ${card.color === 'orange' ? 'org-value-orange' : ''}`}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <div className="org-dashboard-content">
        <div className="org-dashboard-section">
          <h2 className="org-section-title">Upcoming Sessions</h2>
          <div className="org-upcoming-sessions">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="org-session-item">
                <div className="org-session-info">
                  <div className="org-session-agenda">{session.agenda}</div>
                  <div className="org-session-date">
                    {formatDate(session.date)} at {session.time}
                  </div>
                </div>
                <span className={`org-status-badge org-status-${session.statusColor}`}>
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="org-dashboard-section">
          <h2 className="org-section-title">Quick Actions</h2>
          <div className="org-quick-actions">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="org-action-btn"
                onClick={() => navigateToPage(action.page)}
              >
                <i className={`fas ${action.icon}`}></i>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgAdminDashboard;

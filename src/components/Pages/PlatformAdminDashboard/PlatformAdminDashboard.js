import React from 'react';
import { useApp } from '../../../context/AppContext';
import './PlatformAdminDashboard.css';

const PlatformAdminDashboard = () => {
  const { openModal } = useApp();

  const summaryCards = [
    { label: 'ORGANISATIONS', value: '1', color: 'purple' },
    { label: 'TOTAL SESSIONS', value: '2', color: 'default' },
    { label: 'ACTIVE MENTORS', value: '1', color: 'default' },
    { label: 'PLATFORM REVENUE', value: '$8', color: 'green' }
  ];

  const recentActivity = [
    {
      type: 'success',
      message: 'Acadify Learning completed session #1',
      timestamp: '2 hours ago',
      color: 'green'
    },
    {
      type: 'info',
      message: 'New organisation onboarded: Acadify Learning',
      timestamp: '3 days ago',
      color: 'purple'
    },
    {
      type: 'warning',
      message: 'Platform rules updated by Super Admin',
      timestamp: '1 week ago',
      color: 'red'
    }
  ];

  return (
    <div className="platform-admin-dashboard">
      <h1 className="platform-dashboard-title">Platform Overview</h1>

      <div className="platform-summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className={`platform-summary-card ${card.color === 'purple' ? 'platform-card-purple' : ''} ${card.color === 'green' ? 'platform-card-green' : ''}`}>
            <div className="platform-card-label">{card.label}</div>
            <div className={`platform-card-value ${card.color === 'purple' ? 'platform-value-purple' : ''} ${card.color === 'green' ? 'platform-value-green' : ''}`}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <div className="platform-recent-activity">
        <h2 className="platform-section-title">Recent Activity</h2>
        <p className="platform-section-subtitle">Read-only view of platform activity</p>
        <div className="platform-activity-list">
          {recentActivity.map((activity, index) => (
            <div key={index} className="platform-activity-item">
              <div className={`platform-activity-dot platform-dot-${activity.color}`}></div>
              <div className="platform-activity-content">
                <div className="platform-activity-message">{activity.message}</div>
                <div className="platform-activity-timestamp">{activity.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformAdminDashboard;

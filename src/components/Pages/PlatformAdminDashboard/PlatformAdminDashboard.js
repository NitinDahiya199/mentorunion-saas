import React from 'react';
import { useApp } from '../../../context/AppContext';
import './PlatformAdminDashboard.css';

const PlatformAdminDashboard = () => {
  const { openModal, selectedPlatformOrganization, platformOrganizations } = useApp();

  // Calculate totals across all organizations or show selected organization data
  const totalOrganisations = platformOrganizations?.length || 0;
  const totalSessions = platformOrganizations?.reduce((sum, org) => sum + (org.totalSessions || 0), 0) || 0;
  const totalActiveMentors = platformOrganizations?.reduce((sum, org) => sum + (org.activeMentors || 0), 0) || 0;
  const totalRevenue = platformOrganizations?.reduce((sum, org) => {
    const revenue = parseInt(org.revenue?.replace(/[^0-9]/g, '') || '0');
    return sum + revenue;
  }, 0) || 0;

  // Use selected organization data if available, otherwise show totals
  const summaryCards = selectedPlatformOrganization ? [
    { label: 'ADMIN', value: selectedPlatformOrganization.name, color: 'purple', isText: true },
    { label: 'TOTAL SESSIONS', value: selectedPlatformOrganization.totalSessions?.toString() || '0', color: 'default' },
    { label: 'ACTIVE USERS', value: selectedPlatformOrganization.activeMentors?.toString() || '0', color: 'default' },
    { label: 'REVENUE', value: selectedPlatformOrganization.revenue || '$0', color: 'green' }
  ] : [
    { label: 'ORGANISATIONS', value: totalOrganisations.toString(), color: 'purple' },
    { label: 'TOTAL SESSIONS', value: totalSessions.toString(), color: 'default' },
    { label: 'ACTIVE MENTORS', value: totalActiveMentors.toString(), color: 'default' },
    { label: 'PLATFORM REVENUE', value: `$${totalRevenue.toLocaleString()}`, color: 'green' }
  ];

  // Use selected organization's activity or show platform-wide activity
  const recentActivity = selectedPlatformOrganization?.recentActivity || [
    {
      type: 'success',
      message: 'Platform activity across all organizations',
      timestamp: '2 hours ago',
      color: 'green'
    },
    {
      type: 'info',
      message: 'New organisation onboarded',
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
      <div className="platform-dashboard-header">
        <h1 className="platform-dashboard-title">
          {selectedPlatformOrganization ? `${selectedPlatformOrganization.name} Overview` : 'Platform Overview'}
        </h1>
        {selectedPlatformOrganization && (
          <div className="platform-org-badge">
            <i className={`fas ${selectedPlatformOrganization.icon}`}></i>
            <span>{selectedPlatformOrganization.name}</span>
          </div>
        )}
      </div>

      <div className="platform-summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className={`platform-summary-card ${card.color === 'purple' ? 'platform-card-purple' : ''} ${card.color === 'green' ? 'platform-card-green' : ''}`}>
            <div className="platform-card-label">{card.label}</div>
            <div className={`platform-card-value ${card.color === 'purple' ? 'platform-value-purple' : ''} ${card.color === 'green' ? 'platform-value-green' : ''} ${card.isText ? 'platform-value-text' : ''}`}>
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

import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './Activity.css';

const Activity = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample activity logs - in a real app, this would come from an API
  const allActivities = [
    {
      id: 1,
      type: 'system',
      action: 'Session Rules Updated',
      description: 'Session duration changed from 45 minutes to 60 minutes',
      user: 'Super Admin',
      timestamp: '2 hours ago',
      severity: 'info',
      icon: 'fa-cog'
    },
    {
      id: 2,
      type: 'billing',
      action: 'Billing Logic Modified',
      description: 'Platform fee updated from 12% to 15%',
      user: 'Super Admin',
      timestamp: '5 hours ago',
      severity: 'warning',
      icon: 'fa-dollar-sign'
    },
    {
      id: 3,
      type: 'feature',
      action: 'Platform Feature Enabled',
      description: 'Advanced Analytics (Beta) feature enabled for all organisations',
      user: 'Super Admin',
      timestamp: '1 day ago',
      severity: 'success',
      icon: 'fa-bolt'
    },
    {
      id: 4,
      type: 'system',
      action: 'System Configuration Exported',
      description: 'Complete system configuration exported to JSON file',
      user: 'Super Admin',
      timestamp: '2 days ago',
      severity: 'info',
      icon: 'fa-download'
    },
    {
      id: 5,
      type: 'security',
      action: 'Security Policy Updated',
      description: 'Password policy changed to High security level',
      user: 'Super Admin',
      timestamp: '3 days ago',
      severity: 'warning',
      icon: 'fa-shield-alt'
    },
    {
      id: 6,
      type: 'billing',
      action: 'Credit System Modified',
      description: 'Default credit allocation changed from 10 to 15 credits per user',
      user: 'Super Admin',
      timestamp: '4 days ago',
      severity: 'info',
      icon: 'fa-coins'
    },
    {
      id: 7,
      type: 'feature',
      action: 'Platform Feature Disabled',
      description: 'Experimental AI Matching feature disabled due to performance issues',
      user: 'Super Admin',
      timestamp: '5 days ago',
      severity: 'error',
      icon: 'fa-ban'
    },
    {
      id: 8,
      type: 'system',
      action: 'Database Backup Completed',
      description: 'Scheduled database backup completed successfully',
      user: 'System',
      timestamp: '1 week ago',
      severity: 'success',
      icon: 'fa-database'
    },
    {
      id: 9,
      type: 'billing',
      action: 'Payment Gateway Updated',
      description: 'Stripe payment gateway configuration updated',
      user: 'Super Admin',
      timestamp: '1 week ago',
      severity: 'info',
      icon: 'fa-credit-card'
    },
    {
      id: 10,
      type: 'system',
      action: 'System Maintenance Completed',
      description: 'Scheduled maintenance window completed. All systems operational.',
      user: 'System',
      timestamp: '2 weeks ago',
      severity: 'success',
      icon: 'fa-tools'
    }
  ];

  const filteredActivities = allActivities.filter(activity => {
    const matchesFilter = filter === 'all' || activity.type === filter;
    const matchesSearch = searchQuery === '' || 
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.user.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activityStats = {
    total: allActivities.length,
    system: allActivities.filter(a => a.type === 'system').length,
    billing: allActivities.filter(a => a.type === 'billing').length,
    feature: allActivities.filter(a => a.type === 'feature').length,
    security: allActivities.filter(a => a.type === 'security').length
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'success':
        return 'var(--mentorunion-green)';
      case 'warning':
        return 'var(--mentorunion-orange)';
      case 'error':
        return 'var(--mentorunion-red)';
      default:
        return 'var(--mentorunion-blue)';
    }
  };

  const getSeverityBg = (severity) => {
    switch (severity) {
      case 'success':
        return 'rgba(16, 185, 129, 0.15)';
      case 'warning':
        return 'rgba(249, 115, 22, 0.15)';
      case 'error':
        return 'rgba(239, 68, 68, 0.15)';
      default:
        return 'rgba(37, 99, 235, 0.15)';
    }
  };

  return (
    <div className="activity-page">
      <div className="activity-header">
        <div>
          <h1 className="activity-title">Activity Logs</h1>
          <p className="activity-subtitle">Monitor all system activities and changes</p>
        </div>
      </div>

      <div className="activity-stats">
        <div className="activity-stat-card">
          <div className="activity-stat-label">TOTAL ACTIVITIES</div>
          <div className="activity-stat-value">{activityStats.total}</div>
        </div>
        <div className="activity-stat-card">
          <div className="activity-stat-label">SYSTEM</div>
          <div className="activity-stat-value activity-stat-system">{activityStats.system}</div>
        </div>
        <div className="activity-stat-card">
          <div className="activity-stat-label">BILLING</div>
          <div className="activity-stat-value activity-stat-billing">{activityStats.billing}</div>
        </div>
        <div className="activity-stat-card">
          <div className="activity-stat-label">FEATURES</div>
          <div className="activity-stat-value activity-stat-feature">{activityStats.feature}</div>
        </div>
        <div className="activity-stat-card">
          <div className="activity-stat-label">SECURITY</div>
          <div className="activity-stat-value activity-stat-security">{activityStats.security}</div>
        </div>
      </div>

      <div className="activity-filters">
        <div className="activity-search-container">
          <i className="fas fa-search activity-search-icon"></i>
          <input
            type="text"
            className="activity-search-input"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="activity-filter-chips">
          {['all', 'system', 'billing', 'feature', 'security'].map(value => (
            <button
              key={value}
              className={`activity-filter-chip ${filter === value ? 'active' : ''}`}
              onClick={() => setFilter(value)}
            >
              {value === 'all' ? 'All' : value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="activity-logs-container">
        {filteredActivities.length === 0 ? (
          <div className="activity-empty-state">
            <i className="fas fa-history"></i>
            <p>No activities found matching your filters.</p>
          </div>
        ) : (
          <div className="activity-timeline">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="activity-log-item">
                <div 
                  className="activity-log-indicator"
                  style={{ 
                    backgroundColor: getSeverityBg(activity.severity),
                    borderColor: getSeverityColor(activity.severity)
                  }}
                >
                  <i 
                    className={`fas ${activity.icon}`}
                    style={{ color: getSeverityColor(activity.severity) }}
                  ></i>
                </div>
                <div className="activity-log-content">
                  <div className="activity-log-header">
                    <h3 className="activity-log-action">{activity.action}</h3>
                    <span className="activity-log-timestamp">{activity.timestamp}</span>
                  </div>
                  <p className="activity-log-description">{activity.description}</p>
                  <div className="activity-log-meta">
                    <span className="activity-log-type">{activity.type.toUpperCase()}</span>
                    <span className="activity-log-user">
                      <i className="fas fa-user"></i> {activity.user}
                    </span>
                    <span 
                      className="activity-log-severity"
                      style={{ color: getSeverityColor(activity.severity) }}
                    >
                      {activity.severity.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;

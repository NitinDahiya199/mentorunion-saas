import React, { useState, useRef, useEffect } from 'react';
import './Activity.css';

const Activity = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOrganisation, setSelectedOrganisation] = useState('all');
  const [isOrgFilterOpen, setIsOrgFilterOpen] = useState(false);
  const filterRef = useRef(null);
  const orgFilterRef = useRef(null);

  // Sample activity logs - in a real app, this would come from an API
  const allActivities = [
    {
      id: 1,
      type: 'system',
      action: 'Session Rules Updated',
      description: 'Session duration changed from 45 minutes to 60 minutes',
      user: 'Super Admin',
      organisation: 'TechMentor Inc.',
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
      organisation: 'CareerGrowth Academy',
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
      organisation: 'All Organisations',
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
      organisation: 'TechMentor Inc.',
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
      organisation: 'Leadership Institute',
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
      organisation: 'TechMentor Inc.',
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
      organisation: 'CareerGrowth Academy',
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
      organisation: 'All Organisations',
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
      organisation: 'Leadership Institute',
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
      organisation: 'All Organisations',
      timestamp: '2 weeks ago',
      severity: 'success',
      icon: 'fa-tools'
    }
  ];

  // Get unique organisations from activities
  const organisations = ['all', ...new Set(allActivities.map(a => a.organisation))];

  const filteredActivities = allActivities.filter(activity => {
    let matchesFilter = true;
    
    if (filter === 'organisation') {
      // When organisation filter is selected, filter by selected organisation
      matchesFilter = selectedOrganisation === 'all' || activity.organisation === selectedOrganisation;
    } else {
      // For other filters, use the type filter
      matchesFilter = filter === 'all' || activity.type === filter;
    }
    
    const matchesSearch = searchQuery === '' || 
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.organisation.toLowerCase().includes(searchQuery.toLowerCase());
    
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (orgFilterRef.current && !orgFilterRef.current.contains(event.target)) {
        setIsOrgFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'system', label: 'System' },
    { value: 'billing', label: 'Billing' },
    { value: 'feature', label: 'Feature' },
    { value: 'security', label: 'Security' },
    { value: 'organisation', label: 'Organisation' }
  ];

  const currentFilterLabel = filterOptions.find(opt => opt.value === filter)?.label || 'All';

  const handleFilterSelect = (value) => {
    setFilter(value);
    setIsFilterOpen(false);
    // Reset organisation filter when switching away from organisation filter
    if (value !== 'organisation') {
      setSelectedOrganisation('all');
    }
  };

  const handleOrganisationSelect = (org) => {
    setSelectedOrganisation(org);
    setIsOrgFilterOpen(false);
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
        <div className="activity-filter-dropdown" ref={filterRef}>
          <button
            className="activity-filter-button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <i className="fas fa-filter"></i>
            <span>{currentFilterLabel}</span>
            <i className={`fas fa-chevron-${isFilterOpen ? 'up' : 'down'}`}></i>
          </button>
          {isFilterOpen && (
            <div className="activity-filter-menu">
              {filterOptions.map(option => (
                <button
                  key={option.value}
                  className={`activity-filter-menu-item ${filter === option.value ? 'active' : ''}`}
                  onClick={() => handleFilterSelect(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {filter === 'organisation' && (
          <div className="activity-filter-dropdown" ref={orgFilterRef}>
            <button
              className="activity-filter-button"
              onClick={() => setIsOrgFilterOpen(!isOrgFilterOpen)}
            >
              <i className="fas fa-building"></i>
              <span>{selectedOrganisation === 'all' ? 'All Organisations' : selectedOrganisation}</span>
              <i className={`fas fa-chevron-${isOrgFilterOpen ? 'up' : 'down'}`}></i>
            </button>
            {isOrgFilterOpen && (
              <div className="activity-filter-menu">
                {organisations.map(org => (
                  <button
                    key={org}
                    className={`activity-filter-menu-item ${selectedOrganisation === org ? 'active' : ''}`}
                    onClick={() => handleOrganisationSelect(org)}
                  >
                    {org === 'all' ? 'All Organisations' : org}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
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
                    {activity.organisation && (
                      <span className="activity-log-organisation">
                        <i className="fas fa-building"></i> {activity.organisation}
                      </span>
                    )}
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

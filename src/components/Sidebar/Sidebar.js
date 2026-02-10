import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import './Sidebar.css';

const Sidebar = () => {
  const { currentRole, currentPage, sidebarCollapsed, navigateToPage, mentorOrganizations, selectedOrganization, setSelectedOrganization, platformOrganizations, selectedPlatformOrganization, setSelectedPlatformOrganization } = useApp();
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const [platformOrgDropdownOpen, setPlatformOrgDropdownOpen] = useState(false);
  const [sessionsExpanded, setSessionsExpanded] = useState(false);
  const [userManagementExpanded, setUserManagementExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const platformDropdownRef = useRef(null);

  const navigationConfig = {
    'super-admin': {
      title: 'System Configuration',
      items: [
        { page: 'session-rules', icon: 'fa-cog', label: 'Session Rules' },
        { page: 'billing-logic', icon: 'fa-dollar-sign', label: 'Billing & Credits' },
        { page: 'platform-features', icon: 'fa-bolt', label: 'Platform Features' },
        { page: 'activity', icon: 'fa-history', label: 'Activity' }
      ]
    },
    'platform-admin': {
      title: 'Platform Management',
      items: [
        { page: 'platform-dashboard', icon: 'fa-home', label: 'Dashboard' },
        { page: 'admin-management', icon: 'fa-user-shield', label: 'Admin Management' },
        { page: 'ticket-raised', icon: 'fa-ticket-alt', label: 'Ticket Raised' },
        { page: 'call-records', icon: 'fa-phone-alt', label: 'Call Records' },
        { page: 'platform-revenue', icon: 'fa-dollar-sign', label: 'Revenue' }
      ]
    },
    'org-admin': {
      title: 'Organisation Management',
      items: [
        { page: 'org-dashboard', icon: 'fa-home', label: 'Dashboard' },
        { page: 'programs', icon: 'fa-th', label: 'Programs' },
        { page: 'mentors', icon: 'fa-users', label: 'Mentors' },
        { page: 'mentees', icon: 'fa-user-graduate', label: 'Mentees' },
        { page: 'sessions', icon: 'fa-calendar', label: 'Sessions' },
        { page: 'user-management', icon: 'fa-user-cog', label: 'User Management' },
        { page: 'billing-payouts', icon: 'fa-dollar-sign', label: '$ Billing & Payouts' },
        { page: 'org-ticket-raised', icon: 'fa-ticket-alt', label: 'Ticket Raised' },
        { page: 'support', icon: 'fa-headset', label: 'Support' }
      ]
    },
    'mentor': {
      title: 'Mentor Dashboard',
      items: [
        { page: 'mentor-dashboard', icon: 'fa-calendar', label: 'My Sessions' },
        { page: 'mentor-availability', icon: 'fa-clock', label: 'Availability' },
        { page: 'mentor-join-call', icon: 'fa-video', label: 'Join Call' },
        { page: 'mentor-submit-feedback', icon: 'fa-comment-alt', label: 'Feedback' }
      ]
    },
    'mentee': {
      title: 'Mentee Dashboard',
      items: [
        { page: 'mentee-dashboard', icon: 'fa-calendar', label: 'My Sessions' },
        { page: 'mentee-join-call', icon: 'fa-video', label: 'Join Call' },
        { page: 'mentee-submit-feedback', icon: 'fa-comment-alt', label: 'Feedback' }
      ]
    }
  };

  const navConfig = navigationConfig[currentRole] || navigationConfig['super-admin'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOrgDropdownOpen(false);
      }
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target)) {
        setPlatformOrgDropdownOpen(false);
      }
    };

    if (orgDropdownOpen || platformOrgDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [orgDropdownOpen, platformOrgDropdownOpen]);

  const handleOrgSelect = (org) => {
    setSelectedOrganization(org);
    setOrgDropdownOpen(false);
    // Reset to dashboard when organization changes
    if (currentRole === 'mentor') {
      navigateToPage('mentor-dashboard');
    }
  };

  const handlePlatformOrgSelect = (org) => {
    setSelectedPlatformOrganization(org);
    setPlatformOrgDropdownOpen(false);
    // Navigate to platform dashboard when organization changes
    navigateToPage('platform-dashboard');
  };

  const orgSummary = currentRole === 'org-admin' ? {
    name: 'Acadify Learning',
    mentors: 1,
    mentees: 1,
    programs: 1,
    sessions: 2
  } : null;

  return (
    <nav className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${currentRole === 'mentee' ? 'mentee-sidebar' : ''} ${currentRole === 'mentor' ? 'mentor-sidebar' : ''} ${currentRole === 'org-admin' ? 'org-admin-sidebar' : ''} ${currentRole === 'platform-admin' ? 'platform-admin-sidebar' : ''} ${currentRole === 'super-admin' ? 'super-admin-sidebar' : ''}`}>
      {currentRole === 'mentee' && (
        <div className="mentee-role-pill">
          <i className="fas fa-user"></i> MENTEE
        </div>
      )}
      {currentRole === 'mentor' && (
        <>
          <div className="mentor-role-pill">
            <i className="fas fa-user"></i> MENTOR
          </div>
          {mentorOrganizations && mentorOrganizations.length > 0 && (
            <div className="sidebar-org-selector" ref={dropdownRef}>
              <button 
                className="sidebar-org-selector-btn"
                onClick={() => setOrgDropdownOpen(!orgDropdownOpen)}
              >
                <i className={`fas ${selectedOrganization?.icon || 'fa-building'}`}></i>
                <span className="sidebar-org-selector-text">{selectedOrganization?.name || 'Select Organization'}</span>
                <i className={`fas fa-chevron-down sidebar-org-dropdown-arrow ${orgDropdownOpen ? 'open' : ''}`}></i>
              </button>
              {orgDropdownOpen && (
                <div className="sidebar-org-dropdown-menu">
                  {mentorOrganizations.map((org) => (
                    <button
                      key={org.id}
                      className={`sidebar-org-dropdown-item ${selectedOrganization?.id === org.id ? 'active' : ''}`}
                      onClick={() => handleOrgSelect(org)}
                    >
                      <i className={`fas ${org.icon}`}></i>
                      <span>{org.name}</span>
                      {selectedOrganization?.id === org.id && (
                        <i className="fas fa-check"></i>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
      {currentRole === 'org-admin' && (
        <div className="org-admin-role-pill">
          <i className="fas fa-building"></i> ORGANISATION ADMIN
        </div>
      )}
      {currentRole === 'platform-admin' && (
        <>
          <div className="platform-admin-role-pill">
            <i className="fas fa-cog"></i> PLATFORM ADMIN
          </div>
          {platformOrganizations && platformOrganizations.length > 0 && (
            <div className="sidebar-org-selector" ref={platformDropdownRef}>
              <button 
                className="sidebar-org-selector-btn"
                onClick={() => setPlatformOrgDropdownOpen(!platformOrgDropdownOpen)}
              >
                <i className={`fas ${selectedPlatformOrganization?.icon || 'fa-building'}`}></i>
                <span className="sidebar-org-selector-text">{selectedPlatformOrganization?.name || 'Select Organization'}</span>
                <i className={`fas fa-chevron-down sidebar-org-dropdown-arrow ${platformOrgDropdownOpen ? 'open' : ''}`}></i>
              </button>
              {platformOrgDropdownOpen && (
                <div className="sidebar-org-dropdown-menu">
                  {platformOrganizations.map((org) => (
                    <button
                      key={org.id}
                      className={`sidebar-org-dropdown-item ${selectedPlatformOrganization?.id === org.id ? 'active' : ''}`}
                      onClick={() => handlePlatformOrgSelect(org)}
                    >
                      <i className={`fas ${org.icon}`}></i>
                      <span>{org.name}</span>
                      {selectedPlatformOrganization?.id === org.id && (
                        <i className="fas fa-check"></i>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
      {currentRole === 'super-admin' && (
        <div className="super-admin-role-pill">
          <i className="fas fa-crown"></i> SUPER ADMIN
        </div>
      )}
      <div className="nav-section">
        {currentRole !== 'org-admin' && currentRole !== 'platform-admin' && currentRole !== 'super-admin' && <div className="nav-title">{navConfig.title}</div>}
        {navConfig.items.map((item) => {
          // Handle Sessions as expandable submenu for Org Admin
          if (item.page === 'sessions' && currentRole === 'org-admin') {
            return (
              <div key={item.page} className="nav-item-expandable">
                <a
                  className={`nav-item ${sessionsExpanded ? 'expanded' : ''} ${currentPage === item.page ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSessionsExpanded(!sessionsExpanded);
                  }}
                  href="#"
                >
                  <i className={`fas ${item.icon}`}></i> 
                  <span>{item.label}</span>
                  <i className={`fas fa-chevron-down nav-expand-icon ${sessionsExpanded ? 'open' : ''}`}></i>
                </a>
                {sessionsExpanded && (
                  <div className="nav-submenu">
                    <a
                      className={`nav-submenu-item ${currentPage === 'sessions' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPage('sessions');
                      }}
                      href="#"
                    >
                      <i className="fas fa-calendar"></i>
                      <span>Sessions</span>
                    </a>
                    <a
                      className={`nav-submenu-item ${currentPage === 'session-booking' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPage('session-booking');
                      }}
                      href="#"
                    >
                      <i className="fas fa-plus"></i>
                      <span>+ Book Session</span>
                    </a>
                  </div>
                )}
              </div>
            );
          }

          // Handle User Management as expandable submenu for Org Admin
          if (item.page === 'user-management' && currentRole === 'org-admin') {
            return (
              <div key={item.page} className="nav-item-expandable">
                <a
                  className={`nav-item ${userManagementExpanded ? 'expanded' : ''} ${currentPage === 'add-admin' || currentPage === 'user-config' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserManagementExpanded(!userManagementExpanded);
                  }}
                  href="#"
                >
                  <i className={`fas ${item.icon}`}></i> 
                  <span>{item.label}</span>
                  <i className={`fas fa-chevron-down nav-expand-icon ${userManagementExpanded ? 'open' : ''}`}></i>
                </a>
                {userManagementExpanded && (
                  <div className="nav-submenu">
                    <a
                      className={`nav-submenu-item ${currentPage === 'add-admin' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPage('add-admin');
                      }}
                      href="#"
                    >
                      <i className="fas fa-user-plus"></i>
                      <span>Add User</span>
                    </a>
                    <a
                      className={`nav-submenu-item ${currentPage === 'user-config' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPage('user-config');
                      }}
                      href="#"
                    >
                      <i className="fas fa-cog"></i>
                      <span>Config</span>
                    </a>
                  </div>
                )}
              </div>
            );
          }
          
          // Regular navigation items
          return (
            <a
              key={item.page}
              className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage(item.page);
              }}
              href="#"
            >
              <i className={`fas ${item.icon}`}></i> {item.label}
            </a>
          );
        })}
      </div>
      {orgSummary && (
        <div className="org-summary-card">
          <h3 className="org-summary-title">{orgSummary.name}</h3>
          <p className="org-summary-stats">
            {orgSummary.mentors} mentors · {orgSummary.mentees} mentees
          </p>
          <p className="org-summary-stats">
            {orgSummary.programs} programs · {orgSummary.sessions} sessions
          </p>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;

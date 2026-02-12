import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { getIcon } from '../Icons/SVGs';
import './Sidebar.css';

const Sidebar = () => {
  const { currentRole, currentPage, sidebarCollapsed, navigateToPage, toggleSidebar, mentorOrganizations, selectedOrganization, setSelectedOrganization, platformOrganizations, selectedPlatformOrganization, setSelectedPlatformOrganization } = useApp();
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const [platformOrgDropdownOpen, setPlatformOrgDropdownOpen] = useState(false);
  const [sessionsExpanded, setSessionsExpanded] = useState(false);
  const [userManagementExpanded, setUserManagementExpanded] = useState(false);
  const [adminManagementExpanded, setAdminManagementExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const platformDropdownRef = useRef(null);
  
  // Close all submenus
  const closeAllSubmenus = () => {
    setSessionsExpanded(false);
    setUserManagementExpanded(false);
    setAdminManagementExpanded(false);
  };
  
  // Close other submenus except the specified one
  const closeOtherSubmenus = (except) => {
    if (except !== 'sessions') setSessionsExpanded(false);
    if (except !== 'user-management') setUserManagementExpanded(false);
    if (except !== 'admin-management') setAdminManagementExpanded(false);
  };
  
  // Handle navigation and close submenus
  const handleNavigation = (page) => {
    navigateToPage(page);
    closeAllSubmenus();
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 1200 && !sidebarCollapsed) {
      toggleSidebar();
    }
  };

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
    // Close sidebar on mobile after selecting organization
    if (window.innerWidth <= 1200 && !sidebarCollapsed) {
      toggleSidebar();
    }
  };

  const handlePlatformOrgSelect = (org) => {
    setSelectedPlatformOrganization(org);
    setPlatformOrgDropdownOpen(false);
    // Navigate to platform dashboard when organization changes
    navigateToPage('platform-dashboard');
    // Close sidebar on mobile after selecting organization
    if (window.innerWidth <= 1200 && !sidebarCollapsed) {
      toggleSidebar();
    }
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
          {getIcon('fa-user', 14)} MENTEE
        </div>
      )}
      {currentRole === 'mentor' && (
        <>
          <div className="mentor-role-pill">
            {getIcon('fa-user', 14)} MENTOR
          </div>
          {mentorOrganizations && mentorOrganizations.length > 0 && (
            <div className="sidebar-org-selector" ref={dropdownRef}>
              <button 
                className="sidebar-org-selector-btn"
                onClick={() => setOrgDropdownOpen(!orgDropdownOpen)}
              >
                {getIcon(selectedOrganization?.icon || 'fa-building', 16)}
                <span className="sidebar-org-selector-text">{selectedOrganization?.name || 'Select Organization'}</span>
                <span className={`sidebar-org-dropdown-arrow ${orgDropdownOpen ? 'open' : ''}`}>
                  {getIcon('fa-chevron-down', 12)}
                </span>
              </button>
              {orgDropdownOpen && (
                <div className="sidebar-org-dropdown-menu">
                  {mentorOrganizations.map((org) => (
                    <button
                      key={org.id}
                      className={`sidebar-org-dropdown-item ${selectedOrganization?.id === org.id ? 'active' : ''}`}
                      onClick={() => handleOrgSelect(org)}
                    >
                      {getIcon(org.icon, 16)}
                      <span>{org.name}</span>
                      {selectedOrganization?.id === org.id && (
                        getIcon('fa-check', 12)
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
          {getIcon('fa-building', 14)} ORGANISATION ADMIN
        </div>
      )}
      {currentRole === 'platform-admin' && (
        <>
          <div className="platform-admin-role-pill">
            {getIcon('fa-cog', 14)} PLATFORM ADMIN
          </div>
          {platformOrganizations && platformOrganizations.length > 0 && (
            <div className="sidebar-org-selector" ref={platformDropdownRef}>
              <button 
                className="sidebar-org-selector-btn"
                onClick={() => setPlatformOrgDropdownOpen(!platformOrgDropdownOpen)}
              >
                {getIcon(selectedPlatformOrganization?.icon || 'fa-building', 16)}
                <span className="sidebar-org-selector-text">{selectedPlatformOrganization?.name || 'Select Organization'}</span>
                <span className={`sidebar-org-dropdown-arrow ${platformOrgDropdownOpen ? 'open' : ''}`}>
                  {getIcon('fa-chevron-down', 12)}
                </span>
              </button>
              {platformOrgDropdownOpen && (
                <div className="sidebar-org-dropdown-menu">
                  {platformOrganizations.map((org) => (
                    <button
                      key={org.id}
                      className={`sidebar-org-dropdown-item ${selectedPlatformOrganization?.id === org.id ? 'active' : ''}`}
                      onClick={() => handlePlatformOrgSelect(org)}
                    >
                      {getIcon(org.icon, 16)}
                      <span>{org.name}</span>
                      {selectedPlatformOrganization?.id === org.id && (
                        getIcon('fa-check', 12)
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
          {getIcon('fa-crown', 14)} SUPER ADMIN
        </div>
      )}
      <div className="nav-section">
        {currentRole !== 'org-admin' && currentRole !== 'platform-admin' && currentRole !== 'super-admin' && <div className="nav-title">{navConfig.title}</div>}
        {navConfig.items.map((item) => {
          // Handle Sessions as expandable submenu for Org Admin
          if (item.page === 'sessions' && currentRole === 'org-admin') {
            return (
              <div key={item.page} className="nav-item-expandable">
                <button
                  className={`nav-item ${sessionsExpanded ? 'expanded' : ''} ${currentPage === item.page ? 'active' : ''}`}
                  onClick={() => {
                    if (sessionsExpanded) {
                      // If submenu is open, navigate to sessions page and close it
                      handleNavigation('sessions');
                      setSessionsExpanded(false);
                    } else {
                      // If submenu is closed, close other submenus and open this one
                      closeOtherSubmenus('sessions');
                      setSessionsExpanded(true);
                    }
                  }}
                >
                  {getIcon(item.icon, 16)} 
                  <span>{item.label}</span>
                  <span className={`nav-expand-icon ${sessionsExpanded ? 'open' : ''}`}>
                    {getIcon('fa-chevron-down', 12)}
                  </span>
                </button>
                {sessionsExpanded && (
                  <div className="nav-submenu">
                    <button
                      className={`nav-submenu-item ${currentPage === 'sessions' ? 'active' : ''}`}
                      onClick={() => {
                        handleNavigation('sessions');
                        setSessionsExpanded(false);
                      }}
                    >
                      {getIcon('fa-calendar', 16)}
                      <span>Sessions</span>
                    </button>
                    <button
                      className={`nav-submenu-item ${currentPage === 'session-booking' ? 'active' : ''}`}
                      onClick={() => {
                        handleNavigation('session-booking');
                        setSessionsExpanded(false);
                      }}
                    >
                      {getIcon('fa-plus', 16)}
                      <span>+ Book Session</span>
                    </button>
                  </div>
                )}
              </div>
            );
          }

          // Handle User Management as expandable submenu for Org Admin
          if (item.page === 'user-management' && currentRole === 'org-admin') {
            return (
              <div key={item.page} className="nav-item-expandable">
                <button
                  className={`nav-item ${userManagementExpanded ? 'expanded' : ''} ${currentPage === 'add-admin' || currentPage === 'user-config' ? 'active' : ''}`}
                  onClick={() => {
                    if (userManagementExpanded) {
                      // If submenu is open, just close it (no page for user-management itself)
                      setUserManagementExpanded(false);
                    } else {
                      // If submenu is closed, close other submenus and open this one
                      closeOtherSubmenus('user-management');
                      setUserManagementExpanded(true);
                    }
                  }}
                >
                  {getIcon(item.icon, 16)} 
                  <span>{item.label}</span>
                  <span className={`nav-expand-icon ${userManagementExpanded ? 'open' : ''}`}>
                    {getIcon('fa-chevron-down', 12)}
                  </span>
                </button>
                {userManagementExpanded && (
                  <div className="nav-submenu">
                    <button
                      className={`nav-submenu-item ${currentPage === 'add-admin' ? 'active' : ''}`}
                      onClick={() => {
                        handleNavigation('add-admin');
                        setUserManagementExpanded(false);
                      }}
                    >
                      {getIcon('fa-user-plus', 16)}
                      <span>Add User</span>
                    </button>
                    <button
                      className={`nav-submenu-item ${currentPage === 'user-config' ? 'active' : ''}`}
                      onClick={() => {
                        handleNavigation('user-config');
                        setUserManagementExpanded(false);
                      }}
                    >
                      {getIcon('fa-cog', 16)}
                      <span>Config</span>
                    </button>
                  </div>
                )}
              </div>
            );
          }

          // Handle Admin Management as expandable submenu for Platform Admin
          if (item.page === 'admin-management' && currentRole === 'platform-admin') {
            return (
              <div key={item.page} className="nav-item-expandable">
                <button
                  className={`nav-item ${adminManagementExpanded ? 'expanded' : ''} ${currentPage === 'add-admin' || currentPage === 'platform-config' || currentPage === 'admin-management' ? 'active' : ''}`}
                  onClick={() => {
                    if (adminManagementExpanded) {
                      // If submenu is open, navigate to admin-management page and close it
                      handleNavigation('admin-management');
                      setAdminManagementExpanded(false);
                    } else {
                      // If submenu is closed, close other submenus and open this one
                      closeOtherSubmenus('admin-management');
                      setAdminManagementExpanded(true);
                    }
                  }}
                >
                  {getIcon(item.icon, 16)} 
                  <span>{item.label}</span>
                  <span className={`nav-expand-icon ${adminManagementExpanded ? 'open' : ''}`}>
                    {getIcon('fa-chevron-down', 12)}
                  </span>
                </button>
                {adminManagementExpanded && (
                  <div className="nav-submenu">
                    <button
                      className={`nav-submenu-item ${currentPage === 'add-admin' ? 'active' : ''}`}
                      onClick={() => {
                        handleNavigation('add-admin');
                        setAdminManagementExpanded(false);
                      }}
                    >
                      {getIcon('fa-user-plus', 16)}
                      <span>Add Admin</span>
                    </button>
                    <button
                      className={`nav-submenu-item ${currentPage === 'platform-config' ? 'active' : ''}`}
                      onClick={() => {
                        handleNavigation('platform-config');
                        setAdminManagementExpanded(false);
                      }}
                    >
                      {getIcon('fa-cog', 16)}
                      <span>Config</span>
                    </button>
                  </div>
                )}
              </div>
            );
          }
          
          // Regular navigation items
          return (
            <button
              key={item.page}
              className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => {
                handleNavigation(item.page);
                closeAllSubmenus();
              }}
            >
              {getIcon(item.icon, 16)} {item.label}
            </button>
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

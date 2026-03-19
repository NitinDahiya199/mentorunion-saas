import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ROLE_ARCHITECTURE } from '../../data/informationArchitecture';
import { getIcon } from '../Icons/SVGs';
import './Sidebar.css';

const Sidebar = () => {
  const {
    currentRole,
    currentPage,
    sidebarCollapsed,
    navigateToPage,
    toggleSidebar,
    mentorOrganizations,
    selectedOrganization,
    setSelectedOrganization,
    platformOrganizations,
    selectedPlatformOrganization,
    setSelectedPlatformOrganization
  } = useApp();

  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const [platformOrgDropdownOpen, setPlatformOrgDropdownOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const dropdownRef = useRef(null);
  const platformDropdownRef = useRef(null);

  const roleConfig = ROLE_ARCHITECTURE[currentRole] || ROLE_ARCHITECTURE['super-admin'];
  const roleClassName = `${currentRole}-sidebar`;

  const closeSidebarOnMobile = () => {
    if (window.innerWidth <= 1200 && !sidebarCollapsed) {
      toggleSidebar();
    }
  };

  const handleNavigation = (pageId) => {
    navigateToPage(pageId);
    closeSidebarOnMobile();
  };

  useEffect(() => {
    const nextExpanded = {};

    roleConfig.modules.forEach((module) => {
      if (module.children?.some((child) => child.id === currentPage)) {
        nextExpanded[module.id] = true;
      }
    });

    if (Object.keys(nextExpanded).length > 0) {
      setExpandedSections((prev) => ({ ...prev, ...nextExpanded }));
    }
  }, [currentPage, roleConfig.modules]);

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
    navigateToPage('mentor-dashboard');
    closeSidebarOnMobile();
  };

  const handlePlatformOrgSelect = (org) => {
    setSelectedPlatformOrganization(org);
    setPlatformOrgDropdownOpen(false);
    navigateToPage('platform-dashboard');
    closeSidebarOnMobile();
  };

  const toggleSection = (moduleId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const pillContent = {
    'mentee': { className: 'mentee-role-pill', icon: 'fa-user', label: 'MENTEE' },
    'mentor': { className: 'mentor-role-pill', icon: 'fa-user', label: 'MENTOR' },
    'sub-admin': { className: 'sub-admin-role-pill', icon: 'fa-user-shield', label: 'SUB ADMIN' },
    'org-admin': { className: 'org-admin-role-pill', icon: 'fa-building', label: 'ORGANISATION ADMIN' },
    'platform-admin': { className: 'platform-admin-role-pill', icon: 'fa-cog', label: 'PLATFORM ADMIN' },
    'super-admin': { className: 'super-admin-role-pill', icon: 'fa-crown', label: 'SUPER ADMIN' }
  }[currentRole];

  const orgSummary = currentRole === 'org-admin'
    ? {
        name: 'Acadify Learning',
        mentors: 14,
        mentees: 126,
        programs: 5,
        sessions: 248
      }
    : currentRole === 'sub-admin'
      ? {
          name: 'Assigned Portfolio',
          mentors: 8,
          mentees: 64,
          programs: 3,
          sessions: 91
        }
      : null;

  return (
    <nav className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${roleClassName}`}>
      {pillContent && (
        <div className={pillContent.className}>
          {getIcon(pillContent.icon, 14)} {pillContent.label}
        </div>
      )}

      {currentRole === 'mentor' && mentorOrganizations?.length > 0 && (
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
                  {selectedOrganization?.id === org.id && getIcon('fa-check', 12)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {currentRole === 'platform-admin' && platformOrganizations?.length > 0 && (
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
                  {selectedPlatformOrganization?.id === org.id && getIcon('fa-check', 12)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="nav-section">
        <div className="nav-title">{roleConfig.label} Architecture</div>
        {roleConfig.modules.map((module) => {
          const hasChildren = Boolean(module.children?.length);
          const childActive = module.children?.some((child) => child.id === currentPage);
          const isExpanded = expandedSections[module.id];
          const isActive = currentPage === module.id || childActive;

          if (hasChildren) {
            return (
              <div key={module.id} className="nav-item-expandable">
                <button
                  className={`nav-item ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`}
                  onClick={() => toggleSection(module.id)}
                  aria-expanded={isExpanded}
                >
                  {getIcon(module.icon, 16)}
                  <span>{module.label}</span>
                  <span className={`nav-expand-icon ${isExpanded ? 'open' : ''}`}>
                    {getIcon('fa-chevron-down', 12)}
                  </span>
                </button>

                {isExpanded && (
                  <div className="nav-submenu">
                    <button
                      className={`nav-submenu-item ${currentPage === module.id ? 'active' : ''}`}
                      onClick={() => handleNavigation(module.id)}
                    >
                      {getIcon(module.icon, 16)}
                      <span>Overview</span>
                    </button>
                    {module.children.map((child) => (
                      <button
                        key={child.id}
                        className={`nav-submenu-item ${currentPage === child.id ? 'active' : ''}`}
                        onClick={() => handleNavigation(child.id)}
                      >
                        {getIcon(child.icon || module.icon, 16)}
                        <span>{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={module.id}
              className={`nav-item ${currentPage === module.id ? 'active' : ''}`}
              onClick={() => handleNavigation(module.id)}
            >
              {getIcon(module.icon, 16)}
              <span>{module.label}</span>
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

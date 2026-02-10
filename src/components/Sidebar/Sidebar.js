import React from 'react';
import { useApp } from '../../context/AppContext';
import './Sidebar.css';

const Sidebar = () => {
  const { currentRole, currentPage, sidebarCollapsed, navigateToPage } = useApp();

  const navigationConfig = {
    'super-admin': {
      title: 'System Configuration',
      items: [
        { page: 'session-rules', icon: 'fa-cog', label: 'Session Rules' },
        { page: 'billing-logic', icon: 'fa-dollar-sign', label: 'Billing & Credits' },
        { page: 'platform-features', icon: 'fa-bolt', label: 'Platform Features' }
      ]
    },
    'platform-admin': {
      title: 'Platform Management',
      items: [
        { page: 'platform-dashboard', icon: 'fa-home', label: 'Dashboard' },
        { page: 'organisations', icon: 'fa-building', label: 'Organisations' },
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
        { page: 'session-booking', icon: 'fa-plus', label: '+ Book Session' },
        { page: 'billing-payouts', icon: 'fa-dollar-sign', label: '$ Billing & Payouts' },
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
        <div className="mentor-role-pill">
          <i className="fas fa-user"></i> MENTOR
        </div>
      )}
      {currentRole === 'org-admin' && (
        <div className="org-admin-role-pill">
          <i className="fas fa-building"></i> ORGANISATION ADMIN
        </div>
      )}
      {currentRole === 'platform-admin' && (
        <div className="platform-admin-role-pill">
          <i className="fas fa-cog"></i> PLATFORM ADMIN
        </div>
      )}
      {currentRole === 'super-admin' && (
        <div className="super-admin-role-pill">
          <i className="fas fa-crown"></i> SUPER ADMIN
        </div>
      )}
      <div className="nav-section">
        {currentRole !== 'org-admin' && currentRole !== 'platform-admin' && currentRole !== 'super-admin' && <div className="nav-title">{navConfig.title}</div>}
        {navConfig.items.map((item) => (
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
        ))}
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

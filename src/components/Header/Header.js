import React from 'react';
import { useApp, roles } from '../../context/AppContext';
import './Header.css';

const Header = () => {
  const { currentRole, switchRole, toggleSidebar } = useApp();
  const roleConfig = roles[currentRole];

  const roleButtons = [
    { role: 'super-admin', icon: 'fa-crown', label: 'Super Admin' },
    { role: 'platform-admin', icon: 'fa-server', label: 'Platform Admin' },
    { role: 'org-admin', icon: 'fa-building', label: 'Org Admin' },
    { role: 'mentor', icon: 'fa-chalkboard-teacher', label: 'Mentor' },
    { role: 'mentee', icon: 'fa-user-graduate', label: 'Mentee' }
  ];

  return (
    <header className="header">
      <div className="logo">
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="logo-icon">
          <i className="fas fa-hands-helping"></i>
        </div>
        <span className="logo-text">MentorUnion</span>
      </div>
      
      <div className="role-switcher">
        {roleButtons.map(({ role, icon, label }) => (
          <button
            key={role}
            className={`role-btn ${role} ${currentRole === role ? 'active' : ''}`}
            onClick={() => switchRole(role)}
          >
            <i className={`fas ${icon}`}></i> {label}
          </button>
        ))}
      </div>
      
      <div className="user-info">
        <div className="user-avatar">{roleConfig.avatarText}</div>
        <div className="user-details">
          <div className="user-name">{roleConfig.name}</div>
          <div className="user-role">{roleConfig.roleText}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

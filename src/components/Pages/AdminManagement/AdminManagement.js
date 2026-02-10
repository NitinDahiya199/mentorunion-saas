import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './AdminManagement.css';

const AdminManagement = () => {
  const { showNotification, selectedPlatformOrganization, platformOrganizations } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  // Sample admin data - in real app, this would come from API based on selected organization
  const allAdmins = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya@techmentor.com',
      role: 'Organisation Admin',
      organisation: 'TechMentor Inc.',
      status: 'active',
      lastActive: '2 hours ago',
      permissions: ['Manage Programs', 'View Reports', 'Manage Users']
    },
    {
      id: 2,
      name: 'Raj Patel',
      email: 'raj@educonnect.com',
      role: 'Organisation Admin',
      organisation: 'EduConnect Solutions',
      status: 'active',
      lastActive: '1 day ago',
      permissions: ['Manage Programs', 'View Reports']
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah@careerboost.com',
      role: 'Organisation Admin',
      organisation: 'CareerBoost Academy',
      status: 'active',
      lastActive: '3 hours ago',
      permissions: ['Manage Programs', 'View Reports', 'Manage Users', 'Billing']
    },
    {
      id: 4,
      name: 'Michael Chen',
      email: 'michael@skillup.com',
      role: 'Organisation Admin',
      organisation: 'SkillUp Learning',
      status: 'active',
      lastActive: '5 hours ago',
      permissions: ['Manage Programs', 'View Reports']
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'lisa@mentorhub.com',
      role: 'Organisation Admin',
      organisation: 'MentorHub Pro',
      status: 'pending',
      lastActive: 'Never',
      permissions: []
    }
  ];

  // Filter admins based on selected organization and search query
  const filteredAdmins = allAdmins.filter(admin => {
    const matchesOrg = !selectedPlatformOrganization || admin.organisation === selectedPlatformOrganization.name;
    const matchesSearch = searchQuery === '' || 
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.organisation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesOrg && matchesSearch;
  });

  const handleCreateAdmin = () => {
    showNotification('Create Admin functionality would open a modal here.');
  };

  const handleEditAdmin = (admin) => {
    showNotification(`Edit admin: ${admin.name}`);
  };

  const handleToggleStatus = (admin) => {
    showNotification(`${admin.status === 'active' ? 'Deactivated' : 'Activated'} admin: ${admin.name}`);
  };

  return (
    <div className="admin-management-page">
      <div className="admin-management-header">
        <div>
          <h1 className="admin-management-title">Admin Management</h1>
          <p className="admin-management-subtitle">
            {selectedPlatformOrganization 
              ? `Manage admins for ${selectedPlatformOrganization.name}`
              : 'Manage all organisation admins on the platform'}
          </p>
        </div>
        <button className="admin-management-create-btn" onClick={handleCreateAdmin}>
          <i className="fas fa-plus"></i> Create Admin
        </button>
      </div>

      <div className="admin-management-filters">
        <div className="admin-search-container">
          <i className="fas fa-search admin-search-icon"></i>
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search admins by name, email, or organisation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {selectedPlatformOrganization && (
          <div className="admin-filter-badge">
            <i className={`fas ${selectedPlatformOrganization.icon}`}></i>
            <span>{selectedPlatformOrganization.name}</span>
            <button 
              className="admin-filter-remove"
              onClick={() => showNotification('Filter would be cleared')}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>

      <div className="admin-management-table-container">
        <table className="admin-management-table">
          <thead>
            <tr>
              <th>ADMIN</th>
              <th>EMAIL</th>
              <th>ORGANISATION</th>
              <th>ROLE</th>
              <th>PERMISSIONS</th>
              <th>STATUS</th>
              <th>LAST ACTIVE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.length === 0 ? (
              <tr>
                <td colSpan="8" className="admin-empty-state">
                  <i className="fas fa-user-shield"></i>
                  <p>No admins found</p>
                </td>
              </tr>
            ) : (
              filteredAdmins.map((admin) => (
                <tr key={admin.id}>
                  <td className="admin-name-cell">
                    <div className="admin-avatar">
                      {admin.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <strong>{admin.name}</strong>
                  </td>
                  <td>{admin.email}</td>
                  <td>
                    <div className="admin-org-cell">
                      <i className="fas fa-building"></i>
                      <span>{admin.organisation}</span>
                    </div>
                  </td>
                  <td>
                    <span className="admin-role-badge">{admin.role}</span>
                  </td>
                  <td>
                    <div className="admin-permissions">
                      {admin.permissions.length > 0 ? (
                        <>
                          {admin.permissions.slice(0, 2).map((perm, idx) => (
                            <span key={idx} className="admin-permission-tag">{perm}</span>
                          ))}
                          {admin.permissions.length > 2 && (
                            <span className="admin-permission-more">+{admin.permissions.length - 2} more</span>
                          )}
                        </>
                      ) : (
                        <span className="admin-no-permissions">No permissions</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status-badge ${admin.status === 'active' ? 'admin-status-active' : 'admin-status-pending'}`}>
                      {admin.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="admin-last-active">{admin.lastActive}</td>
                  <td>
                    <div className="admin-actions">
                      <button 
                        className="admin-action-btn admin-edit-btn"
                        onClick={() => handleEditAdmin(admin)}
                        title="Edit Admin"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button 
                        className={`admin-action-btn ${admin.status === 'active' ? 'admin-deactivate-btn' : 'admin-activate-btn'}`}
                        onClick={() => handleToggleStatus(admin)}
                        title={admin.status === 'active' ? 'Deactivate' : 'Activate'}
                      >
                        <i className={`fas ${admin.status === 'active' ? 'fa-ban' : 'fa-check'}`}></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManagement;

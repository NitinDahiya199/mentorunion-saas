import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './AddAdmin.css';

const AddAdmin = () => {
  const { showNotification } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'admin',
    permissions: []
  });

  const permissionOptions = [
    'Manage Programs',
    'View Reports',
    'Manage Users',
    'Billing & Payouts',
    'Session Management'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePermissionChange = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(p => p !== permission)
        : [...prev.permissions, permission]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('Admin added successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: 'admin',
      permissions: []
    });
  };

  return (
    <div className="add-admin-page">
      <div className="add-admin-header">
        <div>
          <h1 className="add-admin-title">Add Admin</h1>
          <p className="add-admin-subtitle">Add a new administrator to your organisation</p>
        </div>
      </div>

      <div className="add-admin-content">
        <div className="add-admin-form-panel">
          <h2 className="add-admin-panel-title">Admin Details</h2>
          <form onSubmit={handleSubmit} className="add-admin-form">
            <div className="add-admin-form-group">
              <label className="add-admin-form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="add-admin-form-input"
                placeholder="Enter admin's full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="add-admin-form-group">
              <label className="add-admin-form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="add-admin-form-input"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="add-admin-form-group">
              <label className="add-admin-form-label">Role *</label>
              <select
                name="role"
                className="add-admin-form-select"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="admin">Organisation Admin</option>
                <option value="manager">Manager</option>
                <option value="coordinator">Coordinator</option>
              </select>
            </div>

            <div className="add-admin-form-group">
              <label className="add-admin-form-label">Permissions</label>
              <div className="add-admin-permissions">
                {permissionOptions.map((permission) => (
                  <label key={permission} className="add-admin-permission-item">
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(permission)}
                      onChange={() => handlePermissionChange(permission)}
                    />
                    <span>{permission}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="add-admin-form-actions">
              <button type="button" className="add-admin-cancel-btn" onClick={() => showNotification('Cancelled')}>
                Cancel
              </button>
              <button type="submit" className="add-admin-submit-btn">
                <i className="fas fa-user-plus"></i> Add Admin
              </button>
            </div>
          </form>
        </div>

        <div className="add-admin-info-panel">
          <h2 className="add-admin-panel-title">Information</h2>
          <div className="add-admin-info-content">
            <div className="add-admin-info-item">
              <i className="fas fa-info-circle"></i>
              <div>
                <h3>Admin Access</h3>
                <p>Admins will receive an email invitation to join your organisation.</p>
              </div>
            </div>
            <div className="add-admin-info-item">
              <i className="fas fa-shield-alt"></i>
              <div>
                <h3>Permissions</h3>
                <p>Select specific permissions to control what admins can access and manage.</p>
              </div>
            </div>
            <div className="add-admin-info-item">
              <i className="fas fa-user-cog"></i>
              <div>
                <h3>Role Types</h3>
                <p>Different roles have different default permissions. You can customize them as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;

import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './UserConfig.css';

const UserConfig = () => {
  const { showNotification } = useApp();
  const [config, setConfig] = useState({
    defaultRole: 'coordinator',
    autoApprove: false,
    requireEmailVerification: true,
    allowSelfRegistration: false,
    sessionTimeout: 30,
    passwordPolicy: 'medium',
    permissions: {
      userManagement: true,
      programManagement: true,
      sessionManagement: true,
      mentorManagement: true,
      menteeManagement: true,
      billingPayouts: false,
      reportsAnalytics: false,
      settingsConfiguration: false,
      ticketManagement: true
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePermissionChange = (permissionKey) => {
    setConfig(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permissionKey]: !prev.permissions[permissionKey]
      }
    }));
  };

  const handleSave = () => {
    showNotification('Configuration saved successfully!');
  };

  const handleReset = () => {
    setConfig({
      defaultRole: 'coordinator',
      autoApprove: false,
      requireEmailVerification: true,
      allowSelfRegistration: false,
      sessionTimeout: 30,
      passwordPolicy: 'medium',
      permissions: {
        userManagement: true,
        programManagement: true,
        sessionManagement: true,
        mentorManagement: true,
        menteeManagement: true,
        billingPayouts: false,
        reportsAnalytics: false,
        settingsConfiguration: false,
        ticketManagement: true
      }
    });
    showNotification('Configuration reset to defaults');
  };

  return (
    <div className="user-config-page">
      <div className="user-config-header">
        <div>
          <h1 className="user-config-title">User Configuration</h1>
          <p className="user-config-subtitle">Configure user management settings for your organisation</p>
        </div>
      </div>

      <div className="user-config-content">
        <div className="user-config-section">
          <h2 className="user-config-section-title">General Settings</h2>
          <div className="user-config-form">
            <div className="user-config-form-group">
              <label className="user-config-form-label">Default Role for New Users</label>
              <select
                name="defaultRole"
                className="user-config-form-select"
                value={config.defaultRole}
                onChange={handleInputChange}
              >
                <option value="coordinator">Coordinator</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
              <p className="user-config-help-text">New users will be assigned this role by default</p>
            </div>

            <div className="user-config-form-group">
              <label className="user-config-form-label">Admin Permissions</label>
              <p className="user-config-help-text" style={{ marginBottom: '16px' }}>
                Select the permissions that admins can have in your organisation
              </p>
              <div className="user-config-permissions-grid">
                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.userManagement}
                      onChange={() => handlePermissionChange('userManagement')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">User Management</span>
                      <span className="user-config-switch-description">Add, edit, and manage users</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.programManagement}
                      onChange={() => handlePermissionChange('programManagement')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Program Management</span>
                      <span className="user-config-switch-description">Create and manage programs</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.sessionManagement}
                      onChange={() => handlePermissionChange('sessionManagement')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Session Management</span>
                      <span className="user-config-switch-description">Schedule and manage sessions</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.mentorManagement}
                      onChange={() => handlePermissionChange('mentorManagement')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Mentor Management</span>
                      <span className="user-config-switch-description">Manage mentors and their profiles</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.menteeManagement}
                      onChange={() => handlePermissionChange('menteeManagement')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Mentee Management</span>
                      <span className="user-config-switch-description">Manage mentees and their profiles</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.billingPayouts}
                      onChange={() => handlePermissionChange('billingPayouts')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Billing & Payouts</span>
                      <span className="user-config-switch-description">Access billing and payment information</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.reportsAnalytics}
                      onChange={() => handlePermissionChange('reportsAnalytics')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Reports & Analytics</span>
                      <span className="user-config-switch-description">View reports and analytics</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.settingsConfiguration}
                      onChange={() => handlePermissionChange('settingsConfiguration')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Settings & Configuration</span>
                      <span className="user-config-switch-description">Modify organisation settings</span>
                    </div>
                  </label>
                </div>

                <div className="user-config-permission-item">
                  <label className="user-config-switch">
                    <input
                      type="checkbox"
                      checked={config.permissions.ticketManagement}
                      onChange={() => handlePermissionChange('ticketManagement')}
                    />
                    <span className="user-config-switch-slider"></span>
                    <div className="user-config-switch-content">
                      <span className="user-config-switch-label">Ticket Management</span>
                      <span className="user-config-switch-description">Handle support tickets</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="user-config-form-group">
              <label className="user-config-form-label">Session Timeout (minutes)</label>
              <input
                type="number"
                name="sessionTimeout"
                className="user-config-form-input"
                value={config.sessionTimeout}
                onChange={handleInputChange}
                min="5"
                max="480"
              />
              <p className="user-config-help-text">User sessions will expire after this duration</p>
            </div>
          </div>
        </div>

        <div className="user-config-section">
          <h2 className="user-config-section-title">Security Settings</h2>
          <div className="user-config-form">
            <div className="user-config-form-group">
              <label className="user-config-form-label">Password Policy</label>
              <select
                name="passwordPolicy"
                className="user-config-form-select"
                value={config.passwordPolicy}
                onChange={handleInputChange}
              >
                <option value="low">Low - Minimum 6 characters</option>
                <option value="medium">Medium - Minimum 8 characters with numbers</option>
                <option value="high">High - Minimum 12 characters with numbers, symbols, and mixed case</option>
              </select>
              <p className="user-config-help-text">Set the password strength requirement for users</p>
            </div>

            <div className="user-config-switch-group">
              <label className="user-config-switch">
                <input
                  type="checkbox"
                  name="requireEmailVerification"
                  checked={config.requireEmailVerification}
                  onChange={handleInputChange}
                />
                <span className="user-config-switch-slider"></span>
                <div className="user-config-switch-content">
                  <span className="user-config-switch-label">Require Email Verification</span>
                  <span className="user-config-switch-description">Users must verify their email before accessing the platform</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="user-config-section">
          <h2 className="user-config-section-title">Registration Settings</h2>
          <div className="user-config-form">
            <div className="user-config-switch-group">
              <label className="user-config-switch">
                <input
                  type="checkbox"
                  name="autoApprove"
                  checked={config.autoApprove}
                  onChange={handleInputChange}
                />
                <span className="user-config-switch-slider"></span>
                <div className="user-config-switch-content">
                  <span className="user-config-switch-label">Auto-Approve New Users</span>
                  <span className="user-config-switch-description">Automatically approve new user registrations</span>
                </div>
              </label>
            </div>

            <div className="user-config-switch-group">
              <label className="user-config-switch">
                <input
                  type="checkbox"
                  name="allowSelfRegistration"
                  checked={config.allowSelfRegistration}
                  onChange={handleInputChange}
                />
                <span className="user-config-switch-slider"></span>
                <div className="user-config-switch-content">
                  <span className="user-config-switch-label">Allow Self-Registration</span>
                  <span className="user-config-switch-description">Allow users to register themselves without invitation</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="user-config-actions">
          <button className="user-config-reset-btn" onClick={handleReset}>
            <i className="fas fa-undo"></i> Reset to Defaults
          </button>
          <button className="user-config-save-btn" onClick={handleSave}>
            <i className="fas fa-save"></i> Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserConfig;

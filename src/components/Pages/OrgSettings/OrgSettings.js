import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './OrgSettings.css';

const OrgSettings = () => {
  const { currentPage, showNotification } = useApp();
  const [profile, setProfile] = useState({ name: 'Org Admin', email: 'admin@acadify.com', phone: '' });
  const [orgDetails, setOrgDetails] = useState({ orgName: 'Acadify Learning', address: '', contactEmail: 'admin@acadify.com' });
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  const panels = {
    'org-settings-profile': { title: 'My Profile', subtitle: 'Profile details and edit profile.' },
    'org-settings-org': { title: 'Manage Organization Details', subtitle: 'Update organization name, address, and contact.' },
    'org-settings-password': { title: 'Change Password', subtitle: 'Reset password securely.' },
    'org-settings-communication': { title: 'Communication', subtitle: 'Email + WhatsApp integration, bulk messaging, message logs.' }
  };

  const panel = panels[currentPage] || panels['org-settings-profile'];

  const handleSaveProfile = () => {
    showNotification('Profile updated.');
  };

  const handleSaveOrg = () => {
    showNotification('Organization details updated.');
  };

  const handleChangePassword = () => {
    showNotification('Password change requested. Check email for reset link.');
  };

  return (
    <div className="org-settings-page">
      <div className="org-settings-header">
        <div>
          <h1 className="org-settings-title">{panel.title}</h1>
          <p className="org-settings-subtitle">{panel.subtitle}</p>
        </div>
      </div>

      {currentPage === 'org-settings-profile' && (
        <div className="org-settings-section">
          <div className="org-settings-card">
            <div className="org-settings-form">
              <label>
                <span>Name</span>
                <input
                  value={profile.name}
                  onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                  placeholder="Full name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={profile.email}
                  onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
                  placeholder="Email"
                />
              </label>
              <label>
                <span>Phone</span>
                <input
                  value={profile.phone}
                  onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                  placeholder="Phone (optional)"
                />
              </label>
              <button className="org-settings-save-btn" onClick={handleSaveProfile}>
                <i className="fas fa-save"></i> Save Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'org-settings-org' && (
        <div className="org-settings-section">
          <div className="org-settings-card">
            <div className="org-settings-form">
              <label>
                <span>Organization Name</span>
                <input
                  value={orgDetails.orgName}
                  onChange={e => setOrgDetails(p => ({ ...p, orgName: e.target.value }))}
                />
              </label>
              <label>
                <span>Address</span>
                <input
                  value={orgDetails.address}
                  onChange={e => setOrgDetails(p => ({ ...p, address: e.target.value }))}
                  placeholder="Address"
                />
              </label>
              <label>
                <span>Contact Email</span>
                <input
                  type="email"
                  value={orgDetails.contactEmail}
                  onChange={e => setOrgDetails(p => ({ ...p, contactEmail: e.target.value }))}
                />
              </label>
              <button className="org-settings-save-btn" onClick={handleSaveOrg}>
                <i className="fas fa-save"></i> Save Org Details
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'org-settings-password' && (
        <div className="org-settings-section">
          <div className="org-settings-card">
            <div className="org-settings-form">
              <label>
                <span>Current Password</span>
                <input
                  type="password"
                  value={passwordForm.current}
                  onChange={e => setPasswordForm(p => ({ ...p, current: e.target.value }))}
                  placeholder="Current password"
                />
              </label>
              <label>
                <span>New Password</span>
                <input
                  type="password"
                  value={passwordForm.new}
                  onChange={e => setPasswordForm(p => ({ ...p, new: e.target.value }))}
                  placeholder="New password"
                />
              </label>
              <label>
                <span>Confirm New Password</span>
                <input
                  type="password"
                  value={passwordForm.confirm}
                  onChange={e => setPasswordForm(p => ({ ...p, confirm: e.target.value }))}
                  placeholder="Confirm new password"
                />
              </label>
              <button className="org-settings-save-btn" onClick={handleChangePassword}>
                <i className="fas fa-key"></i> Change Password
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'org-settings-communication' && (
        <div className="org-settings-section">
          <div className="org-settings-card">
            <h3 className="org-settings-card-title">Communication Engine</h3>
            <p className="org-settings-placeholder">Email + WhatsApp integration, bulk messaging, personalization tools, and message logs.</p>
            <div className="org-settings-comms-actions">
              <button className="org-settings-action-btn"><i className="fas fa-envelope"></i> Email Settings</button>
              <button className="org-settings-action-btn"><i className="fab fa-whatsapp"></i> WhatsApp</button>
              <button className="org-settings-action-btn"><i className="fas fa-paper-plane"></i> Bulk Message</button>
              <button className="org-settings-action-btn"><i className="fas fa-list"></i> Message Logs</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgSettings;

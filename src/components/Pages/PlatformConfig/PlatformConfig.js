import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './PlatformConfig.css';

const PlatformConfig = () => {
  const { showNotification } = useApp();
  const [config, setConfig] = useState({
    platformName: 'Mentor Union',
    platformEmail: 'support@mentorunion.com',
    maxOrganizations: 100,
    maxUsersPerOrg: 500,
    sessionTimeout: 30,
    enableNotifications: true,
    enableEmailNotifications: true,
    enableSMSNotifications: false,
    allowOrgSelfRegistration: false,
    requireOrgVerification: true,
    defaultOrgPlan: 'basic',
    features: {
      videoCalling: true,
      screenSharing: true,
      recording: false,
      analytics: true,
      reports: true,
      billing: true,
      multiLanguage: false,
      customBranding: false,
      apiAccess: false
    },
    security: {
      twoFactorAuth: false,
      ipWhitelist: false,
      sessionManagement: true,
      auditLogging: true
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeatureChange = (featureKey) => {
    setConfig(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [featureKey]: !prev.features[featureKey]
      }
    }));
  };

  const handleSecurityChange = (securityKey) => {
    setConfig(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [securityKey]: !prev.security[securityKey]
      }
    }));
  };

  const handleSave = () => {
    showNotification('Platform configuration saved successfully!');
  };

  const handleReset = () => {
    setConfig({
      platformName: 'Mentor Union',
      platformEmail: 'support@mentorunion.com',
      maxOrganizations: 100,
      maxUsersPerOrg: 500,
      sessionTimeout: 30,
      enableNotifications: true,
      enableEmailNotifications: true,
      enableSMSNotifications: false,
      allowOrgSelfRegistration: false,
      requireOrgVerification: true,
      defaultOrgPlan: 'basic',
      features: {
        videoCalling: true,
        screenSharing: true,
        recording: false,
        analytics: true,
        reports: true,
        billing: true,
        multiLanguage: false,
        customBranding: false,
        apiAccess: false
      },
      security: {
        twoFactorAuth: false,
        ipWhitelist: false,
        sessionManagement: true,
        auditLogging: true
      }
    });
    showNotification('Configuration reset to defaults');
  };

  return (
    <div className="platform-config-page">
      <div className="platform-config-header">
        <div>
          <h1 className="platform-config-title">Platform Configuration</h1>
          <p className="platform-config-subtitle">Configure platform-wide settings and features</p>
        </div>
      </div>

      <div className="platform-config-content">
        <div className="platform-config-section">
          <h2 className="platform-config-section-title">General Settings</h2>
          <div className="platform-config-form">
            <div className="platform-config-form-group">
              <label className="platform-config-form-label">Platform Name</label>
              <input
                type="text"
                name="platformName"
                className="platform-config-form-input"
                value={config.platformName}
                onChange={handleInputChange}
              />
              <p className="platform-config-help-text">The name displayed across the platform</p>
            </div>

            <div className="platform-config-form-group">
              <label className="platform-config-form-label">Platform Support Email</label>
              <input
                type="email"
                name="platformEmail"
                className="platform-config-form-input"
                value={config.platformEmail}
                onChange={handleInputChange}
              />
              <p className="platform-config-help-text">Support email address for platform communications</p>
            </div>

            <div className="platform-config-form-group">
              <label className="platform-config-form-label">Maximum Organizations</label>
              <input
                type="number"
                name="maxOrganizations"
                className="platform-config-form-input"
                value={config.maxOrganizations}
                onChange={handleInputChange}
                min="1"
                max="1000"
              />
              <p className="platform-config-help-text">Maximum number of organizations allowed on the platform</p>
            </div>

            <div className="platform-config-form-group">
              <label className="platform-config-form-label">Maximum Users per Organization</label>
              <input
                type="number"
                name="maxUsersPerOrg"
                className="platform-config-form-input"
                value={config.maxUsersPerOrg}
                onChange={handleInputChange}
                min="1"
                max="10000"
              />
              <p className="platform-config-help-text">Maximum number of users allowed per organization</p>
            </div>

            <div className="platform-config-form-group">
              <label className="platform-config-form-label">Session Timeout (minutes)</label>
              <input
                type="number"
                name="sessionTimeout"
                className="platform-config-form-input"
                value={config.sessionTimeout}
                onChange={handleInputChange}
                min="5"
                max="480"
              />
              <p className="platform-config-help-text">User sessions will expire after this duration</p>
            </div>

            <div className="platform-config-form-group">
              <label className="platform-config-form-label">Default Organization Plan</label>
              <select
                name="defaultOrgPlan"
                className="platform-config-form-select"
                value={config.defaultOrgPlan}
                onChange={handleInputChange}
              >
                <option value="basic">Basic</option>
                <option value="professional">Professional</option>
                <option value="enterprise">Enterprise</option>
              </select>
              <p className="platform-config-help-text">Default plan assigned to new organizations</p>
            </div>
          </div>
        </div>

        <div className="platform-config-section">
          <h2 className="platform-config-section-title">Notification Settings</h2>
          <div className="platform-config-form">
            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  name="enableNotifications"
                  checked={config.enableNotifications}
                  onChange={handleInputChange}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Enable Notifications</span>
                  <span className="platform-config-switch-description">Enable platform-wide notifications</span>
                </div>
              </label>
            </div>

            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  name="enableEmailNotifications"
                  checked={config.enableEmailNotifications}
                  onChange={handleInputChange}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Email Notifications</span>
                  <span className="platform-config-switch-description">Send notifications via email</span>
                </div>
              </label>
            </div>

            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  name="enableSMSNotifications"
                  checked={config.enableSMSNotifications}
                  onChange={handleInputChange}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">SMS Notifications</span>
                  <span className="platform-config-switch-description">Send notifications via SMS</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="platform-config-section">
          <h2 className="platform-config-section-title">Organization Settings</h2>
          <div className="platform-config-form">
            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  name="allowOrgSelfRegistration"
                  checked={config.allowOrgSelfRegistration}
                  onChange={handleInputChange}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Allow Organization Self-Registration</span>
                  <span className="platform-config-switch-description">Allow organizations to register themselves</span>
                </div>
              </label>
            </div>

            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  name="requireOrgVerification"
                  checked={config.requireOrgVerification}
                  onChange={handleInputChange}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Require Organization Verification</span>
                  <span className="platform-config-switch-description">Organizations must be verified before activation</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="platform-config-section">
          <h2 className="platform-config-section-title">Platform Features</h2>
          <div className="platform-config-form">
            <p className="platform-config-help-text" style={{ marginBottom: '16px' }}>
              Enable or disable platform features for all organizations
            </p>
            <div className="platform-config-permissions-grid">
              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.videoCalling}
                    onChange={() => handleFeatureChange('videoCalling')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Video Calling</span>
                    <span className="platform-config-switch-description">Enable video calling feature</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.screenSharing}
                    onChange={() => handleFeatureChange('screenSharing')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Screen Sharing</span>
                    <span className="platform-config-switch-description">Enable screen sharing in calls</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.recording}
                    onChange={() => handleFeatureChange('recording')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Call Recording</span>
                    <span className="platform-config-switch-description">Allow recording of sessions</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.analytics}
                    onChange={() => handleFeatureChange('analytics')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Analytics</span>
                    <span className="platform-config-switch-description">Enable analytics dashboard</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.reports}
                    onChange={() => handleFeatureChange('reports')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Reports</span>
                    <span className="platform-config-switch-description">Enable reporting features</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.billing}
                    onChange={() => handleFeatureChange('billing')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Billing</span>
                    <span className="platform-config-switch-description">Enable billing features</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.multiLanguage}
                    onChange={() => handleFeatureChange('multiLanguage')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Multi-Language</span>
                    <span className="platform-config-switch-description">Enable multiple language support</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.customBranding}
                    onChange={() => handleFeatureChange('customBranding')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">Custom Branding</span>
                    <span className="platform-config-switch-description">Allow organizations to customize branding</span>
                  </div>
                </label>
              </div>

              <div className="platform-config-permission-item">
                <label className="platform-config-switch">
                  <input
                    type="checkbox"
                    checked={config.features.apiAccess}
                    onChange={() => handleFeatureChange('apiAccess')}
                  />
                  <span className="platform-config-switch-slider"></span>
                  <div className="platform-config-switch-content">
                    <span className="platform-config-switch-label">API Access</span>
                    <span className="platform-config-switch-description">Enable API access for organizations</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="platform-config-section">
          <h2 className="platform-config-section-title">Security Settings</h2>
          <div className="platform-config-form">
            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  checked={config.security.twoFactorAuth}
                  onChange={() => handleSecurityChange('twoFactorAuth')}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Two-Factor Authentication</span>
                  <span className="platform-config-switch-description">Require 2FA for admin accounts</span>
                </div>
              </label>
            </div>

            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  checked={config.security.ipWhitelist}
                  onChange={() => handleSecurityChange('ipWhitelist')}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">IP Whitelist</span>
                  <span className="platform-config-switch-description">Restrict access by IP address</span>
                </div>
              </label>
            </div>

            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  checked={config.security.sessionManagement}
                  onChange={() => handleSecurityChange('sessionManagement')}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Session Management</span>
                  <span className="platform-config-switch-description">Enable session management features</span>
                </div>
              </label>
            </div>

            <div className="platform-config-switch-group">
              <label className="platform-config-switch">
                <input
                  type="checkbox"
                  checked={config.security.auditLogging}
                  onChange={() => handleSecurityChange('auditLogging')}
                />
                <span className="platform-config-switch-slider"></span>
                <div className="platform-config-switch-content">
                  <span className="platform-config-switch-label">Audit Logging</span>
                  <span className="platform-config-switch-description">Log all administrative actions</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="platform-config-actions">
          <button className="platform-config-reset-btn" onClick={handleReset}>
            <i className="fas fa-undo"></i> Reset to Defaults
          </button>
          <button className="platform-config-save-btn" onClick={handleSave}>
            <i className="fas fa-save"></i> Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformConfig;

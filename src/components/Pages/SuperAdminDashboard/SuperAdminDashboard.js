import React from 'react';
import { useApp } from '../../../context/AppContext';
import './SuperAdminDashboard.css';

const SuperAdminDashboard = () => {
  const { navigateToPage } = useApp();

  const stats = [
    { icon: 'fa-cog', value: '14', label: 'Active Rules' },
    { icon: 'fa-building', value: '24', label: 'Organisations', gradient: 'teal' },
    { icon: 'fa-robot', value: '98%', label: 'Automation Rate', gradient: 'green' },
    { icon: 'fa-money-check-alt', value: '$12.4K', label: 'Platform Revenue', gradient: 'purple' }
  ];

  const rules = [
    { type: 'Session Duration', value: '60 minutes', status: 'Active', modified: '2 days ago' },
    { type: 'No-Show Grace Period', value: '10 minutes', status: 'Active', modified: '1 week ago' },
    { type: 'Dropped Call Handling', value: 'Auto-reschedule if <15min', status: 'Active', modified: '3 days ago' },
    { type: 'Platform Fee', value: '15%', status: 'Active', modified: '2 weeks ago' },
    { type: 'Auto-Invoicing', value: 'Enabled', status: 'Active', modified: '5 days ago' }
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-title">
          <h1>System Configuration <span className="role-indicator indicator-super-admin">Super Admin</span></h1>
          <p>Define global rules and automation for the entire platform</p>
        </div>
        <div>
          <button className="btn btn-secondary">
            <i className="fas fa-download"></i> Export Config
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className={`stat-icon ${stat.gradient ? `gradient-${stat.gradient}` : ''}`}>
              <i className={`fas ${stat.icon}`}></i>
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">System Rules Overview</h2>
          <button className="btn btn-primary" onClick={() => navigateToPage('session-rules')}>
            <i className="fas fa-edit"></i> Edit Rules
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Rule Type</th>
                <th>Value</th>
                <th>Status</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule, index) => (
                <tr key={index}>
                  <td>{rule.type}</td>
                  <td>{rule.value}</td>
                  <td><span className="status-badge status-completed">{rule.status}</span></td>
                  <td>{rule.modified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Platform Features</h2>
        </div>
        <div className="form-group">
          <label className="form-label">Enabled Modules</label>
          <div>
            {['Automated Session Scheduling', 'Real-time Video Calls', 'Automated Billing & Invoicing', 'Mentor Payouts'].map((feature, index) => (
              <label key={index} style={{ display: 'block', marginBottom: '10px' }}>
                <input type="checkbox" defaultChecked /> {feature}
              </label>
            ))}
            <label style={{ display: 'block', marginBottom: '10px' }}>
              <input type="checkbox" /> Advanced Analytics (Beta)
            </label>
          </div>
        </div>
        <button className="btn btn-success">
          <i className="fas fa-save"></i> Save Configuration
        </button>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;

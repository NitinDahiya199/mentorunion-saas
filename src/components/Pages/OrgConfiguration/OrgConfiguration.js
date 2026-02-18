import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './OrgConfiguration.css';

const OrgConfiguration = () => {
  const { currentPage, showNotification } = useApp();
  const [feedbackType, setFeedbackType] = useState('mentors');
  const [policyRules, setPolicyRules] = useState({
    cancellationWindowHours: 24,
    rescheduleLimit: 2,
    noShowThreshold: 3,
    bufferMinutes: 15
  });

  const configPanels = {
    'org-config-feedback': {
      title: 'Feedback Management',
      subtitle: 'Configure feedback forms for mentors and mentees, create custom feedback templates.'
    },
    'org-config-agenda': {
      title: 'Agenda-Specific Questions',
      subtitle: 'Manage agenda table and create questions per agenda for post-session feedback.'
    },
    'org-config-policy': {
      title: 'Policy Tuning Panel',
      subtitle: 'Cancellation, reschedule, and no-show rules. Adjustable without code changes.'
    },
    'org-config-buffer': {
      title: 'Buffer Logic Control',
      subtitle: 'Mentor buffer customization and automated notifications.'
    }
  };

  const panel = configPanels[currentPage] || configPanels['org-config-feedback'];

  return (
    <div className="org-configuration-page">
      <div className="org-config-header">
        <div>
          <h1 className="org-config-title">{panel.title}</h1>
          <p className="org-config-subtitle">{panel.subtitle}</p>
        </div>
        <button className="org-config-save-btn" onClick={() => showNotification('Configuration saved.')}>
          <i className="fas fa-save"></i> Save
        </button>
      </div>

      {currentPage === 'org-config-feedback' && (
        <div className="org-config-section">
          <div className="org-config-tabs-inline">
            {['mentors', 'mentees', 'create'].map(t => (
              <button
                key={t}
                className={`org-config-tab-btn ${feedbackType === t ? 'active' : ''}`}
                onClick={() => setFeedbackType(t)}
              >
                {t === 'create' ? 'Create Feedback' : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <div className="org-config-card">
            <p className="org-config-placeholder">
              {feedbackType === 'mentors' && 'Configure feedback templates and questions for mentors.'}
              {feedbackType === 'mentees' && 'Configure feedback templates and questions for mentees.'}
              {feedbackType === 'create' && 'Create a new feedback form and assign to agendas or roles.'}
            </p>
          </div>
        </div>
      )}

      {currentPage === 'org-config-agenda' && (
        <div className="org-config-section">
          <div className="org-config-card">
            <h3 className="org-config-card-title">Agenda Table</h3>
            <p className="org-config-placeholder">List of agendas with total calls per agenda. Create agenda-specific questions for post-session feedback.</p>
            <button className="org-config-action-btn"><i className="fas fa-plus"></i> Create Agenda Questions</button>
          </div>
        </div>
      )}

      {currentPage === 'org-config-policy' && (
        <div className="org-config-section">
          <div className="org-config-card">
            <h3 className="org-config-card-title">Session Policies</h3>
            <div className="org-config-form-grid">
              <label>
                <span>Cancellation window (hours)</span>
                <input
                  type="number"
                  value={policyRules.cancellationWindowHours}
                  onChange={e => setPolicyRules(p => ({ ...p, cancellationWindowHours: +e.target.value }))}
                />
              </label>
              <label>
                <span>Reschedule limit per user</span>
                <input
                  type="number"
                  value={policyRules.rescheduleLimit}
                  onChange={e => setPolicyRules(p => ({ ...p, rescheduleLimit: +e.target.value }))}
                />
              </label>
              <label>
                <span>No-show threshold (blocks user after)</span>
                <input
                  type="number"
                  value={policyRules.noShowThreshold}
                  onChange={e => setPolicyRules(p => ({ ...p, noShowThreshold: +e.target.value }))}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'org-config-buffer' && (
        <div className="org-config-section">
          <div className="org-config-card">
            <h3 className="org-config-card-title">Buffer & Notifications</h3>
            <div className="org-config-form-grid">
              <label>
                <span>Buffer between sessions (minutes)</span>
                <input
                  type="number"
                  value={policyRules.bufferMinutes}
                  onChange={e => setPolicyRules(p => ({ ...p, bufferMinutes: +e.target.value }))}
                />
              </label>
            </div>
            <p className="org-config-placeholder">Automated reminders and buffer logic apply to mentor availability.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgConfiguration;

import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './SessionRules.css';

const SessionRules = () => {
  const { showNotification } = useApp();
  const [sessionDuration, setSessionDuration] = useState('60');
  const [noShowWindow, setNoShowWindow] = useState('5');
  const [droppedCallThreshold, setDroppedCallThreshold] = useState('10');

  const handleSave = () => {
    showNotification('Session rules saved successfully!');
  };

  return (
    <div className="session-rules-page">
      <div className="session-rules-header">
        <h1 className="session-rules-title">Session Rules</h1>
        <p className="session-rules-subtitle">
          Global rules applied to all organisations and sessions on the platform.
        </p>
      </div>

      <div className="session-rules-content">
        <div className="session-rules-panel">
          <h2 className="session-panel-title">Session Configuration</h2>
          <div className="session-rules-form">
            <div className="session-form-group">
              <label className="session-form-label">Default Session Duration</label>
              <input
                type="text"
                className="session-form-input"
                value={`${sessionDuration} minutes`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setSessionDuration(value);
                }}
              />
            </div>
            <div className="session-form-group">
              <label className="session-form-label">No-Show Window (minutes)</label>
              <input
                type="text"
                className="session-form-input"
                value={`${noShowWindow} minutes`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setNoShowWindow(value);
                }}
              />
            </div>
            <div className="session-form-group">
              <label className="session-form-label">Dropped Call Threshold (minutes)</label>
              <input
                type="text"
                className="session-form-input"
                value={`${droppedCallThreshold} minutes`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setDroppedCallThreshold(value);
                }}
              />
            </div>
            <button className="session-save-btn" onClick={handleSave}>
              Save Rules
            </button>
          </div>
        </div>

        <div className="session-rules-panel">
          <h2 className="session-panel-title">Rule Summary</h2>
          <div className="session-rule-summary">
            <div className="session-summary-item">
              <span className="session-summary-label">Session Duration:</span>
              <span className="session-summary-value">{sessionDuration} min.</span>
            </div>
            <div className="session-summary-item">
              <span className="session-summary-label">No-Show Trigger:</span>
              <span className="session-summary-value">After {noShowWindow} min.</span>
            </div>
            <div className="session-summary-item">
              <span className="session-summary-label">Dropped Call:</span>
              <span className="session-summary-value">If &lt; {droppedCallThreshold} min.</span>
            </div>
          </div>
          <div className="session-warning-box">
            <i className="fas fa-exclamation-triangle"></i>
            <span>These rules apply system-wide. Changes affect all organisations.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionRules;

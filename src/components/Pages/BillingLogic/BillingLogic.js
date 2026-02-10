import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './BillingLogic.css';

const BillingLogic = () => {
  const { showNotification } = useApp();
  const [creditExpiry, setCreditExpiry] = useState('90');
  const [platformFee, setPlatformFee] = useState('15');
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleSave = () => {
    showNotification('Billing logic saved successfully!');
  };

  const billingSteps = [
    'Session completes → Invoice generated',
    'Credit deducted from mentee balance',
    `Platform fee (${platformFee}%) calculated`,
    'Mentor payout = Session fee - Platform fee',
    'Payment status updated automatically'
  ];

  return (
    <div className="billing-logic-page">
      <div className="billing-logic-header">
        <h1 className="billing-logic-title">Billing & Credit Logic</h1>
        <p className="billing-logic-subtitle">
          Define how credits, billing and platform fees work.
        </p>
      </div>

      <div className="billing-logic-content">
        <div className="billing-logic-panel">
          <h2 className="billing-panel-title">Credit Settings</h2>
          <div className="billing-logic-form">
            <div className="billing-form-group">
              <label className="billing-form-label">Credit Expiry (days)</label>
              <input
                type="text"
                className="billing-form-input"
                value={`${creditExpiry} days`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setCreditExpiry(value);
                }}
              />
            </div>
            <div className="billing-form-group">
              <label className="billing-form-label">Platform Fee (%)</label>
              <input
                type="text"
                className="billing-form-input"
                value={`${platformFee}%`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPlatformFee(value);
                }}
              />
            </div>
            <div className="billing-form-group">
              <label className="billing-form-label">Billing Cycle</label>
              <select
                className="billing-form-select"
                value={billingCycle}
                onChange={(e) => setBillingCycle(e.target.value)}
              >
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Daily">Daily</option>
              </select>
            </div>
            <button className="billing-save-btn" onClick={handleSave}>
              Save Billing Logic
            </button>
          </div>
        </div>

        <div className="billing-logic-panel">
          <h2 className="billing-panel-title">Automated Billing Flow</h2>
          <div className="billing-flow-steps">
            {billingSteps.map((step, index) => (
              <div key={index} className="billing-flow-step">
                <div className="billing-step-number">{index + 1}</div>
                <div className="billing-step-text">{step}</div>
              </div>
            ))}
          </div>
          <div className="billing-automated-note">
            <i className="fas fa-check-circle"></i>
            <span>No manual billing actions are allowed. All billing is automated.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingLogic;

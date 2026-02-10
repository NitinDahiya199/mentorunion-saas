import React from 'react';
import { useApp } from '../../../context/AppContext';
import './SessionOutcomeModal.css';

const SessionOutcomeModal = ({ onClose }) => {
  const { showNotification, navigateToPage, switchRole } = useApp();

  const handleOutcome = (outcome) => {
    let message = '';
    switch(outcome) {
      case 'completed':
        message = 'Session marked as completed. Invoice generated and payout processed automatically.';
        break;
      case 'no-show':
        message = 'Session marked as no-show. Credit refunded to mentee automatically.';
        break;
      case 'dropped':
        message = 'Session marked as dropped. Auto-rescheduled based on system rules.';
        break;
    }
    
    showNotification(`Session outcome recorded: ${message}`);
    onClose();
    
    setTimeout(() => {
      switchRole('org-admin');
      navigateToPage('billing-payouts');
      showNotification('Now viewing automated billing results for the completed session.');
    }, 1500);
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Session Completed</h2>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Select the outcome of the session with Alex Thompson:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <button className="btn btn-success" onClick={() => handleOutcome('completed')}>
              <i className="fas fa-check-circle"></i> Completed Successfully
            </button>
            <button className="btn btn-teal" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white' }} onClick={() => handleOutcome('no-show')}>
              <i className="fas fa-user-times"></i> Mentee No-Show
            </button>
            <button className="btn btn-secondary" onClick={() => handleOutcome('dropped')}>
              <i className="fas fa-phone-slash"></i> Call Dropped/Technical Issues
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionOutcomeModal;

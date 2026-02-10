import React from 'react';
import { useApp } from '../../../context/AppContext';
import './CreateOrgModal.css';

const CreateOrgModal = ({ onClose }) => {
  const { showNotification } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('Organisation created successfully! In a full implementation, this would create the organisation and refresh the list.');
    onClose();
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Organisation</h2>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form id="createOrgForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Organisation Name</label>
              <input type="text" className="form-control" placeholder="e.g., TechMentor Inc." required />
            </div>
            <div className="form-group">
              <label className="form-label">Admin Email</label>
              <input type="email" className="form-control" placeholder="admin@organisation.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Modules to Enable</label>
              <div>
                {['Session Management', 'Billing & Invoicing', 'Mentor Payouts'].map((module, index) => (
                  <label key={index} style={{ display: 'block', marginBottom: '10px' }}>
                    <input type="checkbox" defaultChecked /> {module}
                  </label>
                ))}
                <label style={{ display: 'block', marginBottom: '10px' }}>
                  <input type="checkbox" /> Advanced Analytics
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-success" onClick={handleSubmit}>Create Organisation</button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrgModal;

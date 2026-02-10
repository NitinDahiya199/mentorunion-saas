import React from 'react';
import { useApp } from '../../../context/AppContext';
import './Organisations.css';

const Organisations = () => {
  const { showNotification, platformOrganizations, selectedPlatformOrganization, setSelectedPlatformOrganization } = useApp();

  // Use platform organizations data
  const organisations = platformOrganizations || [];

  const handleCreateOrganisation = () => {
    showNotification('Create Organisation functionality would open a modal here.');
  };

  return (
    <div className="organisations-page">
      <div className="organisations-header">
        <div>
          <h1 className="organisations-title">Organisations</h1>
          <p className="organisations-subtitle">Manage teaching organisations on the platform</p>
        </div>
        <button className="organisations-create-btn" onClick={handleCreateOrganisation}>
          <i className="fas fa-plus"></i> Create Organisation
        </button>
      </div>

      <div className="organisations-table-container">
        <table className="organisations-table">
          <thead>
            <tr>
              <th>ORGANISATION</th>
              <th>ADMIN</th>
              <th>EMAIL</th>
              <th>MENTORS</th>
              <th>MENTEES</th>
              <th>STATUS</th>
              <th>MODULES</th>
            </tr>
          </thead>
          <tbody>
            {organisations.map((org) => (
              <tr 
                key={org.id}
                className={selectedPlatformOrganization?.id === org.id ? 'selected-row' : ''}
                onClick={() => setSelectedPlatformOrganization(org)}
                style={{ cursor: 'pointer' }}
              >
                <td className="org-name-cell">
                  <strong>{org.name}</strong>
                  {selectedPlatformOrganization?.id === org.id && (
                    <i className="fas fa-check org-selected-icon"></i>
                  )}
                </td>
                <td>{org.admin}</td>
                <td>{org.email}</td>
                <td>{org.mentors}</td>
                <td>{org.mentees}</td>
                <td>
                  <span className={`org-status-badge ${org.status === 'active' ? 'org-status-active' : 'org-status-pending'}`}>
                    {org.status.toUpperCase()}
                  </span>
                </td>
                <td>{org.modules}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Organisations;

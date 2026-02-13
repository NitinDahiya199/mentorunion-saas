import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './PlatformPackages.css';

const PlatformPackages = () => {
  const { showNotification, platformOrganizations } = useApp();
  
  const [packages] = useState([
    {
      id: 1,
      name: 'Basic Package',
      description: 'Essential features for small organizations',
      price: '$99/month',
      maxOrganizations: 5,
      maxMentors: 10,
      maxMentees: 50,
      features: ['Video Sessions', 'Basic Analytics', 'Email Support']
    },
    {
      id: 2,
      name: 'Professional Package',
      description: 'Advanced features for growing organizations',
      price: '$299/month',
      maxOrganizations: 20,
      maxMentors: 50,
      maxMentees: 200,
      features: ['Video Sessions', 'Advanced Analytics', 'Priority Support', 'Custom Branding']
    },
    {
      id: 3,
      name: 'Enterprise Package',
      description: 'Full-featured solution for large organizations',
      price: '$999/month',
      maxOrganizations: 100,
      maxMentors: 200,
      maxMentees: 1000,
      features: ['Video Sessions', 'Advanced Analytics', '24/7 Support', 'Custom Branding', 'API Access', 'Dedicated Manager']
    }
  ]);

  // Map organizations to their packages
  const [organizationPackages, setOrganizationPackages] = useState([
    { orgId: 1, orgName: 'TechMentor Inc.', packageId: 2, packageName: 'Professional Package', assignedDate: '2024-01-15', status: 'active' },
    { orgId: 2, orgName: 'EduConnect Solutions', packageId: 2, packageName: 'Professional Package', assignedDate: '2024-02-01', status: 'active' },
    { orgId: 3, orgName: 'CareerBoost Academy', packageId: 1, packageName: 'Basic Package', assignedDate: '2024-01-20', status: 'active' },
    { orgId: 4, orgName: 'SkillUp Learning', packageId: 1, packageName: 'Basic Package', assignedDate: '2024-02-10', status: 'active' },
    { orgId: 5, orgName: 'MentorHub Pro', packageId: null, packageName: 'No Package', assignedDate: null, status: 'pending' }
  ]);

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleAssignPackage = (org) => {
    setSelectedOrg(org);
    const currentPackage = organizationPackages.find(op => op.orgId === org.id);
    setSelectedPackage(currentPackage?.packageId?.toString() || '');
    setShowAssignModal(true);
  };

  const handleSaveAssignment = () => {
    if (!selectedPackage) {
      showNotification('Please select a package');
      return;
    }

    const packageData = packages.find(p => p.id === parseInt(selectedPackage));
    
    setOrganizationPackages(prev => {
      const existing = prev.find(op => op.orgId === selectedOrg.id);
      if (existing) {
        return prev.map(op => 
          op.orgId === selectedOrg.id
            ? { ...op, packageId: parseInt(selectedPackage), packageName: packageData.name, assignedDate: new Date().toISOString().split('T')[0], status: 'active' }
            : op
        );
      } else {
        return [...prev, {
          orgId: selectedOrg.id,
          orgName: selectedOrg.name,
          packageId: parseInt(selectedPackage),
          packageName: packageData.name,
          assignedDate: new Date().toISOString().split('T')[0],
          status: 'active'
        }];
      }
    });

    showNotification(`Package "${packageData.name}" assigned to ${selectedOrg.name} successfully!`);
    setShowAssignModal(false);
    setSelectedOrg(null);
    setSelectedPackage('');
  };

  const handleRemovePackage = (orgId) => {
    if (window.confirm('Are you sure you want to remove the package from this organization?')) {
      setOrganizationPackages(prev => 
        prev.map(op => 
          op.orgId === orgId
            ? { ...op, packageId: null, packageName: 'No Package', assignedDate: null, status: 'pending' }
            : op
        )
      );
      showNotification('Package removed successfully!');
    }
  };

  const getOrgPackage = (orgId) => {
    return organizationPackages.find(op => op.orgId === orgId);
  };

  return (
    <div className="platform-packages-page">
      <div className="platform-packages-header">
        <div>
          <h1 className="platform-packages-title">Organization Packages</h1>
          <p className="platform-packages-subtitle">
            View and manage packages assigned to organizations
          </p>
        </div>
      </div>

      <div className="platform-packages-content">
        <div className="platform-packages-section">
          <h2 className="platform-packages-section-title">Available Packages</h2>
          <div className="platform-packages-grid">
            {packages.map((pkg) => {
              const assignedCount = organizationPackages.filter(op => op.packageId === pkg.id).length;
              return (
                <div key={pkg.id} className="platform-package-card">
                  <div className="platform-package-card-header">
                    <h3 className="platform-package-name">{pkg.name}</h3>
                    <div className="platform-package-price">{pkg.price}</div>
                  </div>
                  <p className="platform-package-description">{pkg.description}</p>
                  <div className="platform-package-stats">
                    <div className="platform-package-stat">
                      <i className="fas fa-building"></i>
                      <span>Max Orgs: {pkg.maxOrganizations}</span>
                    </div>
                    <div className="platform-package-stat">
                      <i className="fas fa-users"></i>
                      <span>Max Mentors: {pkg.maxMentors}</span>
                    </div>
                    <div className="platform-package-stat">
                      <i className="fas fa-user-graduate"></i>
                      <span>Max Mentees: {pkg.maxMentees}</span>
                    </div>
                  </div>
                  <div className="platform-package-assigned">
                    <span className="platform-package-assigned-count">{assignedCount} organizations</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="platform-packages-section">
          <h2 className="platform-packages-section-title">Organization Package Assignments</h2>
          <div className="platform-org-packages-table-container">
            <table className="platform-org-packages-table">
              <thead>
                <tr>
                  <th>ORGANIZATION</th>
                  <th>PACKAGE</th>
                  <th>ASSIGNED DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {platformOrganizations && platformOrganizations.length > 0 ? (
                  platformOrganizations.map((org) => {
                    const orgPackage = getOrgPackage(org.id);
                    return (
                      <tr key={org.id}>
                        <td>
                          <div className="platform-org-cell">
                            <i className={`fas ${org.icon}`}></i>
                            <span>{org.name}</span>
                          </div>
                        </td>
                        <td>
                          {orgPackage?.packageId ? (
                            <span className="platform-package-badge">{orgPackage.packageName}</span>
                          ) : (
                            <span className="platform-no-package-badge">No Package</span>
                          )}
                        </td>
                        <td>{orgPackage?.assignedDate || '-'}</td>
                        <td>
                          <span className={`platform-status-badge platform-status-${orgPackage?.status || 'pending'}`}>
                            {(orgPackage?.status || 'pending').toUpperCase()}
                          </span>
                        </td>
                        <td>
                          <div className="platform-package-actions">
                            <button
                              className="platform-assign-btn"
                              onClick={() => handleAssignPackage(org)}
                            >
                              <i className="fas fa-edit"></i> {orgPackage?.packageId ? 'Change' : 'Assign'}
                            </button>
                            {orgPackage?.packageId && (
                              <button
                                className="platform-remove-btn"
                                onClick={() => handleRemovePackage(org.id)}
                              >
                                <i className="fas fa-times"></i> Remove
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="platform-empty-state">
                      <i className="fas fa-building"></i>
                      <p>No organizations found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showAssignModal && selectedOrg && (
        <div className="platform-package-modal-overlay" onClick={() => setShowAssignModal(false)}>
          <div className="platform-package-modal" onClick={(e) => e.stopPropagation()}>
            <div className="platform-package-modal-header">
              <h2>Assign Package to {selectedOrg.name}</h2>
              <button className="platform-package-modal-close" onClick={() => setShowAssignModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="platform-package-modal-body">
              <div className="platform-package-form-group">
                <label>Select Package *</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="platform-package-select"
                >
                  <option value="">Select a package...</option>
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - {pkg.price}
                    </option>
                  ))}
                </select>
              </div>

              {selectedPackage && (
                <div className="platform-package-preview">
                  {(() => {
                    const selectedPkg = packages.find(p => p.id === parseInt(selectedPackage));
                    return selectedPkg ? (
                      <div className="platform-package-preview-card">
                        <h4>{selectedPkg.name}</h4>
                        <p>{selectedPkg.description}</p>
                        <div className="platform-package-preview-features">
                          <strong>Features:</strong>
                          <ul>
                            {selectedPkg.features.map((feature, index) => (
                              <li key={index}>
                                <i className="fas fa-check"></i> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="platform-package-preview-limits">
                          <div>Max Organizations: {selectedPkg.maxOrganizations}</div>
                          <div>Max Mentors: {selectedPkg.maxMentors}</div>
                          <div>Max Mentees: {selectedPkg.maxMentees}</div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
            </div>

            <div className="platform-package-modal-footer">
              <button className="platform-package-modal-cancel" onClick={() => setShowAssignModal(false)}>
                Cancel
              </button>
              <button className="platform-package-modal-save" onClick={handleSaveAssignment}>
                Assign Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformPackages;

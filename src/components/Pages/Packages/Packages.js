import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './Packages.css';

const Packages = () => {
  const { showNotification } = useApp();
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Basic Package',
      description: 'Essential features for small organizations',
      price: '$99/month',
      maxOrganizations: 5,
      maxMentors: 10,
      maxMentees: 50,
      features: ['Video Sessions', 'Basic Analytics', 'Email Support'],
      organizations: ['TechMentor Inc.', 'SkillUp Learning'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Professional Package',
      description: 'Advanced features for growing organizations',
      price: '$299/month',
      maxOrganizations: 20,
      maxMentors: 50,
      maxMentees: 200,
      features: ['Video Sessions', 'Advanced Analytics', 'Priority Support', 'Custom Branding'],
      organizations: ['EduConnect Solutions', 'CareerBoost Academy'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Enterprise Package',
      description: 'Full-featured solution for large organizations',
      price: '$999/month',
      maxOrganizations: 100,
      maxMentors: 200,
      maxMentees: 1000,
      features: ['Video Sessions', 'Advanced Analytics', '24/7 Support', 'Custom Branding', 'API Access', 'Dedicated Manager'],
      organizations: [],
      status: 'active'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    maxOrganizations: '',
    maxMentors: '',
    maxMentees: '',
    features: []
  });

  const handleCreatePackage = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      maxOrganizations: '',
      maxMentors: '',
      maxMentees: '',
      features: []
    });
    setEditingPackage(null);
    setShowCreateModal(true);
  };

  const handleEditPackage = (pkg) => {
    setFormData({
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      maxOrganizations: pkg.maxOrganizations.toString(),
      maxMentors: pkg.maxMentors.toString(),
      maxMentees: pkg.maxMentees.toString(),
      features: [...pkg.features]
    });
    setEditingPackage(pkg);
    setShowCreateModal(true);
  };

  const handleSavePackage = () => {
    if (!formData.name || !formData.description || !formData.price) {
      showNotification('Please fill in all required fields');
      return;
    }

    if (editingPackage) {
      setPackages(packages.map(pkg => 
        pkg.id === editingPackage.id 
          ? { ...pkg, ...formData, maxOrganizations: parseInt(formData.maxOrganizations), maxMentors: parseInt(formData.maxMentors), maxMentees: parseInt(formData.maxMentees) }
          : pkg
      ));
      showNotification('Package updated successfully!');
    } else {
      const newPackage = {
        id: packages.length + 1,
        ...formData,
        maxOrganizations: parseInt(formData.maxOrganizations),
        maxMentors: parseInt(formData.maxMentors),
        maxMentees: parseInt(formData.maxMentees),
        organizations: [],
        status: 'active'
      };
      setPackages([...packages, newPackage]);
      showNotification('Package created successfully!');
    }
    setShowCreateModal(false);
    setEditingPackage(null);
  };

  const handleDeletePackage = (pkg) => {
    if (pkg.organizations.length > 0) {
      showNotification('Cannot delete package that is assigned to organizations');
      return;
    }
    if (window.confirm(`Are you sure you want to delete "${pkg.name}"?`)) {
      setPackages(packages.filter(p => p.id !== pkg.id));
      showNotification('Package deleted successfully!');
    }
  };

  const handleAddFeature = () => {
    const feature = prompt('Enter feature name:');
    if (feature && feature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, feature.trim()]
      });
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="packages-page">
      <div className="packages-header">
        <div>
          <h1 className="packages-title">Package Management</h1>
          <p className="packages-subtitle">
            Create and manage packages for organizations on the platform
          </p>
        </div>
        <button className="packages-create-btn" onClick={handleCreatePackage}>
          <i className="fas fa-plus"></i> Create Package
        </button>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-card-header">
              <div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-description">{pkg.description}</p>
              </div>
              <div className="package-price">{pkg.price}</div>
            </div>

            <div className="package-details">
              <div className="package-detail-item">
                <i className="fas fa-building"></i>
                <span>Max Organizations: {pkg.maxOrganizations}</span>
              </div>
              <div className="package-detail-item">
                <i className="fas fa-users"></i>
                <span>Max Mentors: {pkg.maxMentors}</span>
              </div>
              <div className="package-detail-item">
                <i className="fas fa-user-graduate"></i>
                <span>Max Mentees: {pkg.maxMentees}</span>
              </div>
            </div>

            <div className="package-features">
              <h4 className="package-features-title">Features:</h4>
              <ul className="package-features-list">
                {pkg.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="package-organizations">
              <h4 className="package-organizations-title">
                Organizations ({pkg.organizations.length}):
              </h4>
              {pkg.organizations.length > 0 ? (
                <div className="package-org-list">
                  {pkg.organizations.map((org, index) => (
                    <span key={index} className="package-org-badge">{org}</span>
                  ))}
                </div>
              ) : (
                <p className="package-no-orgs">No organizations assigned</p>
              )}
            </div>

            <div className="package-actions">
              <button 
                className="package-edit-btn"
                onClick={() => handleEditPackage(pkg)}
              >
                <i className="fas fa-edit"></i> Edit
              </button>
              <button 
                className="package-delete-btn"
                onClick={() => handleDeletePackage(pkg)}
                disabled={pkg.organizations.length > 0}
              >
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCreateModal && (
        <div className="package-modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="package-modal" onClick={(e) => e.stopPropagation()}>
            <div className="package-modal-header">
              <h2>{editingPackage ? 'Edit Package' : 'Create New Package'}</h2>
              <button className="package-modal-close" onClick={() => setShowCreateModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="package-modal-body">
              <div className="package-form-group">
                <label>Package Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Basic Package"
                />
              </div>

              <div className="package-form-group">
                <label>Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the package..."
                  rows="3"
                />
              </div>

              <div className="package-form-group">
                <label>Price *</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g., $99/month"
                />
              </div>

              <div className="package-form-row">
                <div className="package-form-group">
                  <label>Max Organizations *</label>
                  <input
                    type="number"
                    value={formData.maxOrganizations}
                    onChange={(e) => setFormData({ ...formData, maxOrganizations: e.target.value })}
                    placeholder="0"
                  />
                </div>
                <div className="package-form-group">
                  <label>Max Mentors *</label>
                  <input
                    type="number"
                    value={formData.maxMentors}
                    onChange={(e) => setFormData({ ...formData, maxMentors: e.target.value })}
                    placeholder="0"
                  />
                </div>
                <div className="package-form-group">
                  <label>Max Mentees *</label>
                  <input
                    type="number"
                    value={formData.maxMentees}
                    onChange={(e) => setFormData({ ...formData, maxMentees: e.target.value })}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="package-form-group">
                <label>Features</label>
                <div className="package-features-input">
                  {formData.features.map((feature, index) => (
                    <span key={index} className="package-feature-tag">
                      {feature}
                      <button onClick={() => handleRemoveFeature(index)}>
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  ))}
                  <button className="package-add-feature-btn" onClick={handleAddFeature}>
                    <i className="fas fa-plus"></i> Add Feature
                  </button>
                </div>
              </div>
            </div>

            <div className="package-modal-footer">
              <button className="package-modal-cancel" onClick={() => setShowCreateModal(false)}>
                Cancel
              </button>
              <button className="package-modal-save" onClick={handleSavePackage}>
                {editingPackage ? 'Update' : 'Create'} Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;

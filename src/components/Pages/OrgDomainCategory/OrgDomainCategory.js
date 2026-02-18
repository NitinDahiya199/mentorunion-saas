import React, { useState } from 'react';
import './OrgDomainCategory.css';

const OrgDomainCategory = () => {
  const [activeSection, setActiveSection] = useState('domains');

  const domains = [
    { id: 1, name: 'Technology', categoriesCount: 3, subCategoriesCount: 8 },
    { id: 2, name: 'Career Growth', categoriesCount: 2, subCategoriesCount: 5 }
  ];

  const categories = [
    { id: 1, name: 'Programming', domain: 'Technology', subCategories: ['Python', 'JavaScript', 'System Design'] },
    { id: 2, name: 'Leadership', domain: 'Career Growth', subCategories: ['Team Lead', 'Executive'] }
  ];

  return (
    <div className="org-domain-category-page">
      <div className="org-domain-header">
        <div>
          <h1 className="org-domain-title">Domain & Category Management</h1>
          <p className="org-domain-subtitle">Maintain structured taxonomy and improve mentor discoverability</p>
        </div>
        <button className="org-domain-add-btn">
          <i className="fas fa-plus"></i>
          {activeSection === 'domains' ? 'Add Domain' : activeSection === 'categories' ? 'Add Category' : 'Add Sub-category'}
        </button>
      </div>

      <div className="org-domain-tabs">
        {['domains', 'categories', 'subcategories'].map(section => (
          <button
            key={section}
            className={`org-domain-tab ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace('categories', 'Categories').replace('subcategories', 'Sub-categories')}
          </button>
        ))}
      </div>

      {activeSection === 'domains' && (
        <div className="org-domain-table-container">
          <table className="org-domain-table">
            <thead>
              <tr>
                <th>DOMAIN NAME</th>
                <th>CATEGORIES</th>
                <th>SUB-CATEGORIES</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {domains.map(d => (
                <tr key={d.id}>
                  <td><strong>{d.name}</strong></td>
                  <td>{d.categoriesCount}</td>
                  <td>{d.subCategoriesCount}</td>
                  <td>
                    <button className="org-domain-action-btn edit"><i className="fas fa-edit"></i></button>
                    <button className="org-domain-action-btn delete"><i className="fas fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeSection === 'categories' && (
        <div className="org-domain-table-container">
          <table className="org-domain-table">
            <thead>
              <tr>
                <th>CATEGORY NAME</th>
                <th>DOMAIN</th>
                <th>SUB-CATEGORIES</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(c => (
                <tr key={c.id}>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.domain}</td>
                  <td>{c.subCategories.join(', ')}</td>
                  <td>
                    <button className="org-domain-action-btn edit"><i className="fas fa-edit"></i></button>
                    <button className="org-domain-action-btn delete"><i className="fas fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeSection === 'subcategories' && (
        <div className="org-domain-placeholder">
          <p>Select a category to view or add sub-categories. Sub-categories improve search and reporting.</p>
        </div>
      )}
    </div>
  );
};

export default OrgDomainCategory;

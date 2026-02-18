import React, { useState } from 'react';
import './OrgProBono.css';

const OrgProBono = () => {
  const [activeTab, setActiveTab] = useState('mentors');

  const proBonoMentors = [
    { id: 1, name: 'Dr. Jane Doe', domain: 'Career', slotsThisMonth: 4, visibility: 'Cohort A' }
  ];

  const resources = [
    { type: 'SOP', name: 'Pro-Bono Session SOP.pdf', uploadedAt: '2025-01-15' },
    { type: 'Handbook', name: 'Volunteer Handbook v2.pdf', uploadedAt: '2025-02-01' },
    { type: 'FAQ', name: 'Pro-Bono FAQs', updatedAt: '2025-02-10' }
  ];

  return (
    <div className="org-pro-bono-page">
      <div className="org-pro-bono-header">
        <div>
          <h1 className="org-pro-bono-title">Pro-Bono Mentors</h1>
          <p className="org-pro-bono-subtitle">Manage volunteer or special mentor segments with structured resource governance</p>
        </div>
        <button className="org-pro-bono-upload-btn">
          <i className="fas fa-upload"></i> Upload Resource
        </button>
      </div>

      <div className="org-pro-bono-tabs">
        {[
          { id: 'mentors', label: 'Mentors' },
          { id: 'sops', label: 'SOPs' },
          { id: 'handbooks', label: 'Handbooks' },
          { id: 'faqs', label: 'FAQs' },
          { id: 'visibility', label: 'Visibility' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`org-pro-bono-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'mentors' && (
        <div className="org-pro-bono-table-container">
          <table className="org-pro-bono-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>DOMAIN</th>
                <th>SLOTS THIS MONTH</th>
                <th>VISIBILITY</th>
              </tr>
            </thead>
            <tbody>
              {proBonoMentors.map(m => (
                <tr key={m.id}>
                  <td><strong>{m.name}</strong></td>
                  <td>{m.domain}</td>
                  <td>{m.slotsThisMonth}</td>
                  <td>{m.visibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(activeTab === 'sops' || activeTab === 'handbooks' || activeTab === 'faqs') && (
        <div className="org-pro-bono-table-container">
          <table className="org-pro-bono-table">
            <thead>
              <tr>
                <th>TYPE</th>
                <th>NAME</th>
                <th>UPLOADED / UPDATED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const filtered = resources.filter(r =>
                  (activeTab === 'sops' && r.type === 'SOP') ||
                  (activeTab === 'handbooks' && r.type === 'Handbook') ||
                  (activeTab === 'faqs' && r.type === 'FAQ')
                );
                return filtered.length > 0
                  ? filtered.map((r, i) => (
                      <tr key={i}>
                        <td><span className="org-pro-bono-type-badge">{r.type}</span></td>
                        <td>{r.name}</td>
                        <td>{r.uploadedAt || r.updatedAt}</td>
                        <td>
                          <button className="org-pro-bono-action-btn"><i className="fas fa-download"></i></button>
                          <button className="org-pro-bono-action-btn"><i className="fas fa-edit"></i></button>
                        </td>
                      </tr>
                    ))
                  : (
                      <tr>
                        <td colSpan={4} className="org-pro-bono-empty">No resources in this category. Use Upload Resource to add.</td>
                      </tr>
                    );
              })()}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'visibility' && (
        <div className="org-pro-bono-placeholder">
          <p>Control visibility of pro-bono mentors and resources per cohort or school. Adjust which groups can see and book pro-bono slots.</p>
        </div>
      )}
    </div>
  );
};

export default OrgProBono;

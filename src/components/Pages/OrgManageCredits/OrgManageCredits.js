import React, { useState } from 'react';
import './OrgManageCredits.css';

const OrgManageCredits = () => {
  const [activeTab, setActiveTab] = useState('count');

  const creditsSummary = { total: 150, assigned: 120, available: 30 };

  const creditsTable = [
    { id: 1, program: 'Career Sprint', mentee: 'User A', credits: 10, renewedAt: '2025-01-01', expiry: '2025-12-31' },
    { id: 2, program: 'Tech Mentorship', mentee: 'User B', credits: 15, renewedAt: '2025-02-01', expiry: '2026-02-01' }
  ];

  const auditLogs = [
    { id: 1, action: 'Bulk assign', program: 'Career Sprint', credits: 50, by: 'Org Admin', at: '2025-02-01 10:00' },
    { id: 2, action: 'Manual edit', mentee: 'User A', from: 5, to: 10, by: 'Org Admin', at: '2025-02-05 14:30' }
  ];

  return (
    <div className="org-manage-credits-page">
      <div className="org-credits-header">
        <div>
          <h1 className="org-credits-title">Manage Credits</h1>
          <p className="org-credits-subtitle">Credits determine booking eligibility and session access. Manual edits, bulk assignments, and audit logs.</p>
        </div>
        <div className="org-credits-header-actions">
          <button className="org-credits-btn secondary"><i className="fas fa-edit"></i> Manual Edit</button>
          <button className="org-credits-btn primary"><i className="fas fa-layer-group"></i> Bulk Assign</button>
        </div>
      </div>

      <div className="org-credits-cards">
        <div className="org-credits-card">
          <div className="org-credits-card-label">TOTAL CREDITS</div>
          <div className="org-credits-card-value">{creditsSummary.total}</div>
        </div>
        <div className="org-credits-card">
          <div className="org-credits-card-label">ASSIGNED</div>
          <div className="org-credits-card-value">{creditsSummary.assigned}</div>
        </div>
        <div className="org-credits-card org-credits-card-orange">
          <div className="org-credits-card-label">AVAILABLE</div>
          <div className="org-credits-card-value">{creditsSummary.available}</div>
        </div>
      </div>

      <div className="org-credits-tabs">
        {[
          { id: 'count', label: 'Credits Count' },
          { id: 'table', label: 'Credits Table' },
          { id: 'audit', label: 'Audit Logs' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`org-credits-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'table' && (
        <div className="org-credits-table-container">
          <table className="org-credits-table">
            <thead>
              <tr>
                <th>PROGRAM</th>
                <th>MENTEE</th>
                <th>CREDITS</th>
                <th>RENEWED</th>
                <th>EXPIRY</th>
              </tr>
            </thead>
            <tbody>
              {creditsTable.map(row => (
                <tr key={row.id}>
                  <td>{row.program}</td>
                  <td><strong>{row.mentee}</strong></td>
                  <td>{row.credits}</td>
                  <td>{row.renewedAt}</td>
                  <td>{row.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="org-credits-table-container">
          <table className="org-credits-table">
            <thead>
              <tr>
                <th>ACTION</th>
                <th>PROGRAM / MENTEE</th>
                <th>DETAILS</th>
                <th>BY</th>
                <th>AT</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map(row => (
                <tr key={row.id}>
                  <td><strong>{row.action}</strong></td>
                  <td>{row.program || row.mentee}</td>
                  <td>{row.credits ? `${row.credits} credits` : `${row.from} → ${row.to}`}</td>
                  <td>{row.by}</td>
                  <td>{row.at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'count' && (
        <div className="org-credits-placeholder">
          <p>Summary cards above show credits overview. Use Credits Table for per-program, per-mentee view and Audit Logs for change history.</p>
        </div>
      )}
    </div>
  );
};

export default OrgManageCredits;

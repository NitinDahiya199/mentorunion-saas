import React, { useState } from 'react';
import './OrgBlockedLogs.css';

const OrgBlockedLogs = () => {
  const [activeTab, setActiveTab] = useState('details');

  const blockedDetails = [
    { id: 1, menteeName: 'User A', reason: 'No-show (3x)', blockedAt: '2025-02-01', blockedBy: 'System' },
    { id: 2, menteeName: 'User B', reason: 'Policy violation', blockedAt: '2025-02-10', blockedBy: 'Org Admin' }
  ];

  const allLogs = [
    { id: 1, action: 'Blocked', menteeName: 'User A', reason: 'No-show', timestamp: '2025-02-01 14:30' },
    { id: 2, action: 'Unblocked', menteeName: 'User A', reason: 'Appeal approved', timestamp: '2025-02-05 10:00' }
  ];

  return (
    <div className="org-blocked-logs-page">
      <div className="org-blocked-header">
        <div>
          <h1 className="org-blocked-title">Blocked Logs</h1>
          <p className="org-blocked-subtitle">Enforce platform discipline and maintain governance records</p>
        </div>
      </div>

      <div className="org-blocked-tabs">
        {[
          { id: 'details', label: 'Blocked Details' },
          { id: 'mentees', label: 'Blocked Mentees' },
          { id: 'logs', label: 'All Logs' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`org-blocked-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {(activeTab === 'details' || activeTab === 'mentees') && (
        <div className="org-blocked-table-container">
          <table className="org-blocked-table">
            <thead>
              <tr>
                <th>MENTEE</th>
                <th>REASON</th>
                <th>BLOCKED AT</th>
                <th>BLOCKED BY</th>
                {activeTab === 'mentees' && <th>ACTIONS</th>}
              </tr>
            </thead>
            <tbody>
              {blockedDetails.map(row => (
                <tr key={row.id}>
                  <td><strong>{row.menteeName}</strong></td>
                  <td>{row.reason}</td>
                  <td>{row.blockedAt}</td>
                  <td>{row.blockedBy}</td>
                  {activeTab === 'mentees' && (
                    <td>
                      <button className="org-blocked-action-btn unblock">Unblock</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="org-blocked-table-container">
          <table className="org-blocked-table">
            <thead>
              <tr>
                <th>ACTION</th>
                <th>MENTEE</th>
                <th>REASON / NOTES</th>
                <th>TIMESTAMP</th>
              </tr>
            </thead>
            <tbody>
              {allLogs.map(row => (
                <tr key={row.id}>
                  <td><span className={`org-blocked-action-badge ${row.action.toLowerCase()}`}>{row.action}</span></td>
                  <td>{row.menteeName}</td>
                  <td>{row.reason}</td>
                  <td>{row.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrgBlockedLogs;

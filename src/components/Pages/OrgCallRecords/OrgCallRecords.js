import React, { useState } from 'react';
import './OrgCallRecords.css';

const OrgCallRecords = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Calls' },
    { id: 'upcoming', label: 'Upcoming Calls' },
    { id: 'ongoing', label: 'Ongoing Calls' },
    { id: 'past', label: 'Past Calls' }
  ];

  const callRecords = [
    { id: 'C-1', session: 'S-1', agenda: 'ML Basics', duration: '—', quality: '—', participants: 2, status: 'SCHEDULED', date: '2025-02-17' },
    { id: 'C-2', session: 'S-2', agenda: 'Python Fundamentals', duration: '58m 12s', quality: 'GOOD', participants: 2, status: 'COMPLETED', date: '2025-02-10' }
  ];

  const filteredRecords = activeTab === 'all' ? callRecords : callRecords.filter(r => r.status === (activeTab === 'upcoming' || activeTab === 'ongoing' ? 'SCHEDULED' : 'COMPLETED'));

  return (
    <div className="org-call-records-page">
      <div className="org-call-records-header">
        <div>
          <h1 className="org-call-records-title">Call Records</h1>
          <p className="org-call-records-subtitle">Monitor lifecycle of mentorship sessions, track attendance and outcomes</p>
        </div>
        {activeTab === 'all' && (
          <button className="org-call-records-download-btn">
            <i className="fas fa-download"></i> Download
          </button>
        )}
      </div>

      <div className="org-call-records-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`org-call-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="org-call-records-table-container">
        <table className="org-call-records-table">
          <thead>
            <tr>
              <th>CALL ID</th>
              <th>SESSION</th>
              <th>AGENDA</th>
              <th>DURATION</th>
              <th>QUALITY</th>
              <th>PARTICIPANTS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record, index) => (
              <tr key={index}>
                <td className="org-call-id">#{record.id}</td>
                <td>#{record.session}</td>
                <td>{record.agenda}</td>
                <td>{record.duration}</td>
                <td>
                  {record.quality !== '—' ? (
                    <span className="org-call-quality-badge org-call-quality-good">{record.quality}</span>
                  ) : (
                    '—'
                  )}
                </td>
                <td>{record.participants}</td>
                <td>
                  <span className={`org-call-status-badge org-call-status-${record.status === 'COMPLETED' ? 'green' : 'blue'}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgCallRecords;

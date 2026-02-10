import React from 'react';
import './CallRecords.css';

const CallRecords = () => {
  const callRecords = [
    {
      id: 'C-1',
      session: 'S-1',
      duration: '58m 12s',
      quality: 'GOOD',
      participants: 2,
      recorded: 'No'
    }
  ];

  return (
    <div className="call-records-page">
      <div className="call-records-header">
        <div>
          <h1 className="call-records-title">Call Records</h1>
          <p className="call-records-subtitle">Audit-only view of all call activity</p>
        </div>
      </div>

      <div className="call-records-table-container">
        <table className="call-records-table">
          <thead>
            <tr>
              <th>CALL ID</th>
              <th>SESSION</th>
              <th>DURATION</th>
              <th>QUALITY</th>
              <th>PARTICIPANTS</th>
              <th>RECORDED</th>
            </tr>
          </thead>
          <tbody>
            {callRecords.map((record, index) => (
              <tr key={index}>
                <td className="call-id">#{record.id}</td>
                <td className="call-session">#{record.session}</td>
                <td>{record.duration}</td>
                <td>
                  <span className="call-quality-badge call-quality-good">
                    {record.quality}
                  </span>
                </td>
                <td>{record.participants}</td>
                <td>{record.recorded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallRecords;

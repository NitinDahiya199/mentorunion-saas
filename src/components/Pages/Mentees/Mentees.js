import React from 'react';
import { useApp } from '../../../context/AppContext';
import './Mentees.css';

const Mentees = () => {
  const { showNotification } = useApp();

  const mentees = [
    {
      id: 1,
      name: 'Riya Kapoor',
      email: 'riya@example.com',
      program: 'DATA SCIENCE BOOTCAMP',
      credits: 8,
      sessions: 6,
      status: 'ACTIVE'
    }
  ];

  const handleAddMentee = () => {
    showNotification('Add Mentee functionality would open a modal here.');
  };

  return (
    <div className="mentees-page">
      <div className="mentees-header">
        <div>
          <h1 className="mentees-title">Mentees</h1>
          <p className="mentees-subtitle">Each mentee is assigned to exactly 1 program.</p>
        </div>
        <button className="mentees-add-btn" onClick={handleAddMentee}>
          <i className="fas fa-plus"></i> Add Mentee
        </button>
      </div>

      <div className="mentees-table-container">
        <table className="mentees-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PROGRAM</th>
              <th>CREDITS</th>
              <th>SESSIONS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {mentees.map((mentee) => (
              <tr key={mentee.id}>
                <td className="mentee-name-cell">
                  <strong>{mentee.name}</strong>
                </td>
                <td>{mentee.email}</td>
                <td>
                  <span className="mentee-program-tag">{mentee.program}</span>
                </td>
                <td>{mentee.credits}</td>
                <td>{mentee.sessions}</td>
                <td>
                  <span className="mentee-status-badge mentee-status-active">
                    {mentee.status}
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

export default Mentees;

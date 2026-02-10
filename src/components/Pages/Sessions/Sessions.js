import React from 'react';
import { useApp } from '../../../context/AppContext';
import './Sessions.css';

const Sessions = () => {
  const { navigateToPage } = useApp();

  const sessions = [
    {
      id: 1,
      agenda: 'Python Fundamentals',
      mentor: 'Dr. Arun Patel',
      mentee: 'Riya Kapoor',
      date: '2025-02-10',
      time: '10:00 AM',
      status: 'COMPLETED',
      statusColor: 'green'
    },
    {
      id: 2,
      agenda: 'ML Basics',
      mentor: 'Dr. Arun Patel',
      mentee: 'Riya Kapoor',
      date: '2025-02-17',
      time: '10:00 AM',
      status: 'SCHEDULED',
      statusColor: 'blue'
    }
  ];

  const formatDateTime = (date, time) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
    return `${formattedDate} ${time}`;
  };

  return (
    <div className="sessions-page">
      <div className="sessions-header">
        <div>
          <h1 className="sessions-title">Sessions</h1>
          <p className="sessions-subtitle">Manage and monitor all sessions</p>
        </div>
        <button className="sessions-book-btn" onClick={() => navigateToPage('session-booking')}>
          <i className="fas fa-plus"></i> Book Session
        </button>
      </div>

      <div className="sessions-table-container">
        <table className="sessions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>AGENDA</th>
              <th>MENTOR</th>
              <th>MENTEE</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="session-id">#{session.id}</td>
                <td className="session-agenda">{session.agenda}</td>
                <td>{session.mentor}</td>
                <td>{session.mentee}</td>
                <td>{formatDateTime(session.date, session.time)}</td>
                <td>
                  <span className={`session-status-badge session-status-${session.statusColor}`}>
                    {session.status}
                  </span>
                </td>
                <td>
                  {session.status === 'COMPLETED' ? (
                    <button className="session-action-link" onClick={() => navigateToPage('session-details')}>View</button>
                  ) : (
                    <button className="session-simulate-btn">
                      Simulate →
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sessions;

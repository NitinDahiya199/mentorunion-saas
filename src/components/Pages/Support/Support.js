import React from 'react';
import { useApp } from '../../../context/AppContext';
import './Support.css';

const Support = () => {
  const tickets = [
    {
      id: 'T-1',
      subject: 'Cannot access session recording',
      from: 'Riya Kapoor',
      priority: 'MEDIUM',
      status: 'PENDING',
      created: '2025-02-09'
    }
  ];

  const getPriorityClass = (priority) => {
    return priority.toLowerCase();
  };

  const getStatusClass = (status) => {
    return status.toLowerCase();
  };

  return (
    <div className="support-page">
      <h1 className="support-title">Support Tickets</h1>

      <div className="support-table-container">
        <table className="support-table">
          <thead>
            <tr>
              <th>TICKET</th>
              <th>SUBJECT</th>
              <th>FROM</th>
              <th>PRIORITY</th>
              <th>STATUS</th>
              <th>CREATED</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="ticket-id">#{ticket.id}</td>
                <td className="ticket-subject">{ticket.subject}</td>
                <td>{ticket.from}</td>
                <td>
                  <span className={`ticket-priority-badge ticket-priority-${getPriorityClass(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>
                  <span className={`ticket-status-badge ticket-status-${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Support;

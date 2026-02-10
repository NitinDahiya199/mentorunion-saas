import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './TicketRaised.css';

const TicketRaised = () => {
  const { selectedPlatformOrganization } = useApp();
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Sample ticket data - in a real app, this would come from an API
  const allTickets = [
    {
      id: 'T-101',
      org: 'TechMentor Inc.',
      createdBy: 'Priya Sharma',
      role: 'Org Admin',
      subject: 'Unable to create new program',
      status: 'open',
      priority: 'high',
      createdAt: '2 hours ago',
      lastUpdated: '1 hour ago'
    },
    {
      id: 'T-102',
      org: 'EduConnect Solutions',
      createdBy: 'Raj Patel',
      role: 'Org Admin',
      subject: 'Mentor not able to join call',
      status: 'in-progress',
      priority: 'high',
      createdAt: '5 hours ago',
      lastUpdated: '3 hours ago'
    },
    {
      id: 'T-103',
      org: 'CareerBoost Academy',
      createdBy: 'Sarah Johnson',
      role: 'Org Admin',
      subject: 'Billing mismatch for last month',
      status: 'open',
      priority: 'medium',
      createdAt: '1 day ago',
      lastUpdated: '1 day ago'
    },
    {
      id: 'T-104',
      org: 'SkillUp Learning',
      createdBy: 'Michael Chen',
      role: 'Org Admin',
      subject: 'Need help configuring session rules',
      status: 'resolved',
      priority: 'low',
      createdAt: '3 days ago',
      lastUpdated: '1 day ago'
    },
    {
      id: 'T-105',
      org: 'MentorHub Pro',
      createdBy: 'Lisa Anderson',
      role: 'Org Admin',
      subject: 'Onboarding support for new organisation',
      status: 'open',
      priority: 'medium',
      createdAt: '4 days ago',
      lastUpdated: '2 days ago'
    }
  ];

  const filteredTickets = allTickets.filter(ticket => {
    const matchesOrg = !selectedPlatformOrganization || ticket.org === selectedPlatformOrganization.name;
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    return matchesOrg && matchesStatus && matchesPriority;
  });

  const stats = {
    total: filteredTickets.length,
    open: filteredTickets.filter(t => t.status === 'open').length,
    inProgress: filteredTickets.filter(t => t.status === 'in-progress').length,
    resolved: filteredTickets.filter(t => t.status === 'resolved').length
  };

  return (
    <div className="ticket-raised-page">
      <div className="ticket-raised-header">
        <div>
          <h1 className="ticket-raised-title">Ticket Raised</h1>
          <p className="ticket-raised-subtitle">
            {selectedPlatformOrganization
              ? `Org admin issues for ${selectedPlatformOrganization.name}`
              : 'Central queue of all issues raised by organisation admins'}
          </p>
        </div>
      </div>

      <div className="ticket-raised-summary">
        <div className="ticket-summary-card">
          <div className="ticket-summary-label">TOTAL TICKETS</div>
          <div className="ticket-summary-value">{stats.total}</div>
        </div>
        <div className="ticket-summary-card">
          <div className="ticket-summary-label">OPEN</div>
          <div className="ticket-summary-value ticket-summary-open">{stats.open}</div>
        </div>
        <div className="ticket-summary-card">
          <div className="ticket-summary-label">IN PROGRESS</div>
          <div className="ticket-summary-value ticket-summary-progress">{stats.inProgress}</div>
        </div>
        <div className="ticket-summary-card">
          <div className="ticket-summary-label">RESOLVED</div>
          <div className="ticket-summary-value ticket-summary-resolved">{stats.resolved}</div>
        </div>
      </div>

      <div className="ticket-raised-filters">
        <div className="ticket-filter-group">
          <span className="ticket-filter-label">Status</span>
          <div className="ticket-filter-chips">
            {['all', 'open', 'in-progress', 'resolved'].map(value => (
              <button
                key={value}
                className={`ticket-chip ${statusFilter === value ? 'active' : ''}`}
                onClick={() => setStatusFilter(value)}
              >
                {value === 'all' ? 'All' : value.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="ticket-filter-group">
          <span className="ticket-filter-label">Priority</span>
          <div className="ticket-filter-chips">
            {['all', 'high', 'medium', 'low'].map(value => (
              <button
                key={value}
                className={`ticket-chip ${priorityFilter === value ? 'active' : ''}`}
                onClick={() => setPriorityFilter(value)}
              >
                {value === 'all' ? 'All' : value.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="ticket-raised-table-container">
        <table className="ticket-raised-table">
          <thead>
            <tr>
              <th>TICKET ID</th>
              <th>ORGANISATION</th>
              <th>RAISED BY</th>
              <th>SUBJECT</th>
              <th>STATUS</th>
              <th>PRIORITY</th>
              <th>CREATED</th>
              <th>LAST UPDATED</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr>
                <td colSpan="8" className="ticket-empty-state">
                  <i className="fas fa-ticket-alt"></i>
                  <p>No tickets match the selected filters.</p>
                </td>
              </tr>
            ) : (
              filteredTickets.map(ticket => (
                <tr key={ticket.id}>
                  <td className="ticket-id-cell">{ticket.id}</td>
                  <td>
                    <div className="ticket-org-cell">
                      <i className="fas fa-building"></i>
                      <span>{ticket.org}</span>
                    </div>
                  </td>
                  <td>
                    <div className="ticket-user-cell">
                      <span className="ticket-user-name">{ticket.createdBy}</span>
                      <span className="ticket-user-role">{ticket.role}</span>
                    </div>
                  </td>
                  <td className="ticket-subject-cell">{ticket.subject}</td>
                  <td>
                    <span className={`ticket-status-badge ticket-status-${ticket.status}`}>
                      {ticket.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <span className={`ticket-priority-badge ticket-priority-${ticket.priority}`}>
                      {ticket.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="ticket-time-cell">{ticket.createdAt}</td>
                  <td className="ticket-time-cell">{ticket.lastUpdated}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketRaised;

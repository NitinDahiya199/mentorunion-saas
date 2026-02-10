import React, { useState } from 'react';
import './OrgTicketRaised.css';

const OrgTicketRaised = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample ticket data - tickets raised by mentors and mentees
  const allTickets = [
    {
      id: 'T-201',
      raisedBy: 'Dr. Sarah Johnson',
      userType: 'mentor',
      subject: 'Unable to access session recordings',
      description: 'I cannot access the recordings from last week\'s sessions. Getting a 404 error.',
      status: 'open',
      priority: 'high',
      createdAt: '2 hours ago',
      lastUpdated: '1 hour ago'
    },
    {
      id: 'T-202',
      raisedBy: 'Alex Thompson',
      userType: 'mentee',
      subject: 'Video call quality issues',
      description: 'Experiencing frequent disconnections during video calls. Internet connection is stable.',
      status: 'in-progress',
      priority: 'high',
      createdAt: '5 hours ago',
      lastUpdated: '3 hours ago'
    },
    {
      id: 'T-203',
      raisedBy: 'Michael Chen',
      userType: 'mentor',
      subject: 'Need help with scheduling conflicts',
      description: 'The calendar is showing incorrect availability times. Need to update my schedule.',
      status: 'open',
      priority: 'medium',
      createdAt: '1 day ago',
      lastUpdated: '1 day ago'
    },
    {
      id: 'T-204',
      raisedBy: 'Emma Wilson',
      userType: 'mentee',
      subject: 'Cannot book a session',
      description: 'When I try to book a session, I get an error message saying "Session unavailable".',
      status: 'resolved',
      priority: 'medium',
      createdAt: '2 days ago',
      lastUpdated: '1 day ago'
    },
    {
      id: 'T-205',
      raisedBy: 'Dr. James Brown',
      userType: 'mentor',
      subject: 'Feedback form not submitting',
      description: 'After completing the session feedback form, clicking submit does nothing.',
      status: 'open',
      priority: 'low',
      createdAt: '3 days ago',
      lastUpdated: '2 days ago'
    },
    {
      id: 'T-206',
      raisedBy: 'Sophia Martinez',
      userType: 'mentee',
      subject: 'Payment issue',
      description: 'I was charged twice for the same session. Need refund for duplicate charge.',
      status: 'in-progress',
      priority: 'high',
      createdAt: '4 days ago',
      lastUpdated: '2 days ago'
    },
    {
      id: 'T-207',
      raisedBy: 'Dr. Robert Lee',
      userType: 'mentor',
      subject: 'Profile update not saving',
      description: 'Changes to my profile information are not being saved. Tried multiple times.',
      status: 'resolved',
      priority: 'low',
      createdAt: '5 days ago',
      lastUpdated: '3 days ago'
    },
    {
      id: 'T-208',
      raisedBy: 'Olivia Davis',
      userType: 'mentee',
      subject: 'Session reminder emails not received',
      description: 'I am not receiving email reminders for my upcoming sessions.',
      status: 'open',
      priority: 'medium',
      createdAt: '1 week ago',
      lastUpdated: '5 days ago'
    }
  ];

  const filteredTickets = allTickets.filter(ticket => {
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesType = typeFilter === 'all' || ticket.userType === typeFilter;
    const matchesSearch = searchQuery === '' || 
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.raisedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  const stats = {
    total: filteredTickets.length,
    open: filteredTickets.filter(t => t.status === 'open').length,
    inProgress: filteredTickets.filter(t => t.status === 'in-progress').length,
    resolved: filteredTickets.filter(t => t.status === 'resolved').length,
    mentors: filteredTickets.filter(t => t.userType === 'mentor').length,
    mentees: filteredTickets.filter(t => t.userType === 'mentee').length
  };

  return (
    <div className="org-ticket-raised-page">
      <div className="org-ticket-raised-header">
        <div>
          <h1 className="org-ticket-raised-title">Ticket Raised</h1>
          <p className="org-ticket-raised-subtitle">
            Manage tickets raised by mentors and mentees in your organisation
          </p>
        </div>
      </div>

      <div className="org-ticket-raised-summary">
        <div className="org-ticket-summary-card">
          <div className="org-ticket-summary-label">TOTAL TICKETS</div>
          <div className="org-ticket-summary-value">{stats.total}</div>
        </div>
        <div className="org-ticket-summary-card">
          <div className="org-ticket-summary-label">OPEN</div>
          <div className="org-ticket-summary-value org-ticket-summary-open">{stats.open}</div>
        </div>
        <div className="org-ticket-summary-card">
          <div className="org-ticket-summary-label">IN PROGRESS</div>
          <div className="org-ticket-summary-value org-ticket-summary-progress">{stats.inProgress}</div>
        </div>
        <div className="org-ticket-summary-card">
          <div className="org-ticket-summary-label">RESOLVED</div>
          <div className="org-ticket-summary-value org-ticket-summary-resolved">{stats.resolved}</div>
        </div>
        <div className="org-ticket-summary-card">
          <div className="org-ticket-summary-label">FROM MENTORS</div>
          <div className="org-ticket-summary-value org-ticket-summary-mentors">{stats.mentors}</div>
        </div>
        <div className="org-ticket-summary-card">
          <div className="org-ticket-summary-label">FROM MENTEES</div>
          <div className="org-ticket-summary-value org-ticket-summary-mentees">{stats.mentees}</div>
        </div>
      </div>

      <div className="org-ticket-raised-filters">
        <div className="org-ticket-search-container">
          <i className="fas fa-search org-ticket-search-icon"></i>
          <input
            type="text"
            className="org-ticket-search-input"
            placeholder="Search tickets by subject, description, or user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="org-ticket-filter-group">
          <span className="org-ticket-filter-label">Status</span>
          <div className="org-ticket-filter-chips">
            {['all', 'open', 'in-progress', 'resolved'].map(value => (
              <button
                key={value}
                className={`org-ticket-chip ${statusFilter === value ? 'active' : ''}`}
                onClick={() => setStatusFilter(value)}
              >
                {value === 'all' ? 'All' : value.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="org-ticket-filter-group">
          <span className="org-ticket-filter-label">User Type</span>
          <div className="org-ticket-filter-chips">
            {['all', 'mentor', 'mentee'].map(value => (
              <button
                key={value}
                className={`org-ticket-chip ${typeFilter === value ? 'active' : ''}`}
                onClick={() => setTypeFilter(value)}
              >
                {value === 'all' ? 'All' : value.charAt(0).toUpperCase() + value.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="org-ticket-raised-table-container">
        <table className="org-ticket-raised-table">
          <thead>
            <tr>
              <th>TICKET ID</th>
              <th>RAISED BY</th>
              <th>USER TYPE</th>
              <th>SUBJECT</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
              <th>PRIORITY</th>
              <th>CREATED</th>
              <th>LAST UPDATED</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr>
                <td colSpan="9" className="org-ticket-empty-state">
                  <i className="fas fa-ticket-alt"></i>
                  <p>No tickets match the selected filters.</p>
                </td>
              </tr>
            ) : (
              filteredTickets.map(ticket => (
                <tr key={ticket.id}>
                  <td className="org-ticket-id-cell">{ticket.id}</td>
                  <td>
                    <div className="org-ticket-user-cell">
                      <span className="org-ticket-user-name">{ticket.raisedBy}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`org-ticket-user-type-badge org-ticket-user-type-${ticket.userType}`}>
                      {ticket.userType === 'mentor' ? (
                        <><i className="fas fa-chalkboard-teacher"></i> Mentor</>
                      ) : (
                        <><i className="fas fa-user-graduate"></i> Mentee</>
                      )}
                    </span>
                  </td>
                  <td className="org-ticket-subject-cell">{ticket.subject}</td>
                  <td className="org-ticket-description-cell">{ticket.description}</td>
                  <td>
                    <span className={`org-ticket-status-badge org-ticket-status-${ticket.status}`}>
                      {ticket.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <span className={`org-ticket-priority-badge org-ticket-priority-${ticket.priority}`}>
                      {ticket.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="org-ticket-time-cell">{ticket.createdAt}</td>
                  <td className="org-ticket-time-cell">{ticket.lastUpdated}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgTicketRaised;

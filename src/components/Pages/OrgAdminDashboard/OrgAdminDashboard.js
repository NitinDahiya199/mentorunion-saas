import React from 'react';
import { useApp } from '../../../context/AppContext';
import './OrgAdminDashboard.css';

const OrgAdminDashboard = () => {
  const { navigateToPage } = useApp();

  const summaryCards = [
    { label: 'PROGRAMS', value: '1', color: 'orange' },
    { label: 'MENTORS', value: '1', color: 'default' },
    { label: 'MENTEES', value: '1', color: 'default' },
    { label: 'SESSIONS', value: '2', color: 'default' }
  ];

  const dataReports = [
    { label: 'Open Slots', value: 12 },
    { label: 'Used Slots', value: 8 },
    { label: 'Completed Sessions', value: 6 },
    { label: 'Rescheduled', value: 1 },
    { label: 'Cancelled', value: 1 },
    { label: 'No Shows', value: 0 }
  ];

  const callRecordsOverview = [
    { label: 'All Calls', value: 6, download: true },
    { label: 'Upcoming Calls', value: 2, download: false },
    { label: 'Ongoing Calls', value: 0, download: false },
    { label: 'Past Calls', value: 4, download: false }
  ];

  const agendaCallRecords = [
    { agenda: 'ML Basics', totalCalls: 2 },
    { agenda: 'Python Fundamentals', totalCalls: 1 },
    { agenda: 'Career Planning', totalCalls: 3 }
  ];

  const domainCallRecords = [
    { domain: 'Technology', totalCalls: 4 },
    { domain: 'Career Growth', totalCalls: 2 }
  ];

  const mentorEarnings = [
    { label: 'Earnings per Hour', value: '$45' },
    { label: 'Earnings per Call', value: '$42.50' }
  ];

  const newUsers = [
    { label: 'Mentors Added', value: 1 },
    { label: 'Mentees Added', value: 1 }
  ];

  const upcomingSessions = [
    {
      agenda: 'ML Basics',
      date: '2025-02-17',
      time: '10:00 AM',
      status: 'SCHEDULED',
      statusColor: 'blue'
    }
  ];

  const quickActions = [
    { label: '+ Book a Session', icon: 'fa-plus', page: 'session-booking' },
    { label: 'Manage Mentors', icon: 'fa-users', page: 'mentors' },
    { label: 'Manage Mentees', icon: 'fa-user-graduate', page: 'mentees' },
    { label: 'Manage Programs', icon: 'fa-th', page: 'programs' },
    { label: 'Call Records', icon: 'fa-phone-alt', page: 'org-call-records' }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="org-admin-dashboard">
      <h1 className="org-dashboard-title">Organisation Dashboard</h1>
      <p className="org-dashboard-subtitle">Intelligence and operational control center for your organization</p>

      <div className="org-summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className={`org-summary-card ${card.color === 'orange' ? 'org-card-orange' : ''}`}>
            <div className="org-card-label">{card.label}</div>
            <div className={`org-card-value ${card.color === 'orange' ? 'org-value-orange' : ''}`}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <section className="org-dashboard-block">
        <h2 className="org-dashboard-block-title">Data Reports</h2>
        <p className="org-dashboard-block-desc">Real-time operational health metrics of session activity</p>
        <div className="org-data-reports-grid">
          {dataReports.map((item, index) => (
            <div key={index} className="org-data-report-item">
              <span className="org-data-report-label">{item.label}</span>
              <span className="org-data-report-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="org-dashboard-block">
        <div className="org-dashboard-block-header">
          <div>
            <h2 className="org-dashboard-block-title">Call Records Overview</h2>
            <p className="org-dashboard-block-desc">All, Upcoming, Ongoing, Past. Download available for All.</p>
          </div>
          <button className="org-dashboard-download-btn" onClick={() => navigateToPage('org-call-records')}>
            <i className="fas fa-download"></i> Download All
          </button>
        </div>
        <div className="org-call-overview-grid">
          {callRecordsOverview.map((item, index) => (
            <div key={index} className="org-call-overview-item">
              <span className="org-call-overview-label">{item.label}</span>
              <span className="org-call-overview-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="org-dashboard-two-col">
        <section className="org-dashboard-block org-dashboard-half">
          <h2 className="org-dashboard-block-title">Agenda-Based Call Records</h2>
          <div className="org-dashboard-mini-table-wrap">
            <table className="org-dashboard-mini-table">
              <thead>
                <tr>
                  <th>Agenda Title</th>
                  <th>Total Calls</th>
                </tr>
              </thead>
              <tbody>
                {agendaCallRecords.map((row, i) => (
                  <tr key={i}>
                    <td>{row.agenda}</td>
                    <td>{row.totalCalls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="org-dashboard-block org-dashboard-half">
          <h2 className="org-dashboard-block-title">Domain-Based Call Records</h2>
          <div className="org-dashboard-mini-table-wrap">
            <table className="org-dashboard-mini-table">
              <thead>
                <tr>
                  <th>Domain Name</th>
                  <th>Total Calls</th>
                </tr>
              </thead>
              <tbody>
                {domainCallRecords.map((row, i) => (
                  <tr key={i}>
                    <td>{row.domain}</td>
                    <td>{row.totalCalls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="org-dashboard-two-col">
        <section className="org-dashboard-block org-dashboard-half">
          <h2 className="org-dashboard-block-title">Mentor Earnings Overview</h2>
          <div className="org-earnings-grid">
            {mentorEarnings.map((item, i) => (
              <div key={i} className="org-earnings-item">
                <span className="org-earnings-label">{item.label}</span>
                <span className="org-earnings-value">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="org-dashboard-block org-dashboard-half">
          <h2 className="org-dashboard-block-title">New Users Added</h2>
          <div className="org-new-users-grid">
            {newUsers.map((item, i) => (
              <div key={i} className="org-new-users-item">
                <span className="org-new-users-label">{item.label}</span>
                <span className="org-new-users-value">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="org-dashboard-content">
        <div className="org-dashboard-section">
          <h2 className="org-section-title">Upcoming Sessions</h2>
          <div className="org-upcoming-sessions">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="org-session-item">
                <div className="org-session-info">
                  <div className="org-session-agenda">{session.agenda}</div>
                  <div className="org-session-date">
                    {formatDate(session.date)} at {session.time}
                  </div>
                </div>
                <span className={`org-status-badge org-status-${session.statusColor}`}>
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="org-dashboard-section">
          <h2 className="org-section-title">Quick Actions</h2>
          <div className="org-quick-actions">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="org-action-btn"
                onClick={() => navigateToPage(action.page)}
              >
                <i className={`fas ${action.icon}`}></i>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgAdminDashboard;

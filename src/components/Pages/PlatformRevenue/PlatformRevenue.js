import React from 'react';
import './PlatformRevenue.css';

const PlatformRevenue = () => {
  const summaryCards = [
    { label: 'TOTAL REVENUE', value: '$50', color: 'purple' },
    { label: 'PLATFORM FEES EARNED', value: '$8', color: 'green' },
    { label: 'MENTOR PAYOUTS', value: '$43', color: 'purple' }
  ];

  const transactions = [
    {
      session: '#S-1',
      amount: '$50',
      platformFee: '$7.5',
      mentorPayout: '$42.5',
      status: 'PAID',
      statusColor: 'green'
    },
    {
      session: '#S-2',
      amount: '—',
      platformFee: '—',
      mentorPayout: '—',
      status: 'PENDING',
      statusColor: 'orange'
    }
  ];

  return (
    <div className="platform-revenue-page">
      <h1 className="platform-revenue-title">Platform Revenue</h1>

      <div className="platform-revenue-summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className={`platform-revenue-summary-card ${card.color === 'purple' ? 'platform-revenue-card-purple' : ''} ${card.color === 'green' ? 'platform-revenue-card-green' : ''}`}>
            <div className="platform-revenue-card-label">{card.label}</div>
            <div className={`platform-revenue-card-value ${card.color === 'purple' ? 'platform-revenue-value-purple' : ''} ${card.color === 'green' ? 'platform-revenue-value-green' : ''}`}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <div className="platform-revenue-transactions">
        <h2 className="platform-revenue-section-title">Transaction History (Read-Only)</h2>
        <div className="platform-revenue-table-container">
          <table className="platform-revenue-table">
            <thead>
              <tr>
                <th>SESSION</th>
                <th>AMOUNT</th>
                <th>PLATFORM FEE</th>
                <th>MENTOR PAYOUT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="revenue-session">{transaction.session}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.platformFee}</td>
                  <td>{transaction.mentorPayout}</td>
                  <td>
                    <span className={`revenue-status-badge revenue-status-${transaction.statusColor}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlatformRevenue;

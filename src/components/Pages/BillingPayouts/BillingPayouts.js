import React from 'react';
import './BillingPayouts.css';

const BillingPayouts = () => {
  const summaryCards = [
    { label: 'TOTAL BILLED', value: '$50', color: 'orange' },
    { label: 'MENTOR PAYOUTS', value: '$43', color: 'default' },
    { label: 'PLATFORM FEES', value: '$8', color: 'default', subtitle: '15% per session' }
  ];

  const transactions = [
    {
      session: '#1',
      agenda: 'Python Fundamentals',
      billed: '$50',
      fee: '$7.5',
      payout: '$42.5',
      status: 'PAID',
      statusColor: 'green'
    },
    {
      session: '#2',
      agenda: 'ML Basics',
      billed: '—',
      fee: '—',
      payout: '—',
      status: 'PEND',
      statusColor: 'orange'
    }
  ];

  return (
    <div className="billing-payouts-page">
      <h1 className="billing-title">Billing & Payouts</h1>

      <div className="billing-summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className={`billing-summary-card ${card.color === 'orange' ? 'billing-card-orange' : ''}`}>
            <div className="billing-card-label">{card.label}</div>
            <div className={`billing-card-value ${card.color === 'orange' ? 'billing-value-orange' : ''}`}>
              {card.value}
            </div>
            {card.subtitle && (
              <div className="billing-card-subtitle">{card.subtitle}</div>
            )}
          </div>
        ))}
      </div>

      <div className="billing-transactions">
        <h2 className="billing-section-title">Transaction History</h2>
        <div className="billing-table-container">
          <table className="billing-table">
            <thead>
              <tr>
                <th>SESSION</th>
                <th>AGENDA</th>
                <th>BILLED</th>
                <th>FEE</th>
                <th>PAYOUT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="transaction-session">{transaction.session}</td>
                  <td className="transaction-agenda">{transaction.agenda}</td>
                  <td>{transaction.billed}</td>
                  <td>{transaction.fee}</td>
                  <td>{transaction.payout}</td>
                  <td>
                    <span className={`transaction-status-badge transaction-status-${transaction.statusColor}`}>
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

export default BillingPayouts;

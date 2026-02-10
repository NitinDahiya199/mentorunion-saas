import React from 'react';
import { useApp } from '../../../context/AppContext';
import './Programs.css';

const Programs = () => {
  const { showNotification } = useApp();

  const programs = [
    {
      id: 1,
      name: 'Data Science Bootcamp',
      status: 'ACTIVE',
      mentors: 3,
      mentees: 12,
      price: '$50',
      agendas: ['PYTHON FUNDAMENTALS', 'ML BASICS', 'DEEP LEARNING', 'CAPSTONE PROJECT']
    }
  ];

  const handleCreateProgram = () => {
    showNotification('Create Program functionality would open a modal here.');
  };

  return (
    <div className="programs-page">
      <div className="programs-header">
        <div>
          <h1 className="programs-title">Programs</h1>
          <p className="programs-subtitle">Create and manage mentoring programs</p>
        </div>
        <button className="programs-create-btn" onClick={handleCreateProgram}>
          <i className="fas fa-plus"></i> Create Program
        </button>
      </div>

      <div className="programs-list">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-card-header">
              <h2 className="program-name">{program.name}</h2>
              <span className="program-status-badge program-status-active">
                {program.status}
              </span>
            </div>
            <div className="program-metrics">
              <div className="program-metric">
                <div className="program-metric-value">{program.mentors}</div>
                <div className="program-metric-label">MENTORS</div>
              </div>
              <div className="program-metric">
                <div className="program-metric-value">{program.mentees}</div>
                <div className="program-metric-label">MENTEES</div>
              </div>
              <div className="program-metric">
                <div className="program-metric-value">{program.price}</div>
                <div className="program-metric-label">PER SESSION</div>
              </div>
            </div>
            <div className="program-agendas">
              <div className="program-agendas-label">Agendas</div>
              <div className="program-agendas-tags">
                {program.agendas.map((agenda, index) => (
                  <span key={index} className="program-agenda-tag">
                    {agenda}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

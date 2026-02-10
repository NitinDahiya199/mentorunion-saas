import React from 'react';
import { useApp } from '../../../context/AppContext';
import './Mentors.css';

const Mentors = () => {
  const { showNotification } = useApp();

  const mentors = [
    {
      id: 1,
      name: 'Dr. Arun Patel',
      email: 'arun@example.com',
      programs: ['DATA SCIENCE BOOTCAMP'],
      programsCount: 1,
      maxPrograms: 2,
      sessions: 18,
      rating: 4.8,
      status: 'ACTIVE'
    }
  ];

  const handleAddMentor = () => {
    showNotification('Add Mentor functionality would open a modal here.');
  };

  return (
    <div className="mentors-page">
      <div className="mentors-header">
        <div>
          <h1 className="mentors-title">Mentors</h1>
          <p className="mentors-subtitle">Mentors can be assigned to a maximum of 2 programs.</p>
        </div>
        <button className="mentors-add-btn" onClick={handleAddMentor}>
          <i className="fas fa-plus"></i> Add Mentor
        </button>
      </div>

      <div className="mentors-table-container">
        <table className="mentors-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PROGRAMS</th>
              <th>SESSIONS</th>
              <th>RATING</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor) => (
              <tr key={mentor.id}>
                <td className="mentor-name-cell">
                  <strong>{mentor.name}</strong>
                </td>
                <td>{mentor.email}</td>
                <td>
                  <div className="mentor-programs">
                    {mentor.programs.map((program, index) => (
                      <span key={index} className="mentor-program-tag">
                        {program}
                      </span>
                    ))}
                    <span className="mentor-program-slots">
                      ({mentor.programsCount} slot available)
                    </span>
                  </div>
                </td>
                <td>{mentor.sessions}</td>
                <td>
                  <div className="mentor-rating">
                    <i className="fas fa-star"></i> {mentor.rating}
                  </div>
                </td>
                <td>
                  <span className="mentor-status-badge mentor-status-active">
                    {mentor.status}
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

export default Mentors;

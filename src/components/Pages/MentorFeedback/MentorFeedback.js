import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './MentorFeedback.css';

const MentorFeedback = () => {
  const { showNotification, navigateToPage } = useApp();
  const [rating, setRating] = useState(4);
  const [comments, setComments] = useState('');

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('Feedback submitted successfully! Thank you for your input.');
    setComments('');
    navigateToPage('mentor-dashboard');
  };

  return (
    <div className="mentor-feedback-page">
      <div className="mentor-feedback-container">
        <div className="mentor-feedback-card">
          <h1 className="mentor-feedback-title">Session Feedback</h1>
          <p className="mentor-feedback-subtitle">Submit Feedback for Session #1</p>

          <form onSubmit={handleSubmit} className="mentor-feedback-form">
            <div className="mentor-feedback-section">
              <label className="mentor-feedback-label">Rating</label>
              <div className="mentor-feedback-stars">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className="mentor-star-button"
                    onClick={() => handleStarClick(value)}
                    aria-label={`Rate ${value} stars`}
                  >
                    <i 
                      className={`fas fa-star ${value <= rating ? 'mentor-star-filled' : 'mentor-star-empty'}`}
                    ></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="mentor-feedback-section">
              <label className="mentor-feedback-label">Comments</label>
              <textarea
                className="mentor-feedback-textarea"
                placeholder="Share your experience..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={6}
              />
            </div>

            <button type="submit" className="mentor-feedback-submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorFeedback;

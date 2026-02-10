import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './MenteeFeedback.css';

const MenteeFeedback = () => {
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
    navigateToPage('mentee-dashboard');
  };

  return (
    <div className="mentee-feedback-page">
      <div className="mentee-feedback-container">
        <div className="mentee-feedback-card">
          <h1 className="mentee-feedback-title">Session Feedback</h1>
          <p className="mentee-feedback-subtitle">Submit Feedback for Session #1</p>

          <form onSubmit={handleSubmit} className="mentee-feedback-form">
            <div className="mentee-feedback-section">
              <label className="mentee-feedback-label">Rating</label>
              <div className="mentee-feedback-stars">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className="mentee-star-button"
                    onClick={() => handleStarClick(value)}
                    aria-label={`Rate ${value} stars`}
                  >
                    <i 
                      className={`fas fa-star ${value <= rating ? 'mentee-star-filled' : 'mentee-star-empty'}`}
                    ></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="mentee-feedback-section">
              <label className="mentee-feedback-label">Comments</label>
              <textarea
                className="mentee-feedback-textarea"
                placeholder="Share your experience..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={6}
              />
            </div>

            <button type="submit" className="mentee-feedback-submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenteeFeedback;

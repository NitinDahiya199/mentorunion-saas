import React, { useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import './JoinCall.css';

const JoinCall = () => {
  const { callTimer, startCallTimer, stopCallTimer, openModal } = useApp();

  useEffect(() => {
    startCallTimer();
    return () => {
      stopCallTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    stopCallTimer();
    openModal('sessionOutcome');
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-title">
          <h1>Join Call <span className="role-indicator indicator-mentor">Mentor</span></h1>
          <p>Session with Alex Thompson • Career Coaching</p>
        </div>
        <div>
          <span className="status-badge status-live">LIVE NOW</span>
        </div>
      </div>

      <div className="call-container">
        <div className="call-header">
          <h2>Career Coaching Session</h2>
          <p>Scheduled for Today, 10:00 AM • Session ID: MU-2023-11-14-001</p>
        </div>
        
        <div className="call-participants">
          <div className="participant mentor">
            <div className="participant-avatar">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Dr. Sarah Johnson</h3>
            <p>Mentor (You)</p>
          </div>
          
          <div className="participant mentee">
            <div className="participant-avatar">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3>Alex Thompson</h3>
            <p>Mentee</p>
          </div>
        </div>
        
        <div className="call-timer">{formatTimer(callTimer)}</div>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--surface-dark)', padding: '20px', borderRadius: 'var(--border-radius-sm)', marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '15px' }}>Session Agenda</h3>
          <ul style={{ marginLeft: '20px' }}>
            <li>Career progression discussion (20 min)</li>
            <li>Skill gap analysis (15 min)</li>
            <li>Action plan development (20 min)</li>
            <li>Q&A (5 min)</li>
          </ul>
        </div>
        
        <div className="call-controls">
          <button className="call-btn">
            <i className="fas fa-microphone"></i>
          </button>
          <button className="call-btn">
            <i className="fas fa-video"></i>
          </button>
          <button className="call-btn end-call" onClick={handleEndCall}>
            <i className="fas fa-phone-slash"></i>
          </button>
          <button className="call-btn" style={{ background: 'var(--mentorunion-teal)', color: 'white' }}>
            <i className="fas fa-share-square"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCall;

import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './MentorJoinCall.css';

const MentorJoinCall = () => {
  const { navigateToPage } = useApp();
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinCall = () => {
    setIsJoining(true);
    // In a real app, this would initiate the video call
    setTimeout(() => {
      // Navigate to actual call interface or open video call
      console.log('Joining call...');
    }, 500);
  };

  return (
    <div className="mentor-call-room">
      <div className="mentor-call-room-main">
        <div className="mentor-call-room-content">
          <h1 className="mentor-call-room-title">Call Room</h1>
          <div className="mentor-call-icon">
            <i className="fas fa-video"></i>
          </div>
          <h2 className="mentor-call-ready">Ready to Join</h2>
          <p className="mentor-call-instruction">
            Your session is about to begin. Click below to join the video call.
          </p>
          <button 
            className="mentor-join-call-button"
            onClick={handleJoinCall}
            disabled={isJoining}
          >
            <i className="fas fa-video"></i>
            Join Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorJoinCall;

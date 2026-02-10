import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { VideoIcon } from '../../Icons/SVGs';
import './MenteeJoinCall.css';

const MenteeJoinCall = () => {
  const { navigateToPage } = useApp();
  const [isJoining, setIsJoining] = useState(false);

  const sessions = [
    {
      id: 1,
      title: 'Python Fundamentals',
      mentor: 'Dr. Arun Patel',
      date: '2025-07-10',
      time: '10:00 AM'
    },
    {
      id: 2,
      title: 'ML Basics',
      mentor: 'Dr. Arun Patel',
      date: '2025-02-17',
      time: '10:00 AM'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
  };

  const handleJoinCall = () => {
    setIsJoining(true);
    // In a real app, this would initiate the video call
    setTimeout(() => {
      // Navigate to actual call interface or open video call
      console.log('Joining call...');
    }, 500);
  };

  return (
    <div className="mentee-call-room">
      <div className="mentee-call-room-main">
        <div className="mentee-call-room-content">
          <div className="mentee-call-icon">
            <VideoIcon size={64} color="var(--mentorunion-purple)" />
          </div>
          <h2 className="mentee-call-ready">Ready to Join</h2>
          <p className="mentee-call-instruction">
            Your session is about to begin. Click below to join the video call.
          </p>
          <button 
            className="mentee-join-call-button"
            onClick={handleJoinCall}
            disabled={isJoining}
          >
            <VideoIcon size={20} color="white" />
            Join Call
          </button>
        </div>
      </div>

      <div className="mentee-call-sidebar">
        <h3 className="mentee-sidebar-title">My Sessions</h3>
        <div className="mentee-sidebar-sessions">
          {sessions.map((session) => (
            <div key={session.id} className="mentee-sidebar-session-item">
              <h4 className="mentee-sidebar-session-title">{session.title}</h4>
              <p className="mentee-sidebar-session-mentor">Mentor: {session.mentor}</p>
              <p className="mentee-sidebar-session-date">
                {formatDate(session.date)} at {session.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenteeJoinCall;

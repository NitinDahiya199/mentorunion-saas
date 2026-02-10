import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './PlatformFeatures.css';

const PlatformFeatures = () => {
  const { showNotification } = useApp();
  const [features, setFeatures] = useState({
    video: true,
    chat: true,
    feedback: true,
    analytics: true,
    recording: false,
    aiMatching: false
  });

  const featureList = [
    {
      id: 'video',
      name: 'Video',
      description: 'Available to all organisations',
      enabled: features.video
    },
    {
      id: 'chat',
      name: 'Chat',
      description: 'Available to all organisations',
      enabled: features.chat
    },
    {
      id: 'feedback',
      name: 'Feedback',
      description: 'Available to all organisations',
      enabled: features.feedback
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Available to all organisations',
      enabled: features.analytics
    },
    {
      id: 'recording',
      name: 'Recording',
      description: 'Disabled platform-wide',
      enabled: features.recording
    },
    {
      id: 'aiMatching',
      name: 'AI Matching',
      description: 'Disabled platform-wide',
      enabled: features.aiMatching
    }
  ];

  const handleToggle = (featureId) => {
    setFeatures(prev => {
      const newState = { ...prev, [featureId]: !prev[featureId] };
      showNotification(`${featureList.find(f => f.id === featureId)?.name} ${newState[featureId] ? 'enabled' : 'disabled'}`);
      return newState;
    });
  };

  return (
    <div className="platform-features-page">
      <div className="platform-features-header">
        <h1 className="platform-features-title">Platform Features</h1>
        <p className="platform-features-subtitle">
          Enable or disable features across the entire platform.
        </p>
      </div>

      <div className="platform-features-grid">
        {featureList.map((feature) => (
          <div
            key={feature.id}
            className={`platform-feature-card ${feature.enabled ? 'feature-enabled' : 'feature-disabled'}`}
          >
            <div className="platform-feature-header">
              <h3 className="platform-feature-name">{feature.name}</h3>
              <label className="platform-feature-toggle">
                <input
                  type="checkbox"
                  checked={feature.enabled}
                  onChange={() => handleToggle(feature.id)}
                />
                <span className={`platform-toggle-slider ${feature.enabled ? 'enabled' : 'disabled'}`}></span>
              </label>
            </div>
            <p className="platform-feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformFeatures;

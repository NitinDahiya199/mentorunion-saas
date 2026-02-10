import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './MentorAvailability.css';

const MentorAvailability = () => {
  const { showNotification } = useApp();
  const [selectedSlots, setSelectedSlots] = useState(new Set(['Mon-9-11', 'Wed-14-16', 'Fri-9-11']));
  const [activeSlots, setActiveSlots] = useState(['Mon 10-12', 'Wed 14-16', 'Fri 10-12']);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const timeSlots = [
    { label: '9-11 AM', value: '9-11' },
    { label: '2-4 PM', value: '14-16' }
  ];

  const handleSlotClick = (day, slotValue) => {
    const slotKey = `${day}-${slotValue}`;
    setSelectedSlots(prev => {
      const newSet = new Set(prev);
      if (newSet.has(slotKey)) {
        newSet.delete(slotKey);
      } else {
        newSet.add(slotKey);
      }
      return newSet;
    });
  };

  const handleSave = () => {
    // Update active slots based on selected slots
    const newActiveSlots = Array.from(selectedSlots).map(slot => {
      const [day, time] = slot.split('-');
      const timeLabel = time === '9-11' ? '10-12' : '14-16';
      return `${day} ${timeLabel}`;
    });
    setActiveSlots(newActiveSlots);
    showNotification('Availability saved successfully!');
  };

  return (
    <div className="mentor-availability-page">
      <div className="mentor-availability-container">
        <h1 className="mentor-availability-title">Set Availability</h1>

        <div className="mentor-availability-section">
          <h2 className="mentor-section-title">Current Availability</h2>
          <div className="mentor-active-slots">
            {activeSlots.map((slot, index) => (
              <div key={index} className="mentor-active-slot-card">
                <span className="mentor-slot-time">{slot}</span>
                <span className="mentor-active-badge">ACTIVE</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mentor-availability-section">
          <h2 className="mentor-section-title">Select Availability</h2>
          <div className="mentor-availability-grid">
            {days.map((day) => (
              <div key={day} className="mentor-day-card">
                <h3 className="mentor-day-name">{day}</h3>
                <div className="mentor-time-slots">
                  {timeSlots.map((slot) => {
                    const slotKey = `${day}-${slot.value}`;
                    const isSelected = selectedSlots.has(slotKey);
                    return (
                      <button
                        key={slot.value}
                        className={`mentor-time-slot-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSlotClick(day, slot.value)}
                      >
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mentor-save-availability-btn" onClick={handleSave}>
          Save Availability
        </button>
      </div>
    </div>
  );
};

export default MentorAvailability;

import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import './SessionBooking.css';

const SessionBooking = () => {
  const { bookingData, setBookingData, navigateToPage, showNotification, setSessionStatus } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedMentee, setSelectedMentee] = useState(null);

  const programs = [
    {
      id: 1,
      name: 'Data Science Bootcamp',
      price: '$50',
      mentors: 3,
      mentees: 12
    }
  ];

  const mentors = [
    { uid: 'UID002', name: 'Dr. Arun Patel', specialization: 'Data Science, ML', programs: ['Data Science Bootcamp'], rating: '★★★★★ (4.8)', maxPrograms: 2 }
  ];

  const mentees = [
    { uid: 'UID008', name: 'Riya Kapoor', program: 'Data Science Bootcamp', status: 'Active', sessions: 6, credit: 8 }
  ];

  const steps = [
    { number: 1, label: 'SELECT PROGRAM' },
    { number: 2, label: 'SELECT MENTOR' },
    { number: 3, label: 'SELECT MENTEE' },
    { number: 4, label: 'CHOOSE SLOT' },
    { number: 5, label: 'CHECK CREDITS' },
    { number: 6, label: 'CONFIRM' }
  ];

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setBookingData({ ...bookingData, program: program.name });
    setCurrentStep(2);
  };

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor.name);
    setBookingData({ ...bookingData, mentor: mentor.name });
    setCurrentStep(3);
  };

  const handleMenteeSelect = (mentee) => {
    if (mentee.program !== selectedProgram?.name) return;
    setSelectedMentee(mentee.name);
    setBookingData({ ...bookingData, mentee: mentee.name });
    setCurrentStep(4);
  };

  const handleConfirmBooking = () => {
    setSessionStatus('scheduled');
    showNotification('Session booked successfully!');
    navigateToPage('sessions');
  };

  return (
    <div className="session-booking-page">
      <div className="session-booking-header">
        <h1 className="session-booking-title">Book a Session</h1>
        <p className="session-booking-subtitle">Step-by-step session booking</p>
      </div>

      <div className="session-booking-progress">
        {steps.map((step) => (
          <div key={step.number} className="session-booking-step">
            <div className={`session-step-line ${step.number < currentStep ? 'completed' : ''} ${step.number === currentStep ? 'active' : ''}`}></div>
            <div className={`session-step-label ${step.number <= currentStep ? 'active' : ''}`}>
              {step.label}
            </div>
          </div>
        ))}
      </div>

      <div className="session-booking-content">
        {currentStep === 1 && (
          <div className="session-booking-step-content">
            <h2 className="session-step-title">Step 1: Select Program</h2>
            <div className="session-programs-list">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className={`session-program-card ${selectedProgram?.id === program.id ? 'selected' : ''}`}
                  onClick={() => handleProgramSelect(program)}
                >
                  <h3 className="session-program-name">{program.name}</h3>
                  <p className="session-program-details">
                    {program.price}/session · {program.mentors} mentors · {program.mentees} mentees
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="session-booking-step-content">
            <h2 className="session-step-title">Step 2: Select Mentor</h2>
            <div className="session-mentors-list">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className={`session-mentor-card ${selectedMentor === mentor.name ? 'selected' : ''}`}
                  onClick={() => handleMentorSelect(mentor)}
                >
                  <span className="session-card-uid">{mentor.uid}</span>
                  <h3 className="session-mentor-name">{mentor.name}</h3>
                  <p className="session-mentor-details">{mentor.specialization}</p>
                  <p className="session-mentor-rating">{mentor.rating}</p>
                </div>
              ))}
            </div>
            <button className="session-back-btn" onClick={() => setCurrentStep(1)}>
              ← Back
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="session-booking-step-content">
            <h2 className="session-step-title">Step 3: Select Mentee</h2>
            <div className="session-mentees-list">
              {mentees.map((mentee, index) => (
                <div
                  key={index}
                  className={`session-mentee-card ${selectedMentee === mentee.name ? 'selected' : ''}`}
                  onClick={() => handleMenteeSelect(mentee)}
                >
                  <span className="session-card-uid">{mentee.uid}</span>
                  <h3 className="session-mentee-name">{mentee.name}</h3>
                  <p className="session-mentee-details">Program: {mentee.program}</p>
                  <p className="session-mentee-credits">Credits: {mentee.credit}</p>
                </div>
              ))}
            </div>
            <button className="session-back-btn" onClick={() => setCurrentStep(2)}>
              ← Back
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="session-booking-step-content">
            <h2 className="session-step-title">Step 4: Choose Slot</h2>
            <p className="session-step-description">Select a time slot for the session</p>
            <button className="session-next-btn" onClick={() => setCurrentStep(5)}>
              Continue →
            </button>
            <button className="session-back-btn" onClick={() => setCurrentStep(3)}>
              ← Back
            </button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="session-booking-step-content">
            <h2 className="session-step-title">Step 5: Check Credits</h2>
            <div className="session-credits-check">
              <p>Mentee: {selectedMentee}</p>
              <p>Available Credits: 8</p>
              <p>Session Cost: $50</p>
            </div>
            <button className="session-next-btn" onClick={() => setCurrentStep(6)}>
              Continue →
            </button>
            <button className="session-back-btn" onClick={() => setCurrentStep(4)}>
              ← Back
            </button>
          </div>
        )}

        {currentStep === 6 && (
          <div className="session-booking-step-content">
            <h2 className="session-step-title">Step 6: Confirm</h2>
            <div className="session-confirmation-details">
              <p><strong>Program:</strong> {selectedProgram?.name}</p>
              <p><strong>Mentor:</strong> {selectedMentor}</p>
              <p><strong>Mentee:</strong> {selectedMentee}</p>
              <p><strong>Cost:</strong> $50</p>
            </div>
            <button className="session-confirm-btn" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
            <button className="session-back-btn" onClick={() => setCurrentStep(5)}>
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionBooking;

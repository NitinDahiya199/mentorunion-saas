import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Role Configuration
export const roles = {
  'super-admin': {
    name: 'Super Admin',
    roleText: 'System Owner',
    avatarText: 'SA'
  },
  'platform-admin': {
    name: 'Platform Admin',
    roleText: 'Platform Operations',
    avatarText: 'PA'
  },
  'org-admin': {
    name: 'Organisation Admin',
    roleText: 'TechMentor Inc.',
    avatarText: 'OA'
  },
  'mentor': {
    name: 'Dr. Sarah Johnson',
    roleText: 'Mentor',
    avatarText: 'SJ'
  },
  'mentee': {
    name: 'Alex Thompson',
    roleText: 'Mentee',
    avatarText: 'AT'
  }
};

export const AppProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState('super-admin');
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // Set default page based on role
  useEffect(() => {
    if (currentRole === 'mentee') {
      setCurrentPage('mentee-dashboard');
    } else if (currentRole === 'mentor') {
      setCurrentPage('mentor-dashboard');
    } else if (currentRole === 'super-admin') {
      setCurrentPage('session-rules');
    } else if (currentRole === 'org-admin') {
      setCurrentPage('org-dashboard');
    } else if (currentRole === 'platform-admin') {
      setCurrentPage('platform-dashboard');
    }
  }, [currentRole]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [bookingData, setBookingData] = useState({
    program: 'Career Coaching',
    mentor: null,
    mentee: null,
    time: null
  });
  const [sessionStatus, setSessionStatus] = useState('scheduled');
  const [callTimer, setCallTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [modals, setModals] = useState({
    createOrg: false,
    sessionOutcome: false
  });

  // Switch role
  const switchRole = (role) => {
    setCurrentRole(role);
    setCurrentPage('dashboard');
  };

  // Navigate to page
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Show notification
  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 90px;
      right: 20px;
      background: var(--mentorunion-blue);
      color: white;
      padding: 12px 20px;
      border-radius: var(--border-radius-sm);
      box-shadow: var(--shadow-lg);
      z-index: 1000;
      font-weight: 500;
      max-width: 350px;
      animation: slideIn 0.3s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  // Open/Close modals
  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
  };

  // Start call timer
  const startCallTimer = () => {
    setCallTimer(765); // 12:45 in seconds
    
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    const interval = setInterval(() => {
      setCallTimer(prev => prev + 1);
    }, 1000);
    
    setTimerInterval(interval);
  };

  // Stop call timer
  const stopCallTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const value = {
    currentRole,
    currentPage,
    sidebarCollapsed,
    bookingData,
    sessionStatus,
    callTimer,
    modals,
    switchRole,
    navigateToPage,
    toggleSidebar,
    showNotification,
    openModal,
    closeModal,
    startCallTimer,
    stopCallTimer,
    setBookingData,
    setSessionStatus
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

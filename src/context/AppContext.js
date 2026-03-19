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
  
  // Organizations for mentor with their data
  const [mentorOrganizations] = useState([
    { 
      id: 1, 
      name: 'TechMentor Inc.', 
      icon: 'fa-building',
      sessions: [
        {
          id: 1,
          title: 'Python Fundamentals',
          mentee: 'Riya Kapoor',
          date: '2025-02-10',
          time: '10:00 AM',
          status: 'COMPLETED',
          statusColor: 'green'
        },
        {
          id: 2,
          title: 'ML Basics',
          mentee: 'Riya Kapoor',
          date: '2025-02-17',
          time: '10:00 AM',
          status: 'SCHEDULED',
          statusColor: 'blue'
        }
      ]
    },
    { 
      id: 2, 
      name: 'EduConnect Solutions', 
      icon: 'fa-graduation-cap',
      sessions: [
        {
          id: 3,
          title: 'Data Structures & Algorithms',
          mentee: 'Alex Chen',
          date: '2025-02-12',
          time: '2:00 PM',
          status: 'COMPLETED',
          statusColor: 'green'
        },
        {
          id: 4,
          title: 'System Design Basics',
          mentee: 'Priya Sharma',
          date: '2025-02-20',
          time: '3:00 PM',
          status: 'SCHEDULED',
          statusColor: 'blue'
        }
      ]
    },
    { 
      id: 3, 
      name: 'CareerBoost Academy', 
      icon: 'fa-chart-line',
      sessions: [
        {
          id: 5,
          title: 'Career Planning Session',
          mentee: 'Michael Brown',
          date: '2025-02-15',
          time: '11:00 AM',
          status: 'SCHEDULED',
          statusColor: 'blue'
        }
      ]
    }
  ]);
  const [selectedOrganization, setSelectedOrganization] = useState(mentorOrganizations[0]);
  
  // Organizations for Platform Admin with their data
  const [platformOrganizations] = useState([
    { 
      id: 1, 
      name: 'TechMentor Inc.', 
      icon: 'fa-building', 
      status: 'active',
      admin: 'Priya Sharma',
      email: 'priya@techmentor.com',
      mentors: 12,
      mentees: 48,
      modules: '4 enabled',
      totalSessions: 156,
      activeMentors: 10,
      revenue: '$12,450',
      recentActivity: [
        {
          type: 'success',
          message: 'TechMentor Inc. completed session #45',
          timestamp: '2 hours ago',
          color: 'green'
        },
        {
          type: 'info',
          message: 'New mentor joined TechMentor Inc.',
          timestamp: '1 day ago',
          color: 'purple'
        }
      ]
    },
    { 
      id: 2, 
      name: 'EduConnect Solutions', 
      icon: 'fa-graduation-cap', 
      status: 'active',
      admin: 'Raj Patel',
      email: 'raj@educonnect.com',
      mentors: 8,
      mentees: 32,
      modules: '3 enabled',
      totalSessions: 98,
      activeMentors: 7,
      revenue: '$8,200',
      recentActivity: [
        {
          type: 'success',
          message: 'EduConnect Solutions completed session #32',
          timestamp: '5 hours ago',
          color: 'green'
        },
        {
          type: 'info',
          message: 'EduConnect Solutions updated their programs',
          timestamp: '2 days ago',
          color: 'purple'
        }
      ]
    },
    { 
      id: 3, 
      name: 'CareerBoost Academy', 
      icon: 'fa-chart-line', 
      status: 'active',
      admin: 'Sarah Johnson',
      email: 'sarah@careerboost.com',
      mentors: 15,
      mentees: 65,
      modules: '5 enabled',
      totalSessions: 234,
      activeMentors: 12,
      revenue: '$18,900',
      recentActivity: [
        {
          type: 'success',
          message: 'CareerBoost Academy completed session #78',
          timestamp: '1 hour ago',
          color: 'green'
        },
        {
          type: 'warning',
          message: 'CareerBoost Academy payment pending',
          timestamp: '3 days ago',
          color: 'red'
        }
      ]
    },
    { 
      id: 4, 
      name: 'SkillUp Learning', 
      icon: 'fa-book', 
      status: 'active',
      admin: 'Michael Chen',
      email: 'michael@skillup.com',
      mentors: 6,
      mentees: 24,
      modules: '2 enabled',
      totalSessions: 67,
      activeMentors: 5,
      revenue: '$5,400',
      recentActivity: [
        {
          type: 'info',
          message: 'SkillUp Learning onboarded new mentees',
          timestamp: '4 hours ago',
          color: 'purple'
        }
      ]
    },
    { 
      id: 5, 
      name: 'MentorHub Pro', 
      icon: 'fa-users', 
      status: 'pending',
      admin: 'Lisa Anderson',
      email: 'lisa@mentorhub.com',
      mentors: 0,
      mentees: 0,
      modules: '0 enabled',
      totalSessions: 0,
      activeMentors: 0,
      revenue: '$0',
      recentActivity: [
        {
          type: 'info',
          message: 'MentorHub Pro registration pending approval',
          timestamp: '1 week ago',
          color: 'purple'
        }
      ]
    }
  ]);
  const [selectedPlatformOrganization, setSelectedPlatformOrganization] = useState(platformOrganizations[0]);
  
  // Set default page based on role
  useEffect(() => {
    if (currentRole === 'mentee') {
      setCurrentPage('mentee-dashboard');
    } else if (currentRole === 'mentor') {
      setCurrentPage('mentor-dashboard');
    } else if (currentRole === 'super-admin') {
      setCurrentPage('dashboard');
    } else if (currentRole === 'org-admin') {
      setCurrentPage('org-dashboard');
    } else if (currentRole === 'platform-admin') {
      setCurrentPage('platform-dashboard');
    }
  }, [currentRole]);
  
  // Initialize sidebar as collapsed on mobile
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 1200;
    }
    return false;
  });
  
  // Update sidebar state when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setSidebarCollapsed(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
    mentorOrganizations,
    selectedOrganization,
    setSelectedOrganization,
    platformOrganizations,
    selectedPlatformOrganization,
    setSelectedPlatformOrganization,
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

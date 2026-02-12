import React, { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const AppContent = () => {
  const { sidebarCollapsed, toggleSidebar } = useApp();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Close sidebar when clicking overlay on mobile
    const handleOverlayClick = (e) => {
      if (isMobile && !sidebarCollapsed && e.target.classList.contains('sidebar-overlay')) {
        toggleSidebar();
      }
    };

    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
      overlay.addEventListener('click', handleOverlayClick);
      return () => overlay.removeEventListener('click', handleOverlayClick);
    }
  }, [sidebarCollapsed, isMobile, toggleSidebar]);

  return (
    <div className="app-container">
      <Header />
      <div 
        className={`sidebar-overlay ${!sidebarCollapsed && isMobile ? 'active' : ''}`}
      />
      <Sidebar />
      <MainContent />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;

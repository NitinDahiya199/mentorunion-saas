import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;

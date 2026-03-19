import React from 'react';
import { useApp } from '../../context/AppContext';
import ArchitecturePage from '../Pages/ArchitecturePage/ArchitecturePage';
import CreateOrgModal from '../Modals/CreateOrgModal/CreateOrgModal';
import SessionOutcomeModal from '../Modals/SessionOutcomeModal/SessionOutcomeModal';
import './MainContent.css';

const MainContent = () => {
  const { currentRole, currentPage, modals, closeModal, switchRole, navigateToPage } = useApp();

  return (
    <main className={`main-content ${currentRole === 'mentee' ? 'mentee-main' : ''} ${currentRole === 'mentor' ? 'mentor-main' : ''} ${currentRole === 'sub-admin' ? 'sub-admin-main' : ''} ${currentRole === 'org-admin' ? 'org-admin-main' : ''} ${currentRole === 'platform-admin' ? 'platform-admin-main' : ''} ${currentRole === 'super-admin' ? 'super-admin-main' : ''}`}>
      <div className="mobile-role-switcher">
        <select
          className="mobile-role-select"
          value={currentRole}
          onChange={(e) => {
            switchRole(e.target.value);
          }}
        >
          <option value="super-admin">Super Admin</option>
          <option value="platform-admin">Platform Admin</option>
          <option value="org-admin">Organisation Admin</option>
          <option value="sub-admin">Sub Admin</option>
          <option value="mentor">Mentor</option>
          <option value="mentee">Mentee</option>
        </select>
      </div>

      <div id="pageContent">
        <ArchitecturePage
          roleId={currentRole}
          pageId={currentPage}
          onNavigate={navigateToPage}
        />
      </div>

      {/* Modals */}
      {modals.createOrg && (
        <CreateOrgModal onClose={() => closeModal('createOrg')} />
      )}
      {modals.sessionOutcome && (
        <SessionOutcomeModal onClose={() => closeModal('sessionOutcome')} />
      )}
    </main>
  );
};

export default MainContent;

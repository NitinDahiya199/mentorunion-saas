import React from 'react';
import { useApp } from '../../context/AppContext';
import SuperAdminDashboard from '../Pages/SuperAdminDashboard/SuperAdminDashboard';
import OrgAdminDashboard from '../Pages/OrgAdminDashboard/OrgAdminDashboard';
import PlatformAdminDashboard from '../Pages/PlatformAdminDashboard/PlatformAdminDashboard';
import SessionBooking from '../Pages/SessionBooking/SessionBooking';
import JoinCall from '../Pages/JoinCall/JoinCall';
import BillingPayouts from '../Pages/BillingPayouts/BillingPayouts';
import MenteeDashboard from '../Pages/MenteeDashboard/MenteeDashboard';
import MenteeJoinCall from '../Pages/MenteeJoinCall/MenteeJoinCall';
import MenteeFeedback from '../Pages/MenteeFeedback/MenteeFeedback';
import MentorDashboard from '../Pages/MentorDashboard/MentorDashboard';
import MentorAvailability from '../Pages/MentorAvailability/MentorAvailability';
import MentorJoinCall from '../Pages/MentorJoinCall/MentorJoinCall';
import MentorFeedback from '../Pages/MentorFeedback/MentorFeedback';
import Programs from '../Pages/Programs/Programs';
import Mentors from '../Pages/Mentors/Mentors';
import Mentees from '../Pages/Mentees/Mentees';
import Sessions from '../Pages/Sessions/Sessions';
import Support from '../Pages/Support/Support';
import Organisations from '../Pages/Organisations/Organisations';
import CallRecords from '../Pages/CallRecords/CallRecords';
import PlatformRevenue from '../Pages/PlatformRevenue/PlatformRevenue';
import SessionRules from '../Pages/SessionRules/SessionRules';
import BillingLogic from '../Pages/BillingLogic/BillingLogic';
import PlatformFeatures from '../Pages/PlatformFeatures/PlatformFeatures';
import CreateOrgModal from '../Modals/CreateOrgModal/CreateOrgModal';
import SessionOutcomeModal from '../Modals/SessionOutcomeModal/SessionOutcomeModal';
import './MainContent.css';

const MainContent = () => {
  const { currentRole, currentPage, modals, closeModal, switchRole } = useApp();

  const renderPage = () => {
    // Super Admin pages
    if (currentRole === 'super-admin') {
      switch (currentPage) {
        case 'dashboard':
          return <SuperAdminDashboard />;
        case 'session-rules':
          return <SessionRules />;
        case 'billing-logic':
          return <BillingLogic />;
        case 'platform-features':
          return <PlatformFeatures />;
        default:
          return <SessionRules />;
      }
    }

    // Platform Admin pages
    if (currentRole === 'platform-admin') {
      switch (currentPage) {
        case 'platform-dashboard':
          return <PlatformAdminDashboard />;
        case 'organisations':
          return <Organisations />;
        case 'call-records':
          return <CallRecords />;
        case 'platform-revenue':
          return <PlatformRevenue />;
        default:
          return <PlatformAdminDashboard />;
      }
    }

    // Org Admin pages
    if (currentRole === 'org-admin') {
      switch (currentPage) {
        case 'org-dashboard':
          return <OrgAdminDashboard />;
        case 'programs':
          return <Programs />;
        case 'mentors':
          return <Mentors />;
        case 'mentees':
          return <Mentees />;
        case 'sessions':
          return <Sessions />;
        case 'session-booking':
          return <SessionBooking />;
        case 'billing-payouts':
          return <BillingPayouts />;
        case 'support':
          return <Support />;
        default:
          return <OrgAdminDashboard />;
      }
    }

    // Mentor pages
    if (currentRole === 'mentor') {
      switch (currentPage) {
        case 'mentor-dashboard':
          return <MentorDashboard />;
        case 'mentor-availability':
          return <MentorAvailability />;
        case 'mentor-join-call':
          return <MentorJoinCall />;
        case 'mentor-submit-feedback':
          return <MentorFeedback />;
        case 'join-call':
          return <JoinCall />;
        default:
          return <MentorDashboard />;
      }
    }

    // Mentee pages
    if (currentRole === 'mentee') {
      switch (currentPage) {
        case 'mentee-dashboard':
          return <MenteeDashboard />;
        case 'mentee-join-call':
          return <MenteeJoinCall />;
        case 'mentee-submit-feedback':
          return <MenteeFeedback />;
        default:
          return <MenteeDashboard />;
      }
    }

    return <SuperAdminDashboard />;
  };

  return (
    <main className={`main-content ${currentRole === 'mentee' ? 'mentee-main' : ''} ${currentRole === 'mentor' ? 'mentor-main' : ''} ${currentRole === 'org-admin' ? 'org-admin-main' : ''} ${currentRole === 'platform-admin' ? 'platform-admin-main' : ''} ${currentRole === 'super-admin' ? 'super-admin-main' : ''}`}>
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
          <option value="mentor">Mentor</option>
          <option value="mentee">Mentee</option>
        </select>
      </div>

      <div id="pageContent">
        {renderPage()}
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

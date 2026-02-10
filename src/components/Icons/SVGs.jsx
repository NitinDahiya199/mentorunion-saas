import React from 'react';

// Icon component wrapper for consistent styling
const Icon = ({ children, className = '', size = 16, color = 'currentColor', ...props }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    {children}
  </svg>
);

// Settings/Gear Icon
export const CogIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Dollar Sign Icon
export const DollarIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Lightning/Bolt Icon
export const BoltIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
  </Icon>
);

// History Icon
export const HistoryIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Home Icon
export const HomeIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// User Shield Icon
export const UserShieldIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 22v-2a4 4 0 014-4h10a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 8l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 11h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Ticket Icon
export const TicketIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M2 9a3 3 0 013-3h14a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9h.01M6 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Phone Icon
export const PhoneIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Grid/Th Icon
export const GridIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Users Icon
export const UsersIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// User Graduate Icon
export const UserGraduateIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 22v-2a4 4 0 014-4h10a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4l4-2 4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Calendar Icon
export const CalendarIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// User Cog Icon
export const UserCogIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 22v-2a4 4 0 014-4h10a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 16v2M18 20v2M20 18h-2M16 18h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Headset Icon
export const HeadsetIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Clock Icon
export const ClockIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Video Icon
export const VideoIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Comment Icon
export const CommentIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// User Icon
export const UserIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Building Icon
export const BuildingIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 21V11l-6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="15" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="18" x2="9" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Chevron Down Icon
export const ChevronDownIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Check Icon
export const CheckIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Crown Icon
export const CrownIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Plus Icon
export const PlusIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// User Plus Icon
export const UserPlusIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Graduation Cap Icon
export const GraduationCapIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Chart Line Icon
export const ChartLineIcon = ({ size = 16, color = 'currentColor', className = '' }) => (
  <Icon size={size} color={color} className={className}>
    <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

// Icon mapping function to get the right icon component
export const getIcon = (iconName, size = 16, color = 'currentColor', className = '') => {
  const iconMap = {
    'fa-cog': <CogIcon size={size} color={color} className={className} />,
    'fa-dollar-sign': <DollarIcon size={size} color={color} className={className} />,
    'fa-bolt': <BoltIcon size={size} color={color} className={className} />,
    'fa-history': <HistoryIcon size={size} color={color} className={className} />,
    'fa-home': <HomeIcon size={size} color={color} className={className} />,
    'fa-user-shield': <UserShieldIcon size={size} color={color} className={className} />,
    'fa-ticket-alt': <TicketIcon size={size} color={color} className={className} />,
    'fa-phone-alt': <PhoneIcon size={size} color={color} className={className} />,
    'fa-th': <GridIcon size={size} color={color} className={className} />,
    'fa-users': <UsersIcon size={size} color={color} className={className} />,
    'fa-user-graduate': <UserGraduateIcon size={size} color={color} className={className} />,
    'fa-calendar': <CalendarIcon size={size} color={color} className={className} />,
    'fa-user-cog': <UserCogIcon size={size} color={color} className={className} />,
    'fa-headset': <HeadsetIcon size={size} color={color} className={className} />,
    'fa-clock': <ClockIcon size={size} color={color} className={className} />,
    'fa-video': <VideoIcon size={size} color={color} className={className} />,
    'fa-comment-alt': <CommentIcon size={size} color={color} className={className} />,
    'fa-user': <UserIcon size={size} color={color} className={className} />,
    'fa-building': <BuildingIcon size={size} color={color} className={className} />,
    'fa-chevron-down': <ChevronDownIcon size={size} color={color} className={className} />,
    'fa-check': <CheckIcon size={size} color={color} className={className} />,
    'fa-crown': <CrownIcon size={size} color={color} className={className} />,
    'fa-plus': <PlusIcon size={size} color={color} className={className} />,
    'fa-user-plus': <UserPlusIcon size={size} color={color} className={className} />,
    'fa-graduation-cap': <GraduationCapIcon size={size} color={color} className={className} />,
    'fa-chart-line': <ChartLineIcon size={size} color={color} className={className} />
  };

  return iconMap[iconName] || <UserIcon size={size} color={color} className={className} />;
};

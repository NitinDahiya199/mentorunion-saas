import React, { useState, useRef, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [selectedOrg, setSelectedOrg] = useState('All Organisations');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const filterRef = useRef(null);
  const orgDropdownRef = useRef(null);

  // Sample organizations
  const organizations = [
    'All Organisations',
    'TechMentor Inc.',
    'CareerGrowth Academy',
    'Leadership Institute',
    'SkillUp Solutions'
  ];

  // Sample user data
  const allUsers = [
    {
      id: 1,
      uid: 'UID001',
      name: 'John Smith',
      org: 'TechMentor Inc.',
      role: 'Admin',
      doj: '2024-01-15',
      contact: 'john.smith@techmentor.com',
      profilePic: null
    },
    {
      id: 2,
      uid: 'UID002',
      name: 'Sarah Johnson',
      org: 'TechMentor Inc.',
      role: 'Mentor',
      doj: '2024-02-20',
      contact: 'sarah.j@techmentor.com',
      profilePic: null
    },
    {
      id: 3,
      uid: 'UID003',
      name: 'Michael Chen',
      org: 'CareerGrowth Academy',
      role: 'Admin',
      doj: '2024-01-10',
      contact: 'michael.chen@careergrowth.com',
      profilePic: null
    },
    {
      id: 4,
      uid: 'UID004',
      name: 'Emily Davis',
      org: 'CareerGrowth Academy',
      role: 'Mentee',
      doj: '2024-03-05',
      contact: 'emily.davis@careergrowth.com',
      profilePic: null
    },
    {
      id: 5,
      uid: 'UID005',
      name: 'Robert Williams',
      org: 'Leadership Institute',
      role: 'Admin',
      doj: '2024-01-08',
      contact: 'robert.w@leadership.com',
      profilePic: null
    },
    {
      id: 6,
      uid: 'UID006',
      name: 'Lisa Anderson',
      org: 'Leadership Institute',
      role: 'Mentor',
      doj: '2024-02-12',
      contact: 'lisa.a@leadership.com',
      profilePic: null
    },
    {
      id: 7,
      uid: 'UID007',
      name: 'David Brown',
      org: 'SkillUp Solutions',
      role: 'Mentee',
      doj: '2024-03-18',
      contact: 'david.brown@skillup.com',
      profilePic: null
    },
    {
      id: 8,
      uid: 'UID008',
      name: 'Jennifer Wilson',
      org: 'TechMentor Inc.',
      role: 'Mentee',
      doj: '2024-03-22',
      contact: 'jennifer.w@techmentor.com',
      profilePic: null
    },
    {
      id: 9,
      uid: 'UID009',
      name: 'James Taylor',
      org: 'CareerGrowth Academy',
      role: 'Mentor',
      doj: '2024-02-28',
      contact: 'james.t@careergrowth.com',
      profilePic: null
    },
    {
      id: 10,
      uid: 'UID010',
      name: 'Maria Garcia',
      org: 'SkillUp Solutions',
      role: 'Admin',
      doj: '2024-01-25',
      contact: 'maria.garcia@skillup.com',
      profilePic: null
    }
  ];

  // Calculate stats based on selected organization
  const calculateStats = () => {
    let filteredUsers = allUsers;
    
    if (selectedOrg !== 'All Organisations') {
      filteredUsers = allUsers.filter(user => user.org === selectedOrg);
    }

    return {
      total: filteredUsers.length,
      admin: filteredUsers.filter(u => u.role === 'Admin').length,
      mentor: filteredUsers.filter(u => u.role === 'Mentor').length,
      mentee: filteredUsers.filter(u => u.role === 'Mentee').length
    };
  };

  const stats = calculateStats();

  // Filter users based on search, organization, and role filter
  const filteredUsers = allUsers.filter(user => {
    const matchesOrg = selectedOrg === 'All Organisations' || user.org === selectedOrg;
    const matchesRole = filter === 'all' || user.role.toLowerCase() === filter;
    const matchesSearch = searchQuery === '' || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.uid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.contact.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesOrg && matchesRole && matchesSearch;
  });

  const filterOptions = [
    { value: 'all', label: 'All Roles' },
    { value: 'admin', label: 'Admin' },
    { value: 'mentor', label: 'Mentor' },
    { value: 'mentee', label: 'Mentee' }
  ];

  const currentFilterLabel = filterOptions.find(opt => opt.value === filter)?.label || 'All Roles';

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (orgDropdownRef.current && !orgDropdownRef.current.contains(event.target)) {
        setIsOrgDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterSelect = (value) => {
    setFilter(value);
    setIsFilterOpen(false);
  };

  const handleOrgSelect = (org) => {
    setSelectedOrg(org);
    setIsOrgDropdownOpen(false);
  };

  // Download table data as CSV
  const handleDownload = () => {
    const headers = ['UID', 'Name', 'Org', 'Role', 'DOJ', 'Contact'];
    const csvContent = [
      headers.join(','),
      ...filteredUsers.map(user => [
        user.uid,
        `"${user.name}"`,
        `"${user.org}"`,
        user.role,
        user.doj,
        `"${user.contact}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `user-management-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="user-management-page">
      <div className="user-management-header">
        <div>
          <h1 className="user-management-title">User Management</h1>
          <p className="user-management-subtitle">Manage and monitor all users across organizations</p>
        </div>
      </div>

      {/* Organization Dropdown - below subtitle */}
      <div className="user-management-org-selector">
        <div className="org-selector-label">Filter by Organization:</div>
        <div className="org-selector-dropdown" ref={orgDropdownRef}>
          <button
            className="org-selector-button"
            onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
          >
            <i className="fas fa-building"></i>
            <span>{selectedOrg}</span>
            <i className={`fas fa-chevron-${isOrgDropdownOpen ? 'up' : 'down'}`}></i>
          </button>
          {isOrgDropdownOpen && (
            <div className="org-selector-menu">
              {organizations.map(org => (
                <button
                  key={org}
                  className={`org-selector-menu-item ${selectedOrg === org ? 'active' : ''}`}
                  onClick={() => handleOrgSelect(org)}
                >
                  {org}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="user-management-stats">
        <div className="user-stat-card">
          <div className="user-stat-label">TOTAL USERS</div>
          <div className="user-stat-value">{stats.total}</div>
        </div>
        <div className="user-stat-card">
          <div className="user-stat-label">ADMIN</div>
          <div className="user-stat-value user-stat-admin">{stats.admin}</div>
        </div>
        <div className="user-stat-card">
          <div className="user-stat-label">MENTOR</div>
          <div className="user-stat-value user-stat-mentor">{stats.mentor}</div>
        </div>
        <div className="user-stat-card">
          <div className="user-stat-label">MENTEE</div>
          <div className="user-stat-value user-stat-mentee">{stats.mentee}</div>
        </div>
      </div>

      {/* Users Section - Tiles */}
      <div className="user-management-tiles-container">
        <div className="user-management-table-header">
          <div className="table-search-container">
            <i className="fas fa-search table-search-icon"></i>
            <input
              type="text"
              className="table-search-input"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="table-actions">
            <div className="table-filter-dropdown" ref={filterRef}>
              <button
                className="table-filter-button"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <i className="fas fa-filter"></i>
                <span>{currentFilterLabel}</span>
                <i className={`fas fa-chevron-${isFilterOpen ? 'up' : 'down'}`}></i>
              </button>
              {isFilterOpen && (
                <div className="table-filter-menu">
                  {filterOptions.map(option => (
                    <button
                      key={option.value}
                      className={`table-filter-menu-item ${filter === option.value ? 'active' : ''}`}
                      onClick={() => handleFilterSelect(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="table-download-button" onClick={handleDownload}>
              <i className="fas fa-download"></i>
              Download
            </button>
          </div>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="user-tiles-empty-state">
            <div className="empty-state-content">
              <i className="fas fa-users"></i>
              <p>No users found matching your filters.</p>
            </div>
          </div>
        ) : (
          <div className="user-tiles-grid">
            {filteredUsers.map(user => (
              <div
                key={user.id}
                className={`user-tile user-tile-role-${user.role.toLowerCase()}`}
              >
                <div className="user-tile-avatar">
                  {user.profilePic ? (
                    <img src={user.profilePic} alt={user.name} />
                  ) : (
                    <span>{getInitials(user.name)}</span>
                  )}
                </div>
                <div className="user-tile-body">
                  <h3 className="user-tile-name">{user.name}</h3>
                  <span className="user-tile-uid">{user.uid}</span>
                  <div className="user-tile-meta">
                    <span className="user-tile-org" title={user.org}>
                      <i className="fas fa-building"></i>
                      {user.org}
                    </span>
                    <span className={`user-tile-role user-role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </div>
                  <div className="user-tile-doj">
                    <i className="fas fa-calendar-alt"></i>
                    Joined {formatDate(user.doj)}
                  </div>
                  <a href={`mailto:${user.contact}`} className="user-tile-contact" title={user.contact}>
                    <i className="fas fa-envelope"></i>
                    {user.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;

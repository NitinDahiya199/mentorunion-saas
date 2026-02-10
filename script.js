// Application State
const state = {
    currentRole: 'super-admin',
    currentPage: 'dashboard',
    bookingData: {
        program: 'Career Coaching',
        mentor: null,
        mentee: null,
        time: null
    },
    sessionStatus: 'scheduled',
    callTimer: 0,
    timerInterval: null
};

// Role Configuration
const roles = {
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize UI based on current state
    updateUIForRole();
    
    // Show initial page
    showPage(state.currentPage);
});

// Set up all event listeners
function setupEventListeners() {
    // Role switcher buttons
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const role = this.getAttribute('data-role');
            switchRole(role);
        });
    });

    // Mobile role switcher
    document.getElementById('mobileRoleSelect').addEventListener('change', function() {
        switchRole(this.value);
    });

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Toggle sidebar
    document.getElementById('toggleSidebar').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Quick action buttons
    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Start booking flow
    document.getElementById('startBookingFlow').addEventListener('click', function() {
        navigateToPage('session-booking');
        resetBookingFlow();
    });

    // Booking flow steps
    document.querySelectorAll('.select-mentor').forEach(btn => {
        btn.addEventListener('click', function() {
            state.bookingData.mentor = this.getAttribute('data-mentor');
            updateBookingStep(2, 3);
        });
    });

    document.querySelectorAll('.select-mentee').forEach(btn => {
        btn.addEventListener('click', function() {
            state.bookingData.mentee = this.getAttribute('data-mentee');
            updateBookingStep(3, 4);
        });
    });

    // Booking navigation
    document.getElementById('prevStep1').addEventListener('click', function() {
        updateBookingStep(2, 1);
    });

    document.getElementById('prevStep2').addEventListener('click', function() {
        updateBookingStep(3, 2);
    });

    document.getElementById('prevStep4').addEventListener('click', function() {
        updateBookingStep(5, 4);
    });

    // Confirm booking
    document.getElementById('confirmBooking').addEventListener('click', function() {
        document.getElementById('bookingStep5').style.display = 'none';
        document.getElementById('bookingConfirmation').style.display = 'block';
        
        // Update all steps to completed
        for (let i = 1; i <= 5; i++) {
            const step = document.getElementById(`step${i}`);
            step.classList.remove('active');
            step.classList.add('completed');
        }
        
        // Update session status
        state.sessionStatus = 'scheduled';
        
        // Show notification
        showNotification('Session booked successfully! The session is now in "Scheduled" status.');
    });

    // View session details after booking
    document.getElementById('viewSessionDetails').addEventListener('click', function() {
        showNotification('Session details would open here. In a full implementation, this would show the session details page.');
    });

    // Book another session
    document.getElementById('bookAnotherSession').addEventListener('click', function() {
        resetBookingFlow();
    });

    // Create organisation modal
    document.getElementById('createOrganisation').addEventListener('click', function() {
        document.getElementById('createOrgModal').classList.add('active');
    });

    document.getElementById('closeOrgModal').addEventListener('click', function() {
        document.getElementById('createOrgModal').classList.remove('active');
    });

    document.getElementById('cancelOrgModal').addEventListener('click', function() {
        document.getElementById('createOrgModal').classList.remove('active');
    });

    document.getElementById('submitOrgModal').addEventListener('click', function() {
        showNotification('Organisation created successfully! In a full implementation, this would create the organisation and refresh the list.');
        document.getElementById('createOrgModal').classList.remove('active');
    });

    // End call button
    document.getElementById('endCallBtn').addEventListener('click', function() {
        // Stop the timer
        if (state.timerInterval) {
            clearInterval(state.timerInterval);
        }
        
        // Show outcome modal
        document.getElementById('sessionOutcomeModal').classList.add('active');
    });

    // Session outcome selection
    document.getElementById('outcomeCompleted').addEventListener('click', function() {
        completeSession('completed');
    });

    document.getElementById('outcomeNoShow').addEventListener('click', function() {
        completeSession('no-show');
    });

    document.getElementById('outcomeDropped').addEventListener('click', function() {
        completeSession('dropped');
    });

    document.getElementById('closeOutcomeModal').addEventListener('click', function() {
        document.getElementById('sessionOutcomeModal').classList.remove('active');
    });

    // Edit session rules
    document.getElementById('editSessionRules').addEventListener('click', function() {
        navigateToPage('session-rules');
    });
}

// Switch between roles
function switchRole(role) {
    state.currentRole = role;
    state.currentPage = 'dashboard';
    
    // Update UI
    updateUIForRole();
    
    // Show dashboard for the new role
    showPage('dashboard');
    
    // Update active role button
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-role') === role) {
            btn.classList.add('active');
        }
    });
    
    // Update mobile selector
    document.getElementById('mobileRoleSelect').value = role;
    
    // Show notification
    showNotification(`Switched to ${roles[role].name} role`);
}

// Update UI based on current role
function updateUIForRole() {
    const roleConfig = roles[state.currentRole];
    
    // Update header
    document.getElementById('userName').textContent = roleConfig.name;
    document.getElementById('userRole').textContent = roleConfig.roleText;
    document.getElementById('userAvatar').textContent = roleConfig.avatarText;
    
    // Update sidebar navigation
    document.querySelectorAll('.nav-section').forEach(section => {
        if (section.getAttribute('data-role') === state.currentRole) {
            section.style.display = 'block';
            
            // Set first nav item as active
            const firstNavItem = section.querySelector('.nav-item');
            if (firstNavItem) {
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                firstNavItem.classList.add('active');
            }
        } else {
            section.style.display = 'none';
        }
    });
}

// Navigate to a specific page
function navigateToPage(page) {
    state.currentPage = page;
    showPage(page);
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });
}

// Show the specified page
function showPage(page) {
    // Hide all page content
    document.querySelectorAll('.page-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the requested page
    const pageElement = document.querySelector(`.page-content[data-role="${state.currentRole}"][data-page="${page}"]`);
    if (pageElement) {
        pageElement.style.display = 'block';
        
        // If this is the join-call page for mentor, start the timer
        if (state.currentRole === 'mentor' && page === 'join-call') {
            startCallTimer();
        }
    } else {
        // Fallback to dashboard if page doesn't exist for this role
        const dashboardElement = document.querySelector(`.page-content[data-role="${state.currentRole}"][data-page="dashboard"]`);
        if (dashboardElement) {
            dashboardElement.style.display = 'block';
        }
    }
}

// Reset the booking flow to initial state
function resetBookingFlow() {
    state.bookingData = {
        program: 'Career Coaching',
        mentor: null,
        mentee: null,
        time: null
    };
    
    // Reset steps
    for (let i = 1; i <= 5; i++) {
        const step = document.getElementById(`step${i}`);
        step.classList.remove('active', 'completed');
    }
    
    // Set step 1 as active
    document.getElementById('step1').classList.add('active');
    
    // Show step 2 (skipping program selection for simplicity)
    document.getElementById('bookingStep2').style.display = 'block';
    document.getElementById('bookingStep3').style.display = 'none';
    document.getElementById('bookingStep4').style.display = 'none';
    document.getElementById('bookingStep5').style.display = 'none';
    document.getElementById('bookingConfirmation').style.display = 'none';
}

// Update the booking flow step
function updateBookingStep(fromStep, toStep) {
    // Update step indicators
    for (let i = 1; i <= 5; i++) {
        const step = document.getElementById(`step${i}`);
        step.classList.remove('active', 'completed');
        
        if (i < toStep) {
            step.classList.add('completed');
        } else if (i === toStep) {
            step.classList.add('active');
        }
    }
    
    // Show/hide step content
    document.getElementById('bookingStep2').style.display = 'none';
    document.getElementById('bookingStep3').style.display = 'none';
    document.getElementById('bookingStep4').style.display = 'none';
    document.getElementById('bookingStep5').style.display = 'none';
    document.getElementById('bookingConfirmation').style.display = 'none';
    
    // Show the current step
    if (toStep === 1 || toStep === 2) {
        document.getElementById('bookingStep2').style.display = 'block';
    } else if (toStep === 3) {
        document.getElementById('bookingStep3').style.display = 'block';
    } else if (toStep === 4) {
        // Skip time selection for demo purposes, go directly to confirmation
        document.getElementById('bookingStep5').style.display = 'block';
    } else if (toStep === 5) {
        document.getElementById('bookingStep5').style.display = 'block';
    }
}

// Start the call timer for the mentor call simulation
function startCallTimer() {
    state.callTimer = 765; // 12:45 in seconds
    updateCallTimerDisplay();
    
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    
    state.timerInterval = setInterval(function() {
        state.callTimer++;
        updateCallTimerDisplay();
    }, 1000);
}

// Update the call timer display
function updateCallTimerDisplay() {
    const minutes = Math.floor(state.callTimer / 60);
    const seconds = state.callTimer % 60;
    document.getElementById('callTimer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Complete the session with the specified outcome
function completeSession(outcome) {
    // Close the modal
    document.getElementById('sessionOutcomeModal').classList.remove('active');
    
    // Show a confirmation message
    let message = '';
    switch(outcome) {
        case 'completed':
            message = 'Session marked as completed. Invoice generated and payout processed automatically.';
            break;
        case 'no-show':
            message = 'Session marked as no-show. Credit refunded to mentee automatically.';
            break;
        case 'dropped':
            message = 'Session marked as dropped. Auto-rescheduled based on system rules.';
            break;
    }
    
    showNotification(`Session outcome recorded: ${message}`);
    
    // Switch to org admin and show billing page
    setTimeout(() => {
        switchRole('org-admin');
        navigateToPage('billing-payouts');
        showNotification('Now viewing automated billing results for the completed session.');
    }, 1500);
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--primary-blue);
        color: white;
        padding: 12px 20px;
        border-radius: var(--border-radius-sm);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        font-weight: 500;
        max-width: 350px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add slide in animation
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
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
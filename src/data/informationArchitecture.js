const createSubmodule = (id, label, purpose, components, actions, icon = 'fa-th') => ({
  id,
  label,
  purpose,
  components,
  actions,
  icon
});

export const ROLE_ORDER = [
  'super-admin',
  'platform-admin',
  'org-admin',
  'sub-admin',
  'mentor',
  'mentee'
];

export const ROLE_ARCHITECTURE = {
  'mentee': {
    label: 'Mentee',
    profileName: 'Alex Thompson',
    roleText: 'Learning Journey',
    avatarText: 'AT',
    accent: 'var(--mentorunion-purple)',
    screenCount: 10,
    flowCount: 5,
    defaultPage: 'mentee-dashboard',
    summary: 'Discover mentors, book sessions, manage credits, and track learning outcomes across every mentoring touchpoint.',
    responsibilities: [
      'Discover the right mentor using marketplace search and AI suggestions.',
      'Book, reschedule, and complete sessions with clear credit visibility.',
      'Track progress through journals, feedback, and session resources.'
    ],
    modules: [
      {
        id: 'mentee-dashboard',
        label: 'Dashboard',
        icon: 'fa-home',
        purpose: 'Central home screen that surfaces upcoming sessions, credit balance, quick actions, and AI-led discovery prompts.',
        components: [
          'Upcoming sessions list',
          'Credit balance widget',
          'Quick-book CTA',
          'Session journal highlights',
          'AI mentor suggestions carousel'
        ],
        actions: [
          'Navigate to any module',
          'Join an upcoming session',
          'Quick-buy credits',
          'Resume mentor discovery'
        ],
        children: [
          createSubmodule(
            'mentee-dashboard-upcoming',
            'Upcoming Sessions',
            'Keep the next scheduled touchpoints visible with direct join and reschedule context.',
            ['Session countdown', 'Meeting link state', 'Mentor card snippets'],
            ['Join session', 'Open booking details', 'Reschedule from dashboard'],
            'fa-calendar'
          ),
          createSubmodule(
            'mentee-dashboard-suggestions',
            'AI Suggestions',
            'Recommend mentors and next actions based on goals, interests, and recent activity.',
            ['Recommendation carousel', 'Goal-fit tags', 'Suggested next steps'],
            ['Review suggested mentors', 'Jump to discovery', 'Bookmark a mentor'],
            'fa-bolt'
          )
        ]
      },
      {
        id: 'mentee-discovery',
        label: 'Mentor Discovery',
        icon: 'fa-users',
        purpose: 'Marketplace-style discovery view for browsing, filtering, and ranking mentors.',
        components: [
          'Search bar for name or keyword',
          'AI Mentor Finder toggle',
          'Filter sidebar for domain, industry, rating, price, and availability',
          'Mentor card grid',
          'Sort dropdown'
        ],
        actions: [
          'Search or filter mentors',
          'Toggle AI recommendations',
          'Open mentor profile',
          'Save or bookmark mentor'
        ],
        children: [
          createSubmodule(
            'mentee-discovery-filters',
            'Search & Filters',
            'Refine mentor selection with structured filters and real-time results.',
            ['Domain filters', 'Industry filters', 'Rating and price controls', 'Availability refiners'],
            ['Filter in real time', 'Clear filters', 'Sort results'],
            'fa-cog'
          ),
          createSubmodule(
            'mentee-discovery-ai',
            'AI Mentor Finder',
            'Surface mentors ranked by match quality rather than only static search relevance.',
            ['AI toggle', 'Suggested fit reasons', 'Recommendation ordering'],
            ['Enable AI ranking', 'Compare mentor matches', 'Open recommended profile'],
            'fa-bolt'
          )
        ]
      },
      {
        id: 'mentee-profile',
        label: 'Mentor Profile',
        icon: 'fa-user',
        purpose: 'Detailed mentor detail page used to evaluate expertise, pricing, social proof, and live availability.',
        components: [
          'Profile header with headline and rating',
          'Bio and expertise section',
          'Domain and industry tags',
          'Session pricing',
          'Available slots calendar',
          'Reviews and ratings'
        ],
        actions: [
          'View available slots',
          'Book a slot',
          'Request a custom slot',
          'Read reviews',
          'Share mentor profile'
        ],
        children: [
          createSubmodule(
            'mentee-profile-calendar',
            'Availability Calendar',
            'Evaluate bookable time slots with timezone-aware scheduling context.',
            ['Time slot calendar', 'Timezone labels', 'Slot cost indicators'],
            ['Select slot', 'Switch date range', 'Request alternate time'],
            'fa-calendar'
          ),
          createSubmodule(
            'mentee-profile-reviews',
            'Reviews & Ratings',
            'Assess mentor quality and satisfaction signals before confirming a session.',
            ['Review list', 'Star ratings', 'Quality breakdown'],
            ['Read reviews', 'Compare ratings', 'Assess fit'],
            'fa-comment-alt'
          )
        ]
      },
      {
        id: 'mentee-booking',
        label: 'Booking Confirmation',
        icon: 'fa-plus',
        purpose: 'Confirmation layer for validating session details before credits are deducted.',
        components: [
          'Session summary',
          'Credit deduction preview',
          'Cancellation policy notice',
          'Calendar add option'
        ],
        actions: [
          'Confirm booking',
          'Edit slot selection',
          'Cancel and go back'
        ],
        children: [
          createSubmodule(
            'mentee-booking-summary',
            'Booking Summary',
            'Present final booking context before a commitment is made.',
            ['Mentor and session snapshot', 'Timezone display', 'Calendar export'],
            ['Confirm booking', 'Return to profile', 'Add to calendar'],
            'fa-calendar'
          ),
          createSubmodule(
            'mentee-booking-policy',
            'Credit & Policy Review',
            'Explain refund, cancellation, and credit consumption rules at the point of booking.',
            ['Deduction preview', 'Cancellation notice', 'Policy reminders'],
            ['Review cost impact', 'Accept policy', 'Cancel booking flow'],
            'fa-dollar-sign'
          )
        ]
      },
      {
        id: 'mentee-bookings',
        label: 'My Bookings',
        icon: 'fa-calendar',
        purpose: 'Lifecycle manager for all upcoming, past, and cancelled sessions.',
        components: [
          'Tabbed booking states',
          'Session cards with status',
          'Date range filters',
          'Meeting link shortcuts'
        ],
        actions: [
          'Join session',
          'Reschedule',
          'Cancel booking',
          'View session detail',
          'Leave feedback'
        ],
        children: [
          createSubmodule(
            'mentee-bookings-upcoming',
            'Upcoming',
            'Track near-term bookings and prepare to join or modify them.',
            ['Upcoming tab', 'Meeting links', 'Countdown-ready session cards'],
            ['Join session', 'Reschedule', 'Cancel booking'],
            'fa-calendar'
          ),
          createSubmodule(
            'mentee-bookings-past',
            'Past',
            'Review completed sessions and access the post-session workflow.',
            ['Past session cards', 'Feedback prompts', 'Session detail links'],
            ['Open session detail', 'Leave review', 'Reuse mentor'],
            'fa-history'
          ),
          createSubmodule(
            'mentee-bookings-cancelled',
            'Cancelled',
            'Track cancelled bookings, policy outcomes, and refund history.',
            ['Cancelled tab', 'Refund status cues', 'History timeline'],
            ['View cancellation outcome', 'Rebook session', 'Review policy'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'mentee-session-detail',
        label: 'Session Detail',
        icon: 'fa-video',
        purpose: 'Single-session workspace before and after the meeting, joining together meeting access, resources, feedback, and journaling.',
        components: [
          'Session info and meeting link',
          'Journal entry area',
          'Mentor-shared resources',
          'Feedback and rating form'
        ],
        actions: [
          'Join meeting',
          'Write journal entry',
          'Download resources',
          'Submit rating and feedback'
        ],
        children: [
          createSubmodule(
            'mentee-session-detail-feedback',
            'Feedback & Rating',
            'Capture structured post-session quality signals and review text.',
            ['Star rating input', 'Review text area', 'Mentor update status'],
            ['Rate session', 'Write review', 'Submit feedback'],
            'fa-comment-alt'
          ),
          createSubmodule(
            'mentee-session-detail-journal',
            'Session Journal Entry',
            'Record learnings and takeaways tied to a specific completed session.',
            ['Journal composer', 'Tags', 'Private notes'],
            ['Draft entry', 'Tag learning themes', 'Save reflection'],
            'fa-history'
          ),
          createSubmodule(
            'mentee-session-detail-resources',
            'Resources',
            'Store and retrieve materials shared by the mentor after the call.',
            ['Download list', 'Attachment metadata', 'Bookmark options'],
            ['Download files', 'Bookmark resources', 'Review shared materials'],
            'fa-th'
          )
        ]
      },
      {
        id: 'mentee-wallet',
        label: 'Credits & Wallet',
        icon: 'fa-dollar-sign',
        purpose: 'Manage the credit balance, top-ups, transactions, and automatic replenishment rules.',
        components: [
          'Current balance',
          'Credit packages',
          'Transaction history table',
          'Auto-top-up settings'
        ],
        actions: [
          'Buy credits',
          'View transaction details',
          'Enable auto-top-up',
          'Download statement'
        ],
        children: [
          createSubmodule(
            'mentee-wallet-packages',
            'Credit Packages',
            'Select and purchase pre-defined credit bundles.',
            ['Package cards', 'Pricing tiers', 'Purchase CTA'],
            ['Compare packages', 'Buy credits', 'Confirm checkout'],
            'fa-plus'
          ),
          createSubmodule(
            'mentee-wallet-transactions',
            'Transactions',
            'Audit the full credit ledger across purchases, deductions, and refunds.',
            ['Transaction table', 'Type filters', 'Running balance'],
            ['Review history', 'Open transaction details', 'Download statement'],
            'fa-history'
          ),
          createSubmodule(
            'mentee-wallet-autotopup',
            'Auto Top-up',
            'Prevent booking interruptions by defining balance-triggered replenishment rules.',
            ['Threshold selector', 'Package mapping', 'Enable toggle'],
            ['Enable auto-top-up', 'Adjust threshold', 'Disable rule'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'mentee-journal',
        label: 'Session Journal',
        icon: 'fa-history',
        purpose: 'Cross-session journal repository for organizing reflections, milestones, and learning notes.',
        components: [
          'Chronological journal entries list',
          'Rich text editor',
          'Tag and category controls',
          'Search and filter tools'
        ],
        actions: [
          'Create new entry',
          'Edit entry',
          'Tag entry',
          'Search past entries'
        ],
        children: [
          createSubmodule(
            'mentee-journal-entries',
            'Entries',
            'Maintain a chronological knowledge base of mentoring reflections.',
            ['Entry list', 'Preview snippets', 'Sort by recency'],
            ['Create entry', 'Edit entry', 'Open session-linked note'],
            'fa-history'
          ),
          createSubmodule(
            'mentee-journal-tags',
            'Tags & Search',
            'Make the journal reusable with searchable themes and structured labels.',
            ['Tag taxonomy', 'Keyword search', 'Category filters'],
            ['Tag an entry', 'Filter by topic', 'Search reflections'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'mentee-settings',
        label: 'Profile & Settings',
        icon: 'fa-cog',
        purpose: 'Manage personal details, learning goals, preferences, timezone, and account security.',
        components: [
          'Profile form',
          'Academic and professional details',
          'Notification preferences',
          'Timezone setting',
          'Password and security'
        ],
        actions: [
          'Edit profile',
          'Update preferences',
          'Change password',
          'Delete account'
        ],
        children: [
          createSubmodule(
            'mentee-settings-profile',
            'Profile Details',
            'Update identity, goals, interests, and background information used by the platform.',
            ['Name and goals', 'Industry and skills', 'Academic and professional fields'],
            ['Edit profile', 'Save goals', 'Update details'],
            'fa-user'
          ),
          createSubmodule(
            'mentee-settings-preferences',
            'Preferences',
            'Control communication, reminders, and timezone-related behavior.',
            ['Notification settings', 'Timezone selector', 'Preference toggles'],
            ['Update preferences', 'Change timezone', 'Set reminders'],
            'fa-clock'
          ),
          createSubmodule(
            'mentee-settings-security',
            'Security',
            'Protect account access with password and account-management controls.',
            ['Password settings', 'Security actions', 'Delete account option'],
            ['Change password', 'Review account security', 'Delete account'],
            'fa-user-shield'
          )
        ]
      },
      {
        id: 'mentee-support',
        label: 'Support',
        icon: 'fa-headset',
        purpose: 'Service desk area for submitting tickets, browsing FAQs, and reporting abuse.',
        components: [
          'Ticket submission form',
          'FAQ section',
          'Past tickets list',
          'Abuse report form'
        ],
        actions: [
          'Submit ticket',
          'Report abuse',
          'Track ticket status'
        ],
        children: [
          createSubmodule(
            'mentee-support-tickets',
            'Tickets',
            'Open and track support requests from a single queue.',
            ['Submission form', 'Ticket list', 'Status tracking'],
            ['Submit ticket', 'Track progress', 'Review prior requests'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'mentee-support-faq',
            'FAQ',
            'Answer common operational questions before a ticket is raised.',
            ['FAQ knowledge base', 'Topic grouping', 'Search shortcuts'],
            ['Browse help topics', 'Search answers', 'Escalate to ticket'],
            'fa-th'
          ),
          createSubmodule(
            'mentee-support-abuse',
            'Abuse Report',
            'Escalate inappropriate behavior or safety concerns quickly.',
            ['Abuse form', 'Incident details', 'Evidence capture'],
            ['Report abuse', 'Submit evidence', 'Escalate concern'],
            'fa-user-shield'
          )
        ]
      }
    ],
    flows: [
      {
        title: 'Mentor Discovery',
        relatedPages: ['mentee-dashboard', 'mentee-discovery', 'mentee-profile'],
        steps: [
          'Dashboard: start from Find a Mentor or the main navigation.',
          'Mentor Discovery: search, filter, and optionally enable AI ranking.',
          'Mentor Profile: compare expertise, reviews, and availability.'
        ]
      },
      {
        title: 'Book a Session',
        relatedPages: ['mentee-profile', 'mentee-booking', 'mentee-bookings'],
        steps: [
          'Mentor Profile: select an available slot and review credit cost.',
          'Booking Confirmation: verify time, timezone, and cancellation policy.',
          'My Bookings: monitor the new upcoming booking and meeting link.'
        ]
      },
      {
        title: 'Request a Custom Slot',
        relatedPages: ['mentee-profile', 'mentee-bookings'],
        steps: [
          'Mentor Profile: open the custom slot request form.',
          'Pending request: send preferred ranges for mentor review.',
          'My Bookings: track acceptance or rejection and convert approved requests into bookings.'
        ]
      },
      {
        title: 'Purchase Credits',
        relatedPages: ['mentee-wallet'],
        steps: [
          'Credits & Wallet: review current balance and available packages.',
          'Checkout step: complete payment and add credits.',
          'Transaction ledger: confirm the updated balance and receipt.'
        ]
      },
      {
        title: 'Post-session Reflection',
        relatedPages: ['mentee-bookings', 'mentee-session-detail', 'mentee-journal'],
        steps: [
          'My Bookings: open a completed session from the post-session prompt.',
          'Session Detail: submit a rating, feedback, and a journal entry.',
          'Session Journal: retain learning notes for future reference.'
        ]
      }
    ]
  },
  'mentor': {
    label: 'Mentor',
    profileName: 'Dr. Sarah Johnson',
    roleText: 'Mentor Operations',
    avatarText: 'SJ',
    accent: 'var(--mentorunion-green)',
    screenCount: 10,
    flowCount: 5,
    defaultPage: 'mentor-dashboard',
    summary: 'Manage profile, availability, bookings, session delivery, reviews, and earnings from a single mentor workspace.',
    responsibilities: [
      'Maintain a compelling public profile and publish accurate expertise signals.',
      'Open, edit, and protect availability for high-quality scheduling.',
      'Deliver sessions, share resources, and track earnings and outcomes.'
    ],
    modules: [
      {
        id: 'mentor-dashboard',
        label: 'Dashboard',
        icon: 'fa-home',
        purpose: 'Daily operating center for schedule visibility, alerts, booking requests, and quick actions.',
        components: [
          'Today schedule',
          'Upcoming bookings',
          'Earnings summary widget',
          'Pending booking requests',
          'Completion rate indicator',
          'Quick actions'
        ],
        actions: [
          'Accept or reject pending bookings',
          'View session details',
          'Jump to availability or earnings'
        ],
        children: [
          createSubmodule(
            'mentor-dashboard-requests',
            'Pending Requests',
            'Surface time-sensitive booking requests that need mentor action.',
            ['Pending queue', 'Mentee context', 'Requested time summary'],
            ['Accept request', 'Reject request', 'Propose reschedule'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'mentor-dashboard-earnings',
            'Earnings Snapshot',
            'Expose short-term earning performance without leaving the home view.',
            ['Earnings widget', 'Pending payouts', 'Period comparison'],
            ['Open earnings dashboard', 'Review payout status', 'Track trend'],
            'fa-dollar-sign'
          )
        ]
      },
      {
        id: 'mentor-public-profile',
        label: 'Public Profile Editor',
        icon: 'fa-user',
        purpose: 'Create and refine the mentor profile that appears in the marketplace.',
        components: [
          'Bio and headline form',
          'Expertise areas',
          'Domain and industry tags',
          'Languages',
          'Pricing',
          'Profile photo upload',
          'AI profile enhancer',
          'Preview toggle'
        ],
        actions: [
          'Edit profile fields',
          'Run AI enhancer',
          'Set pricing',
          'Preview as mentee',
          'Publish or unpublish profile'
        ],
        children: [
          createSubmodule(
            'mentor-public-profile-content',
            'Profile Content',
            'Shape the core mentor story and expertise narrative that buyers evaluate.',
            ['Headline', 'Bio', 'Expertise sections', 'Tags'],
            ['Edit content', 'Save draft', 'Preview profile'],
            'fa-user'
          ),
          createSubmodule(
            'mentor-public-profile-ai',
            'AI Profile Enhancer',
            'Use AI-assisted suggestions to improve positioning and differentiation.',
            ['Enhancement trigger', 'Suggested copy', 'Apply changes controls'],
            ['Run enhancer', 'Review suggestions', 'Apply updated copy'],
            'fa-bolt'
          ),
          createSubmodule(
            'mentor-public-profile-publishing',
            'Publishing',
            'Control whether the profile is live in the marketplace.',
            ['Preview mode', 'Publish toggle', 'Visibility state'],
            ['Preview as mentee', 'Publish profile', 'Unpublish profile'],
            'fa-plus'
          )
        ]
      },
      {
        id: 'mentor-availability',
        label: 'Availability Manager',
        icon: 'fa-clock',
        purpose: 'Scheduling workspace for one-off and recurring slots with timezone and calendar integration support.',
        components: [
          'Weekly calendar view',
          'Slot creation form',
          'Timezone auto-detection',
          'Google Calendar sync',
          'Bulk slot creation tool'
        ],
        actions: [
          'Create, edit, or delete slots',
          'Set recurring availability',
          'Sync with Google Calendar',
          'Block off dates'
        ],
        children: [
          createSubmodule(
            'mentor-availability-calendar',
            'Calendar',
            'Manage slot visibility over a weekly scheduling view.',
            ['Weekly calendar', 'Slot cards', 'Timezone labels'],
            ['Create slot', 'Edit slot', 'Delete slot'],
            'fa-calendar'
          ),
          createSubmodule(
            'mentor-availability-recurring',
            'Recurring Availability',
            'Apply repeatable availability patterns instead of rebuilding schedules manually.',
            ['Recurrence rules', 'Bulk slot generator', 'Pattern preview'],
            ['Set recurrence', 'Bulk create slots', 'Block dates'],
            'fa-history'
          ),
          createSubmodule(
            'mentor-availability-sync',
            'Calendar Sync',
            'Reduce conflicts through external calendar synchronization.',
            ['Google Calendar toggle', 'Sync status', 'Conflict hints'],
            ['Enable sync', 'Review conflicts', 'Disable integration'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'mentor-bookings',
        label: 'Bookings & Sessions',
        icon: 'fa-calendar',
        purpose: 'End-to-end bookings manager for upcoming sessions, pending requests, and historical delivery.',
        components: [
          'Upcoming, Pending Requests, and Past tabs',
          'Booking cards with mentee info and status',
          'Accept or reject controls',
          'Meeting links'
        ],
        actions: [
          'Accept booking request',
          'Reject with reason',
          'Propose reschedule',
          'Join session',
          'Cancel session'
        ],
        children: [
          createSubmodule(
            'mentor-bookings-upcoming',
            'Upcoming Sessions',
            'Keep future sessions organized and ready to launch.',
            ['Upcoming tab', 'Meeting links', 'Status-aware booking cards'],
            ['Join session', 'Cancel session', 'Open workspace'],
            'fa-calendar'
          ),
          createSubmodule(
            'mentor-bookings-pending',
            'Pending Requests',
            'Review booking requests before they become confirmed commitments.',
            ['Pending tab', 'Accept and reject actions', 'Requested schedule detail'],
            ['Accept request', 'Reject with reason', 'Propose reschedule'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'mentor-bookings-history',
            'Past Sessions',
            'Audit previously delivered sessions and outcomes.',
            ['Past tab', 'Session outcomes', 'History list'],
            ['Review history', 'Open notes', 'Track delivery quality'],
            'fa-history'
          )
        ]
      },
      {
        id: 'mentor-workspace',
        label: 'Session Workspace',
        icon: 'fa-video',
        purpose: 'Per-session operating space for live delivery, notes, uploaded materials, and meeting summaries.',
        components: [
          'Meeting link and join button',
          'Session notes editor',
          'Resource upload area',
          'Meeting summary template',
          'Feedback form for mentee'
        ],
        actions: [
          'Join meeting',
          'Write session notes',
          'Upload resources',
          'Submit meeting summary',
          'Give feedback to mentee'
        ],
        children: [
          createSubmodule(
            'mentor-workspace-notes',
            'Notes',
            'Capture structured observations during or after the mentoring session.',
            ['Notes editor', 'Session record binding', 'Save state'],
            ['Write notes', 'Save notes', 'Edit after session'],
            'fa-history'
          ),
          createSubmodule(
            'mentor-workspace-resources',
            'Resources',
            'Attach documents and follow-up materials directly to a session.',
            ['Upload area', 'Attachment list', 'Share confirmations'],
            ['Upload material', 'Replace file', 'Share to mentee'],
            'fa-th'
          ),
          createSubmodule(
            'mentor-workspace-summary',
            'Meeting Summary',
            'Close the loop with a structured recap visible to the mentee and platform.',
            ['Summary template', 'Outcome fields', 'Completion controls'],
            ['Submit summary', 'Mark outcomes', 'Send feedback'],
            'fa-comment-alt'
          )
        ]
      },
      {
        id: 'mentor-earnings',
        label: 'Earnings Dashboard',
        icon: 'fa-dollar-sign',
        purpose: 'Track total earnings, payout history, pending payouts, and withdrawal operations.',
        components: [
          'Total earnings by period',
          'Payout history table',
          'Pending payout amount',
          'Per-session breakdown',
          'Withdrawal request button',
          'Payment method settings'
        ],
        actions: [
          'View earnings by period',
          'Request withdrawal',
          'Update payment method',
          'Download report'
        ],
        children: [
          createSubmodule(
            'mentor-earnings-overview',
            'Overview',
            'Summarize revenue performance and pending balances.',
            ['Period selector', 'Totals', 'Pending payout widget'],
            ['Change period', 'Review earnings', 'Open payout history'],
            'fa-chart-line'
          ),
          createSubmodule(
            'mentor-earnings-payouts',
            'Payouts',
            'Track completed withdrawals and initiate new ones.',
            ['Payout history', 'Withdrawal form', 'Payment method settings'],
            ['Request withdrawal', 'Update payment method', 'Review payout ETA'],
            'fa-dollar-sign'
          )
        ]
      },
      {
        id: 'mentor-analytics',
        label: 'Analytics & Reviews',
        icon: 'fa-chart-line',
        purpose: 'Performance dashboard for ratings, engagement, completion, and review quality.',
        components: [
          'Overall rating',
          'Rating breakdown chart',
          'Individual review list',
          'Completion rate metric',
          'Session outcomes',
          'Engagement metrics'
        ],
        actions: [
          'View all reviews',
          'Filter by rating',
          'Export analytics',
          'Track improvement trends'
        ],
        children: [
          createSubmodule(
            'mentor-analytics-reviews',
            'Reviews',
            'Understand qualitative feedback and reputation signals.',
            ['Review list', 'Rating filters', 'Review count'],
            ['Filter reviews', 'Inspect comments', 'Monitor quality'],
            'fa-comment-alt'
          ),
          createSubmodule(
            'mentor-analytics-performance',
            'Performance Metrics',
            'Measure session outcomes, completion, repeat engagement, and trend movement.',
            ['Completion rate', 'Repeat mentee metric', 'Average session length', 'Trend chart'],
            ['Track trend', 'Compare periods', 'Export analytics'],
            'fa-chart-line'
          )
        ]
      },
      {
        id: 'mentor-messaging',
        label: 'Chat / Messaging',
        icon: 'fa-comment-alt',
        purpose: 'Conversation hub for pre-session coordination and post-session follow-up.',
        components: [
          'Conversation list',
          'Message thread view',
          'File sharing in chat'
        ],
        actions: [
          'Send message',
          'Share file',
          'Search conversations'
        ],
        children: [
          createSubmodule(
            'mentor-messaging-threads',
            'Conversations',
            'Manage threaded discussions with mentees over time.',
            ['Conversation list', 'Unread indicators', 'Thread view'],
            ['Open conversation', 'Reply', 'Search thread'],
            'fa-comment-alt'
          ),
          createSubmodule(
            'mentor-messaging-files',
            'File Sharing',
            'Exchange supporting documents without leaving the mentor workflow.',
            ['Upload controls', 'Shared file list', 'Attachment states'],
            ['Share file', 'Review attachments', 'Reference prior uploads'],
            'fa-th'
          )
        ]
      },
      {
        id: 'mentor-settings',
        label: 'Settings',
        icon: 'fa-cog',
        purpose: 'Configure payments, legal documents, calendar preferences, timezone, and notifications.',
        components: [
          'Payment details',
          'Legal documents',
          'Notification preferences',
          'Timezone settings',
          'Calendar integration settings'
        ],
        actions: [
          'Update payment information',
          'Upload legal documents',
          'Configure notifications'
        ],
        children: [
          createSubmodule(
            'mentor-settings-payments',
            'Payments & Legal',
            'Control payout details and required compliance documentation.',
            ['Payment method', 'Legal docs uploader', 'Verification status'],
            ['Update payment info', 'Upload documents', 'Review compliance state'],
            'fa-dollar-sign'
          ),
          createSubmodule(
            'mentor-settings-preferences',
            'Notifications & Calendar',
            'Tune reminders, timezone behavior, and calendar preferences.',
            ['Notification toggles', 'Timezone settings', 'Calendar integration'],
            ['Configure notifications', 'Adjust timezone', 'Manage integration'],
            'fa-clock'
          )
        ]
      },
      {
        id: 'mentor-support',
        label: 'Support',
        icon: 'fa-headset',
        purpose: 'Raise issues, report abuse, and track prior support requests.',
        components: [
          'Ticket submission form',
          'Abuse report form',
          'Past tickets list'
        ],
        actions: [
          'Submit ticket',
          'Report abuse',
          'Review ticket history'
        ],
        children: [
          createSubmodule(
            'mentor-support-tickets',
            'Tickets',
            'Open operational and technical issues with support.',
            ['Ticket form', 'Past ticket list', 'Status view'],
            ['Submit ticket', 'Track resolution', 'Review prior issues'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'mentor-support-abuse',
            'Abuse Reporting',
            'Escalate unsafe or inappropriate mentee behavior.',
            ['Incident form', 'Evidence details', 'Escalation state'],
            ['Report abuse', 'Attach details', 'Escalate incident'],
            'fa-user-shield'
          )
        ]
      }
    ],
    flows: [
      {
        title: 'Profile Setup & Enhancement',
        relatedPages: ['mentor-public-profile'],
        steps: [
          'Public Profile Editor: fill in bio, languages, pricing, and industry tags.',
          'AI Profile Enhancer: review AI suggestions and sharpen differentiation.',
          'Publishing: push the refined profile live for marketplace discovery.'
        ]
      },
      {
        title: 'Availability & Slot Management',
        relatedPages: ['mentor-availability'],
        steps: [
          'Availability Manager: create one-off or recurring slots.',
          'Calendar Sync: connect external calendar rules and resolve conflicts.',
          'Slot operations: update or delete slots while keeping the schedule reliable.'
        ]
      },
      {
        title: 'Booking Request Management',
        relatedPages: ['mentor-dashboard', 'mentor-bookings'],
        steps: [
          'Dashboard: identify new pending requests.',
          'Bookings & Sessions: accept, reject, or reschedule requests.',
          'Upcoming Sessions: confirm bookings and prepare for delivery.'
        ]
      },
      {
        title: 'Session Execution & Notes',
        relatedPages: ['mentor-bookings', 'mentor-workspace'],
        steps: [
          'Bookings & Sessions: launch the meeting from an upcoming booking.',
          'Session Workspace: capture notes and upload resources.',
          'Meeting Summary: submit the final recap and feedback.'
        ]
      },
      {
        title: 'Earnings & Withdrawal',
        relatedPages: ['mentor-earnings'],
        steps: [
          'Earnings Dashboard: review period totals and payout history.',
          'Withdrawal flow: request a payout against the available balance.',
          'Payout tracking: monitor queue status and ETA.'
        ]
      }
    ]
  },
  'sub-admin': {
    label: 'Sub Admin',
    profileName: 'Nina Brooks',
    roleText: 'Program Operations',
    avatarText: 'SB',
    accent: 'var(--mentorunion-teal)',
    screenCount: 7,
    flowCount: 3,
    defaultPage: 'sub-admin-dashboard',
    summary: 'Operate assigned programs with scoped permissions, mentor support, schedule oversight, reports, and participant communications.',
    responsibilities: [
      'Monitor assigned programs and keep mentor operations on track.',
      'Respond to enquiries and scheduling conflicts within permission boundaries.',
      'Communicate with mentors and mentees using templates and reminders.'
    ],
    modules: [
      {
        id: 'sub-admin-dashboard',
        label: 'Dashboard',
        icon: 'fa-home',
        purpose: 'Permission-scoped operating center for assigned programs, enquiries, and daily alerts.',
        components: [
          'Assigned programs list',
          'Session count widget',
          'Pending enquiries count',
          'Quick actions panel',
          'Permission-based rendering'
        ],
        actions: [
          'Navigate to assigned programs',
          'View alerts',
          'Respond to enquiries'
        ],
        children: [
          createSubmodule(
            'sub-admin-dashboard-programs',
            'Assigned Programs',
            'Show the subset of programs the sub-admin is allowed to manage.',
            ['Program list', 'Scoped metrics', 'Access-aware navigation'],
            ['Open program', 'Check status', 'Monitor alerts'],
            'fa-building'
          ),
          createSubmodule(
            'sub-admin-dashboard-alerts',
            'Operational Alerts',
            'Highlight pending work that needs response during daily operations.',
            ['Enquiry count', 'Quick actions', 'Session issue notices'],
            ['Review alert', 'Navigate to queue', 'Resolve blocker'],
            'fa-ticket-alt'
          )
        ]
      },
      {
        id: 'sub-admin-mentors',
        label: 'Mentor Management',
        icon: 'fa-users',
        purpose: 'Manage mentors assigned to scoped programs without exceeding delegated permissions.',
        components: [
          'Assigned mentors list',
          'Mentor status indicators',
          'Session stats per mentor',
          'Slot management controls'
        ],
        actions: [
          'View mentor profiles',
          'Manage slots on behalf of mentor',
          'Reassign mentors',
          'Flag issues'
        ],
        children: [
          createSubmodule(
            'sub-admin-mentors-directory',
            'Assigned Mentor Directory',
            'View the active mentor roster and operational status by program.',
            ['Mentor list', 'Status chips', 'Session metrics'],
            ['Open mentor record', 'Review stats', 'Flag issue'],
            'fa-users'
          ),
          createSubmodule(
            'sub-admin-mentors-slots',
            'Slot Delegation',
            'Handle slot operations when mentors need administrative scheduling support.',
            ['Slot controls', 'Mentor selection', 'Edit tools'],
            ['Create slot', 'Adjust schedule', 'Resolve admin-side issue'],
            'fa-clock'
          )
        ]
      },
      {
        id: 'sub-admin-programs',
        label: 'Program Monitor',
        icon: 'fa-chart-line',
        purpose: 'Track progress, engagement, and delivery health across assigned programs.',
        components: [
          'Program overview cards',
          'Session completion metrics',
          'Mentee progress indicators',
          'Booking pipeline'
        ],
        actions: [
          'Monitor progress',
          'Generate progress reports',
          'Identify at-risk mentees'
        ],
        children: [
          createSubmodule(
            'sub-admin-programs-progress',
            'Progress Tracking',
            'Observe delivery health and participant momentum across programs.',
            ['Progress cards', 'Completion metrics', 'Mentee risk signals'],
            ['Track progress', 'Identify at-risk mentees', 'Escalate issues'],
            'fa-chart-line'
          ),
          createSubmodule(
            'sub-admin-programs-pipeline',
            'Booking Pipeline',
            'See upcoming, pending, and completed activity in one place.',
            ['Pipeline breakdown', 'Status counts', 'Session stage summary'],
            ['Monitor pipeline', 'Spot blockers', 'Drill into delivery state'],
            'fa-calendar'
          )
        ]
      },
      {
        id: 'sub-admin-slots',
        label: 'Slot Management',
        icon: 'fa-clock',
        purpose: 'Scheduling command center for assigned mentors with conflict detection and reminders.',
        components: [
          'Calendar view of assigned mentor slots',
          'Bulk slot editor',
          'Conflict detection alerts'
        ],
        actions: [
          'Create or edit slots for mentors',
          'Resolve conflicts',
          'Send reminders'
        ],
        children: [
          createSubmodule(
            'sub-admin-slots-calendar',
            'Multi-mentor Calendar',
            'View assigned mentors in a shared operational calendar.',
            ['Calendar view', 'Mentor overlays', 'Date controls'],
            ['Create slot', 'Edit slot', 'Review scheduling load'],
            'fa-calendar'
          ),
          createSubmodule(
            'sub-admin-slots-conflicts',
            'Conflict Resolution',
            'Catch and fix overlapping or invalid slot combinations quickly.',
            ['Conflict alerts', 'Resolution suggestions', 'Reminder triggers'],
            ['Resolve conflict', 'Send reminder', 'Adjust affected slot'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'sub-admin-reports',
        label: 'Reports',
        icon: 'fa-history',
        purpose: 'Generate permission-scoped reports for sessions, satisfaction, and mentor activity.',
        components: [
          'Session reports',
          'Mentee satisfaction scores',
          'Mentor activity logs',
          'Permission-aware export controls'
        ],
        actions: [
          'View reports',
          'Export data if permitted',
          'Filter by date and program'
        ],
        children: [
          createSubmodule(
            'sub-admin-reports-sessions',
            'Session Reports',
            'Review booked, completed, and no-show trends by assigned program.',
            ['Session status reports', 'Date filters', 'Program filters'],
            ['View report', 'Filter scope', 'Export CSV or PDF'],
            'fa-calendar'
          ),
          createSubmodule(
            'sub-admin-reports-satisfaction',
            'Satisfaction & Activity',
            'Combine feedback and mentor activity into operational quality views.',
            ['Satisfaction scores', 'Activity logs', 'Permission-aware exports'],
            ['Review quality', 'Track mentor activity', 'Export if allowed'],
            'fa-chart-line'
          )
        ]
      },
      {
        id: 'sub-admin-enquiries',
        label: 'Enquiry Management',
        icon: 'fa-ticket-alt',
        purpose: 'Inbox workflow for participant questions and requests with escalation controls.',
        components: [
          'Enquiry inbox',
          'Thread view',
          'Canned responses library',
          'Escalation button'
        ],
        actions: [
          'Reply to enquiry',
          'Use canned response',
          'Escalate to org admin'
        ],
        children: [
          createSubmodule(
            'sub-admin-enquiries-inbox',
            'Enquiry Inbox',
            'Handle incoming participant requests and track response ownership.',
            ['Inbox list', 'Priority view', 'Thread detail'],
            ['Open enquiry', 'Reply', 'Mark resolved'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'sub-admin-enquiries-templates',
            'Templates & Escalation',
            'Respond quickly using standard replies or escalate when the case exceeds delegated scope.',
            ['Canned responses', 'Escalation action', 'Reply composer'],
            ['Use template', 'Escalate to org admin', 'Send response'],
            'fa-comment-alt'
          )
        ]
      },
      {
        id: 'sub-admin-notifications',
        label: 'Notifications & Reminders',
        icon: 'fa-comment-alt',
        purpose: 'Targeted communication center for reminders, announcements, and scheduled notifications.',
        components: [
          'Notification composer',
          'Recipient selector',
          'Template library',
          'Scheduled send'
        ],
        actions: [
          'Compose notification',
          'Select recipients',
          'Schedule send',
          'View send history'
        ],
        children: [
          createSubmodule(
            'sub-admin-notifications-compose',
            'Composer',
            'Build targeted messages to mentors or mentees.',
            ['Message composer', 'Recipient picker', 'Delivery preview'],
            ['Compose message', 'Choose recipients', 'Send now'],
            'fa-comment-alt'
          ),
          createSubmodule(
            'sub-admin-notifications-scheduled',
            'Templates & Scheduled Sends',
            'Operationalize reminders with reusable templates and planned delivery windows.',
            ['Template library', 'Scheduled list', 'Send history'],
            ['Apply template', 'Schedule send', 'Review history'],
            'fa-history'
          )
        ]
      }
    ],
    flows: [
      {
        title: 'Daily Operations & Enquiry Handling',
        relatedPages: ['sub-admin-dashboard', 'sub-admin-enquiries'],
        steps: [
          'Dashboard: review assigned programs, permissions, and open alerts.',
          'Enquiry Management: open a mentee request and respond with a direct or templated answer.',
          'Dashboard: confirm the enquiry queue is reduced and daily session statuses are clear.'
        ]
      },
      {
        title: 'Slot & Schedule Management',
        relatedPages: ['sub-admin-slots'],
        steps: [
          'Slot Management: review the multi-mentor calendar.',
          'Scheduling controls: create or adjust slots on behalf of assigned mentors.',
          'Conflict handling: resolve clashes and send reminders to impacted users.'
        ]
      },
      {
        title: 'Report Generation',
        relatedPages: ['sub-admin-reports', 'sub-admin-programs'],
        steps: [
          'Reports: select program and date range for a scoped export.',
          'Program Monitor: validate the performance context behind the metrics.',
          'Reports: export the final output if the permission set allows it.'
        ]
      }
    ]
  },
  'org-admin': {
    label: 'Organisation Admin',
    profileName: 'Priya Sharma',
    roleText: 'Organisation Operations',
    avatarText: 'OA',
    accent: 'var(--mentorunion-orange)',
    screenCount: 10,
    flowCount: 3,
    defaultPage: 'org-dashboard',
    summary: 'Set up mentoring programs, manage users and credits, coordinate mentor operations, and run analytics for the organisation.',
    responsibilities: [
      'Design and govern organization-level mentoring programs and policies.',
      'Manage users, credits, billing, scheduling, and mentor availability.',
      'Track analytics, finance, and escalations across the full organization.'
    ],
    modules: [
      {
        id: 'org-dashboard',
        label: 'Dashboard',
        icon: 'fa-home',
        purpose: 'Organisation-wide KPI view with quick actions for setup, invitations, and reporting.',
        components: [
          'Active programs count',
          'Mentor and mentee counts',
          'Session metrics',
          'Revenue overview widget',
          'Credit usage summary',
          'Quick actions'
        ],
        actions: [
          'Navigate to any module',
          'View alerts',
          'Invite users'
        ],
        children: [
          createSubmodule(
            'org-dashboard-kpis',
            'KPI Overview',
            'Surface operational, usage, and revenue health in one place.',
            ['Program count', 'People counts', 'Session and revenue widgets'],
            ['Review metrics', 'Open reports', 'Monitor trends'],
            'fa-chart-line'
          ),
          createSubmodule(
            'org-dashboard-actions',
            'Quick Actions',
            'Reduce setup friction for common admin tasks.',
            ['Invite CTA', 'Create program CTA', 'Report shortcuts'],
            ['Invite users', 'Create program', 'Open reports'],
            'fa-plus'
          )
        ]
      },
      {
        id: 'org-profile',
        label: 'Org Profile',
        icon: 'fa-building',
        purpose: 'Configure the organization brand, profile metadata, cohort descriptors, and public presence.',
        components: [
          'Org profile form',
          'Category, program, and cohort fields',
          'Public page URL and links',
          'Branding options'
        ],
        actions: [
          'Edit org profile',
          'Upload logo',
          'Configure public page',
          'Preview public page'
        ],
        children: [
          createSubmodule(
            'org-profile-branding',
            'Branding',
            'Manage public-facing visuals and organization identity details.',
            ['Name', 'Logo', 'Description', 'Branding options'],
            ['Edit branding', 'Upload logo', 'Save profile'],
            'fa-building'
          ),
          createSubmodule(
            'org-profile-public-page',
            'Public Page',
            'Publish a polished organization entry point for mentors and mentees.',
            ['Public URL', 'Link controls', 'Preview panel'],
            ['Configure page', 'Preview public profile', 'Publish updates'],
            'fa-plus'
          )
        ]
      },
      {
        id: 'org-team-users',
        label: 'Team & Users',
        icon: 'fa-users',
        purpose: 'Manage mentors, mentees, and sub-admins across invitations, roles, and status controls.',
        components: [
          'Searchable user list',
          'Invite form and bulk upload',
          'Role assignment controls',
          'Status indicators',
          'Mentor directory view'
        ],
        actions: [
          'Add or remove users',
          'Assign or change roles',
          'Bulk upload via CSV',
          'Suspend or reactivate users'
        ],
        children: [
          createSubmodule(
            'org-team-users-directory',
            'User Directory',
            'View all people in the organisation with role-aware filters.',
            ['User list', 'Role filters', 'Status indicators'],
            ['Search users', 'Change role', 'Suspend account'],
            'fa-users'
          ),
          createSubmodule(
            'org-team-users-invites',
            'Invites & Bulk Upload',
            'Scale onboarding with invite workflows and CSV ingestion.',
            ['Invite form', 'Bulk upload input', 'Invitation states'],
            ['Invite user', 'Bulk upload CSV', 'Track invite status'],
            'fa-user-plus'
          )
        ]
      },
      {
        id: 'org-program-builder',
        label: 'Program Builder',
        icon: 'fa-th',
        purpose: 'Create, configure, and maintain mentoring programs and onboarding structures.',
        components: [
          'Program list',
          'Program creation wizard',
          'Custom mentor divisions setup',
          'Onboarding flow builder'
        ],
        actions: [
          'Create new program',
          'Edit settings',
          'Archive program',
          'Define onboarding flows'
        ],
        children: [
          createSubmodule(
            'org-program-builder-wizard',
            'Program Wizard',
            'Guide admins through setup for domain, cohort, and industry structure.',
            ['Creation wizard', 'Program attributes', 'Draft state'],
            ['Create program', 'Edit program', 'Archive program'],
            'fa-th'
          ),
          createSubmodule(
            'org-program-builder-onboarding',
            'Onboarding Flows',
            'Define the mentor onboarding requirements program by program.',
            ['Flow builder', 'Legal docs', 'Payment details', 'Timezone and currency'],
            ['Configure onboarding', 'Require documents', 'Save flow'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'org-mentor-program',
        label: 'Mentor Program Setup',
        icon: 'fa-user-shield',
        purpose: 'Set compensation models, engagement terms, rules, and booking constraints for mentors.',
        components: [
          'Payout model selector',
          'Engagement contract templates',
          'Availability rules editor',
          'Booking limits',
          'Cancellation policy editor',
          'Session types'
        ],
        actions: [
          'Set payout model',
          'Send contracts',
          'Define availability rules',
          'Set booking limits',
          'Set cancellation policies'
        ],
        children: [
          createSubmodule(
            'org-mentor-program-payouts',
            'Payout Models',
            'Decide how mentors are compensated inside each program.',
            ['Per-session, salary, marketplace options', 'Contract templates'],
            ['Set payout model', 'Send contracts', 'Review terms'],
            'fa-dollar-sign'
          ),
          createSubmodule(
            'org-mentor-program-rules',
            'Rules & Policies',
            'Establish mentor engagement constraints and scheduling guardrails.',
            ['Availability rules', 'Booking limits', 'Cancellation policy', 'Session types'],
            ['Define rules', 'Set limits', 'Publish policy'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'org-billing',
        label: 'Credits & Billing',
        icon: 'fa-dollar-sign',
        purpose: 'Manage the organization credit pool, spend limits, session pricing, subscription, and invoice history.',
        components: [
          'Org credit balance',
          'Allocate credits tool',
          'Pricing config',
          'Spend limits editor',
          'Subscription plan display',
          'Invoice history',
          'Manual adjustment form and audit logs'
        ],
        actions: [
          'Allocate credits',
          'Set session pricing',
          'Set spend limits',
          'View or download invoices',
          'Adjust credits',
          'Upgrade or downgrade plan',
          'Top-up credits'
        ],
        children: [
          createSubmodule(
            'org-billing-credits',
            'Credits',
            'Control how credits are funded and distributed to users.',
            ['Balance view', 'Allocation tool', 'Manual adjustment controls'],
            ['Allocate credits', 'Adjust balance', 'Top-up credits'],
            'fa-dollar-sign'
          ),
          createSubmodule(
            'org-billing-plans',
            'Plans & Invoices',
            'Track subscriptions, plan changes, and invoice history.',
            ['Current plan', 'Upgrade controls', 'Invoice table'],
            ['Change plan', 'Download invoice', 'Review billing history'],
            'fa-history'
          )
        ]
      },
      {
        id: 'org-availability',
        label: 'Mentor Availability',
        icon: 'fa-clock',
        purpose: 'Oversee mentor slot supply across programs and resolve scheduling issues centrally.',
        components: [
          'Multi-mentor calendar',
          'Slot creation tools',
          'Session type definitions',
          'Conflict alerts'
        ],
        actions: [
          'Create or request slots for mentors',
          'Define session types',
          'Resolve scheduling conflicts'
        ],
        children: [
          createSubmodule(
            'org-availability-calendar',
            'Calendar Oversight',
            'Monitor mentor availability across all active programs.',
            ['Multi-mentor calendar', 'Slot overlays', 'Program switching'],
            ['Create slots', 'Request slots', 'Review capacity'],
            'fa-calendar'
          ),
          createSubmodule(
            'org-availability-types',
            'Session Types & Conflicts',
            'Standardize session formats and keep clashes under control.',
            ['Session type setup', 'Conflict alerts', 'Resolution tools'],
            ['Define session type', 'Resolve conflict', 'Adjust scheduling rule'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'org-analytics',
        label: 'Analytics & Reporting',
        icon: 'fa-chart-line',
        purpose: 'Measure sessions, mentor performance, ratings, usage, and revenue across programs.',
        components: [
          'Sessions dashboard',
          'Mentor performance scorecard',
          'Revenue reports',
          'Credit usage analytics',
          'Rating distribution charts',
          'Export controls',
          'Custom feedback forms'
        ],
        actions: [
          'View analytics',
          'Evaluate mentor performance',
          'Track revenue',
          'Monitor credit usage',
          'Export reports',
          'Create feedback forms'
        ],
        children: [
          createSubmodule(
            'org-analytics-performance',
            'Performance Analytics',
            'Compare mentor and session outcomes through organization-wide scorecards.',
            ['Performance scorecards', 'Session status charts', 'Ratings distribution'],
            ['Evaluate mentors', 'Review trends', 'Export report'],
            'fa-chart-line'
          ),
          createSubmodule(
            'org-analytics-feedback',
            'Feedback Forms',
            'Capture more useful quality signals with organization-specific forms.',
            ['Feedback form builder', 'Question bank', 'Response outputs'],
            ['Create form', 'Edit questions', 'Analyze responses'],
            'fa-comment-alt'
          )
        ]
      },
      {
        id: 'org-finance',
        label: 'Financial Management',
        icon: 'fa-history',
        purpose: 'Track invoice status, payment schedules, subscription state, and revenue share obligations.',
        components: [
          'Invoice list',
          'Upcoming payments',
          'Subscription management',
          'Revenue share tracking'
        ],
        actions: [
          'View invoices',
          'Manage subscriptions',
          'Track revenue shares',
          'Download financial reports'
        ],
        children: [
          createSubmodule(
            'org-finance-invoices',
            'Invoices',
            'Review generated, paid, and overdue invoices in one place.',
            ['Invoice list', 'Status tags', 'Due date schedule'],
            ['View invoice', 'Download invoice', 'Track overdue status'],
            'fa-history'
          ),
          createSubmodule(
            'org-finance-subscriptions',
            'Subscriptions & Revenue Share',
            'Keep plan obligations and revenue-sharing logic transparent.',
            ['Subscription details', 'Revenue share summary', 'Upcoming payment schedule'],
            ['Manage subscription', 'Track revenue share', 'Download report'],
            'fa-dollar-sign'
          )
        ]
      },
      {
        id: 'org-support',
        label: 'Support & Escalation',
        icon: 'fa-headset',
        purpose: 'Handle escalated tickets and abuse reports that require organization-level action.',
        components: [
          'Escalated tickets list',
          'Abuse reports queue',
          'Ticket detail view'
        ],
        actions: [
          'Review escalated tickets',
          'Take action on abuse reports',
          'Communicate with support'
        ],
        children: [
          createSubmodule(
            'org-support-escalations',
            'Escalated Tickets',
            'Resolve issues that were pushed up from delegated admin tiers.',
            ['Escalated list', 'Ticket detail', 'Support communication thread'],
            ['Review ticket', 'Respond to support', 'Resolve escalation'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'org-support-abuse',
            'Abuse Queue',
            'Investigate and act on reports involving policy or safety concerns.',
            ['Abuse report queue', 'Case details', 'Action controls'],
            ['Review report', 'Take action', 'Document response'],
            'fa-user-shield'
          )
        ]
      }
    ],
    flows: [
      {
        title: 'Organization & Program Setup',
        relatedPages: ['org-profile', 'org-program-builder', 'org-mentor-program', 'org-team-users'],
        steps: [
          'Org Profile: establish branding, category, and public organization details.',
          'Program Builder: create program structure, cohorts, and onboarding flow.',
          'Mentor Program Setup and Team & Users: apply mentor rules, then invite users into the configured program.'
        ]
      },
      {
        title: 'Credit Allocation & Billing',
        relatedPages: ['org-billing'],
        steps: [
          'Credits & Billing: review total balance, allocation, and remaining pool.',
          'Allocation tools: distribute credits to students individually or in bulk.',
          'Billing controls: set spend rules, pricing, and subscription behavior.'
        ]
      },
      {
        title: 'Analytics & Financial Reporting',
        relatedPages: ['org-analytics', 'org-finance'],
        steps: [
          'Analytics & Reporting: inspect sessions, mentor performance, and usage patterns.',
          'Exports: generate the required report output for stakeholders.',
          'Financial Management: reconcile invoices, upcoming payments, and subscription state.'
        ]
      }
    ]
  },
  'platform-admin': {
    label: 'Platform Admin',
    profileName: 'Jordan Ellis',
    roleText: 'Platform Operations',
    avatarText: 'PA',
    accent: 'var(--mentorunion-purple)',
    screenCount: 7,
    flowCount: 3,
    defaultPage: 'platform-dashboard',
    summary: 'Run cross-organization operations, support org onboarding, maintain mentor quality, and launch platform-wide communications.',
    responsibilities: [
      'Support organization activation and identify health risks early.',
      'Protect marketplace quality by reviewing mentor performance across orgs.',
      'Handle escalations, campaigns, and cross-org reporting.'
    ],
    modules: [
      {
        id: 'platform-dashboard',
        label: 'Dashboard',
        icon: 'fa-home',
        purpose: 'Global operations home screen for org health, onboarding, quality alerts, ticket queues, and campaign visibility.',
        components: [
          'Active org count',
          'Total sessions',
          'Onboarding pipeline',
          'Quality alerts',
          'Support queue summary',
          'Campaign performance summary'
        ],
        actions: [
          'Navigate to any module',
          'View critical alerts',
          'Access any organization'
        ],
        children: [
          createSubmodule(
            'platform-dashboard-health',
            'Platform Health',
            'Give platform operators a real-time health readout across all organizations.',
            ['Org count', 'Session volume', 'Quality alerts', 'Support summary'],
            ['Review alerts', 'Open org', 'Inspect campaign impact'],
            'fa-chart-line'
          ),
          createSubmodule(
            'platform-dashboard-onboarding',
            'Onboarding Pipeline',
            'Track the org activation path from signup to first session.',
            ['Pipeline view', 'Activation state', 'Org access shortcut'],
            ['Review onboarding', 'Open org detail', 'Take action'],
            'fa-building'
          )
        ]
      },
      {
        id: 'platform-org-success',
        label: 'Org Success Management',
        icon: 'fa-building',
        purpose: 'Monitor organization onboarding, activation, health indicators, and growth opportunities.',
        components: [
          'Org list with health indicators',
          'Onboarding progress tracker',
          'Activation metrics',
          'Upgrade suggestion engine',
          'Org detail view'
        ],
        actions: [
          'Track onboarding progress',
          'View activation metrics',
          'Suggest plan upgrades',
          'Contact org admins'
        ],
        children: [
          createSubmodule(
            'platform-org-success-onboarding',
            'Onboarding Tracking',
            'Measure whether each org is making progress toward activation milestones.',
            ['Progress tracker', 'Checklist states', 'Activation signals'],
            ['Track onboarding', 'Review milestone gaps', 'Contact org admin'],
            'fa-building'
          ),
          createSubmodule(
            'platform-org-success-growth',
            'Health & Growth',
            'Spot expansion opportunities and risk signals across orgs.',
            ['Health indicators', 'Upgrade suggestions', 'Activation metrics'],
            ['Suggest upgrade', 'Monitor risk', 'Open org deep dive'],
            'fa-chart-line'
          )
        ]
      },
      {
        id: 'platform-mentor-quality',
        label: 'Mentor Quality Control',
        icon: 'fa-user-shield',
        purpose: 'Approve mentor profiles and maintain platform quality standards across all organizations.',
        components: [
          'Mentor approval queue',
          'Quality scoring dashboard',
          'Underperforming mentor list',
          'Profile review tool',
          'Bulk approval controls'
        ],
        actions: [
          'Approve or reject mentor profiles',
          'Review quality scores',
          'Flag underperformers',
          'Suspend mentor profiles',
          'Send improvement notices'
        ],
        children: [
          createSubmodule(
            'platform-mentor-quality-approvals',
            'Approval Queue',
            'Review pending mentor profiles before they go live.',
            ['Approval queue', 'Profile review view', 'Bulk actions'],
            ['Approve profile', 'Reject profile', 'Request edits'],
            'fa-user-shield'
          ),
          createSubmodule(
            'platform-mentor-quality-performance',
            'Quality Scores',
            'Track ratings, completion, and risk factors for marketplace quality control.',
            ['Quality dashboard', 'Flagged list', 'Improvement notices'],
            ['Review scores', 'Flag underperformer', 'Suspend mentor'],
            'fa-chart-line'
          )
        ]
      },
      {
        id: 'platform-support',
        label: 'Support & Escalations',
        icon: 'fa-headset',
        purpose: 'Manage platform-wide support tickets with SLA visibility and escalation rules.',
        components: [
          'Ticket management dashboard',
          'Auto-escalation rules editor',
          'SLA tracking board',
          'Communication thread',
          'Priority queue'
        ],
        actions: [
          'Manage tickets',
          'Configure escalation rules',
          'Track SLA compliance',
          'Resolve tickets',
          'Escalate to Super Admin'
        ],
        children: [
          createSubmodule(
            'platform-support-queue',
            'Ticket Queue',
            'Run a unified queue for platform-impacting support cases.',
            ['Priority queue', 'Ticket dashboard', 'Case detail thread'],
            ['Open case', 'Resolve ticket', 'Escalate case'],
            'fa-ticket-alt'
          ),
          createSubmodule(
            'platform-support-sla',
            'Escalation Rules & SLA',
            'Maintain service quality with formal escalation triggers and response timers.',
            ['Rules editor', 'SLA board', 'Response metrics'],
            ['Edit escalation rule', 'Track SLA', 'Escalate to super admin'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'platform-campaigns',
        label: 'Campaigns & Communication',
        icon: 'fa-comment-alt',
        purpose: 'Create platform-wide email and in-app campaigns targeted by org, role, activity, or credit status.',
        components: [
          'Campaign builder',
          'Recipient targeting',
          'Template library',
          'Scheduled campaigns list',
          'Alert rule builder'
        ],
        actions: [
          'Create campaign',
          'Send bulk notifications',
          'Schedule campaigns',
          'Configure automated alerts',
          'Track campaign metrics'
        ],
        children: [
          createSubmodule(
            'platform-campaigns-builder',
            'Campaign Builder',
            'Design coordinated platform communications using reusable templates and segmentation.',
            ['Builder', 'Recipient targeting', 'Template library'],
            ['Create campaign', 'Select audience', 'Send or schedule'],
            'fa-comment-alt'
          ),
          createSubmodule(
            'platform-campaigns-alerts',
            'Automated Alerts',
            'Trigger communications from low credits, inactivity, and platform conditions.',
            ['Alert rules', 'Scheduled campaigns', 'Metric tracking'],
            ['Configure alerts', 'Monitor metrics', 'Refine automation'],
            'fa-bolt'
          )
        ]
      },
      {
        id: 'platform-directory',
        label: 'Mentor Directory',
        icon: 'fa-users',
        purpose: 'Search and inspect mentors across every organization from a global operational perspective.',
        components: [
          'Searchable mentor list',
          'Filters by org, domain, status, and rating',
          'Mentor detail cards'
        ],
        actions: [
          'Search mentors',
          'Filter mentors',
          'View mentor profiles',
          'Take administrative action'
        ],
        children: [
          createSubmodule(
            'platform-directory-search',
            'Search & Filters',
            'Locate mentors across orgs by operational or quality criteria.',
            ['Search bar', 'Advanced filters', 'Directory results'],
            ['Search mentor', 'Filter by org', 'Open profile'],
            'fa-users'
          ),
          createSubmodule(
            'platform-directory-actions',
            'Administrative Actions',
            'Take moderation or support action directly from the global directory.',
            ['Mentor card detail', 'Operational status', 'Action controls'],
            ['Review profile', 'Take action', 'Escalate concern'],
            'fa-user-shield'
          )
        ]
      },
      {
        id: 'platform-reports',
        label: 'Reports & Analytics',
        icon: 'fa-chart-line',
        purpose: 'Aggregate cross-org performance, usage, and rating trends into exportable reports.',
        components: [
          'Session completion analytics',
          'Rating distribution analytics',
          'Usage metrics across orgs',
          'Export tools'
        ],
        actions: [
          'View cross-org analytics',
          'Filter by program, industry, or organization',
          'Export data'
        ],
        children: [
          createSubmodule(
            'platform-reports-performance',
            'Cross-org Performance',
            'Compare delivery and satisfaction metrics across organizational boundaries.',
            ['Completion analytics', 'Usage trends', 'Cross-org comparison'],
            ['Review analytics', 'Filter scope', 'Export report'],
            'fa-chart-line'
          ),
          createSubmodule(
            'platform-reports-export',
            'Export Controls',
            'Package platform reporting outputs for stakeholders.',
            ['Export tools', 'Scope filters', 'Format selection'],
            ['Select filters', 'Export data', 'Download file'],
            'fa-history'
          )
        ]
      }
    ],
    flows: [
      {
        title: 'Org Onboarding & Success Tracking',
        relatedPages: ['platform-org-success', 'platform-campaigns'],
        steps: [
          'Org Success Management: review a new organization entering the onboarding pipeline.',
          'Activation tracking: measure mentor onboarding and first-session readiness.',
          'Campaigns & Communication: send nudges or upgrade suggestions based on activation health.'
        ]
      },
      {
        title: 'Mentor Quality Control',
        relatedPages: ['platform-mentor-quality'],
        steps: [
          'Mentor Quality Control: review pending profiles in the approval queue.',
          'Quality scoring: inspect ratings and completion metrics after approval.',
          'Corrective action: flag underperformers and trigger improvement or suspension actions.'
        ]
      },
      {
        title: 'Support & Escalation Management',
        relatedPages: ['platform-support'],
        steps: [
          'Support & Escalations: prioritize the escalated queue by SLA pressure.',
          'Ticket detail: inspect history and communication threads.',
          'Resolution path: close the case or escalate it upward to Super Admin.'
        ]
      }
    ]
  },
  'super-admin': {
    label: 'Super Admin',
    profileName: 'Avery Cole',
    roleText: 'System Owner',
    avatarText: 'SA',
    accent: 'var(--mentorunion-red)',
    screenCount: 8,
    flowCount: 4,
    defaultPage: 'super-dashboard',
    summary: 'Control global business operations, org lifecycle, platform configuration, risk, permissions, and data exports across the SaaS.',
    responsibilities: [
      'Govern organizations, plans, modules, and critical integrations.',
      'Monitor risk, compliance, finance, and audit signals platform-wide.',
      'Control roles, permissions, and enterprise-grade data operations.'
    ],
    modules: [
      {
        id: 'super-dashboard',
        label: 'Platform Overview Dashboard',
        icon: 'fa-home',
        purpose: 'Top-level SaaS command center for revenue, platform health, activity, and churn risk.',
        components: [
          'MRR and ARR displays',
          'Session volume trend chart',
          'Credit consumption trends',
          'Global mentor and mentee activity map',
          'Active org count',
          'Churn risk indicators'
        ],
        actions: [
          'View business metrics',
          'Drill into any metric',
          'Navigate to any module'
        ],
        children: [
          createSubmodule(
            'super-dashboard-business',
            'Business Metrics',
            'Track the commercial performance of the entire SaaS platform.',
            ['MRR', 'ARR', 'Revenue trends', 'Session volume'],
            ['Review metrics', 'Drill into trend', 'Compare periods'],
            'fa-chart-line'
          ),
          createSubmodule(
            'super-dashboard-health',
            'Platform Health',
            'Spot risk and activation issues before they become systemic.',
            ['Activity map', 'Org count', 'Churn indicators'],
            ['Monitor health', 'Open risk area', 'Navigate to owning module'],
            'fa-user-shield'
          )
        ]
      },
      {
        id: 'super-org-lifecycle',
        label: 'Org Lifecycle Management',
        icon: 'fa-building',
        purpose: 'Create, approve, plan, suspend, and monitor organizations across their full lifecycle.',
        components: [
          'Org list',
          'Org creation and approval form',
          'Plan and seat limit assignment',
          'Credit override tool',
          'Org health view',
          'Suspension controls'
        ],
        actions: [
          'Create, approve, or suspend orgs',
          'Assign plans and seat limits',
          'Override credits',
          'View org health',
          'Contact org admins'
        ],
        children: [
          createSubmodule(
            'super-org-lifecycle-approvals',
            'Approvals & Plans',
            'Provision organizations with the right lifecycle state and commercial terms.',
            ['Approval form', 'Plan assignment', 'Seat limits'],
            ['Approve org', 'Assign plan', 'Adjust seats'],
            'fa-building'
          ),
          createSubmodule(
            'super-org-lifecycle-health',
            'Org Health',
            'Evaluate activation, churn risk, and intervention needs.',
            ['Health view', 'Activation metrics', 'Suspension controls'],
            ['Review health', 'Contact org admin', 'Suspend org'],
            'fa-chart-line'
          )
        ]
      },
      {
        id: 'super-system-monitoring',
        label: 'System Monitoring',
        icon: 'fa-cog',
        purpose: 'Configure feature flags, plans, integrations, API keys, and module enablement across the platform.',
        components: [
          'Feature flags manager',
          'Plan configuration editor',
          'Integration management panel',
          'API keys management',
          'Module enablement per plan',
          'Error rate monitoring dashboard'
        ],
        actions: [
          'Toggle feature flags',
          'Edit plan configuration',
          'Manage integrations',
          'Generate or revoke API keys',
          'Enable or disable modules per plan',
          'Monitor error rates'
        ],
        children: [
          createSubmodule(
            'super-system-monitoring-flags',
            'Feature Flags & Plans',
            'Change product capability and entitlement rules without redeploying.',
            ['Feature flags', 'Plan editor', 'Module enablement'],
            ['Toggle flag', 'Edit plan', 'Enable module'],
            'fa-bolt'
          ),
          createSubmodule(
            'super-system-monitoring-integrations',
            'Integrations & API Keys',
            'Maintain external service connectivity and secure platform access.',
            ['Integration panel', 'API key manager', 'Error monitoring'],
            ['Manage integration', 'Revoke key', 'Monitor errors'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'super-risk',
        label: 'Risk & Compliance',
        icon: 'fa-user-shield',
        purpose: 'Central risk, compliance, abuse, suspicious activity, and audit monitoring command center.',
        components: [
          'Abuse reports queue',
          'Compliance flags dashboard',
          'Suspicious activity alerts',
          'High error endpoint monitoring',
          'Audit logs viewer'
        ],
        actions: [
          'Review abuse reports',
          'Manage compliance flags',
          'Investigate suspicious activity',
          'Monitor system errors',
          'Export audit logs'
        ],
        children: [
          createSubmodule(
            'super-risk-abuse',
            'Abuse & Suspicious Activity',
            'Investigate incidents that threaten trust or violate policy.',
            ['Abuse queue', 'Suspicious alerts', 'Investigation detail'],
            ['Review report', 'Take action', 'Escalate severity'],
            'fa-user-shield'
          ),
          createSubmodule(
            'super-risk-audit',
            'Compliance & Audit',
            'Track control exceptions and preserve full audit visibility.',
            ['Compliance flags', 'Audit log viewer', 'Endpoint error monitor'],
            ['Manage flag', 'Export logs', 'Inspect system issue'],
            'fa-history'
          )
        ]
      },
      {
        id: 'super-finance',
        label: 'Revenue & Finance Control',
        icon: 'fa-dollar-sign',
        purpose: 'Oversee global revenue, failed payments, disputes, invoice overrides, and spend policies.',
        components: [
          'Global revenue dashboard',
          'Failed payments tracker',
          'Refund and dispute management queue',
          'Invoice system',
          'Top-up history tracker',
          'Spend limits overview'
        ],
        actions: [
          'View global revenue',
          'Track failed payments',
          'Process refunds and disputes',
          'Override invoices',
          'Set global spend limits'
        ],
        children: [
          createSubmodule(
            'super-finance-revenue',
            'Revenue Operations',
            'Track performance and operational issues within monetization flows.',
            ['Revenue dashboard', 'Failed payments', 'Top-up history'],
            ['Review revenue', 'Track failed payment', 'Adjust finance settings'],
            'fa-dollar-sign'
          ),
          createSubmodule(
            'super-finance-disputes',
            'Disputes & Invoices',
            'Handle financial exceptions with auditability and control.',
            ['Refund queue', 'Dispute queue', 'Invoice override tools', 'Spend limits'],
            ['Process refund', 'Override invoice', 'Set spend limit'],
            'fa-history'
          )
        ]
      },
      {
        id: 'super-permissions',
        label: 'Role & Permission Manager',
        icon: 'fa-user-shield',
        purpose: 'Design and maintain platform-wide roles, permission matrices, assignments, and audits.',
        components: [
          'Role list',
          'Permission matrix editor',
          'Role assignment tool',
          'Bulk role operations'
        ],
        actions: [
          'Create, edit, or delete roles',
          'Assign permissions',
          'Bulk assign roles',
          'Audit assignments'
        ],
        children: [
          createSubmodule(
            'super-permissions-roles',
            'Role Definitions',
            'Model the available access archetypes used across the platform.',
            ['Role list', 'Create role form', 'Edit controls'],
            ['Create role', 'Edit role', 'Delete role'],
            'fa-user-shield'
          ),
          createSubmodule(
            'super-permissions-matrix',
            'Permission Matrix',
            'Apply precise access control across modules and operations.',
            ['Matrix editor', 'Assignment tool', 'Audit records'],
            ['Assign permissions', 'Bulk assign roles', 'Audit assignments'],
            'fa-cog'
          )
        ]
      },
      {
        id: 'super-directory',
        label: 'Mentor Directory',
        icon: 'fa-users',
        purpose: 'Search the full mentor population across the SaaS with bulk administrative controls.',
        components: [
          'All mentors across orgs',
          'Advanced filters',
          'Bulk action tools'
        ],
        actions: [
          'Search any mentor',
          'Take administrative action',
          'Export directory'
        ],
        children: [
          createSubmodule(
            'super-directory-search',
            'Global Search',
            'Locate mentors across every tenant and filter by risk or quality signal.',
            ['All-mentor list', 'Advanced filters', 'Search field'],
            ['Search mentor', 'Filter list', 'Open record'],
            'fa-users'
          ),
          createSubmodule(
            'super-directory-bulk',
            'Bulk Actions',
            'Scale oversight operations from a single global directory.',
            ['Bulk action toolbar', 'Export control', 'Selection state'],
            ['Take bulk action', 'Export directory', 'Escalate record'],
            'fa-plus'
          )
        ]
      },
      {
        id: 'super-export-center',
        label: 'Data Export Center',
        icon: 'fa-history',
        purpose: 'Centralized export hub for sessions, users, financials, and analytics across the platform.',
        components: [
          'Export type selector',
          'Date range and scope filters',
          'Format selector',
          'Scheduled export configuration'
        ],
        actions: [
          'Run ad-hoc exports',
          'Schedule recurring exports',
          'Download exports'
        ],
        children: [
          createSubmodule(
            'super-export-center-adhoc',
            'Ad-hoc Exports',
            'Generate one-time data extracts when immediate analysis is needed.',
            ['Type selector', 'Scope filters', 'Format picker'],
            ['Run export', 'Choose format', 'Download file'],
            'fa-history'
          ),
          createSubmodule(
            'super-export-center-scheduled',
            'Scheduled Exports',
            'Automate repeatable data delivery for ongoing reporting needs.',
            ['Recurring configuration', 'Schedule list', 'Saved outputs'],
            ['Schedule export', 'Adjust cadence', 'Download prior export'],
            'fa-calendar'
          )
        ]
      }
    ],
    flows: [
      {
        title: 'Org Lifecycle Management',
        relatedPages: ['super-org-lifecycle'],
        steps: [
          'Org Lifecycle Management: review incoming organization application details.',
          'Approval and plan assignment: activate the org with seats and limits.',
          'Health controls: monitor activation and suspend the org if policy violations occur.'
        ]
      },
      {
        title: 'System Configuration & Feature Flags',
        relatedPages: ['super-system-monitoring'],
        steps: [
          'System Monitoring: enable or disable platform features per plan.',
          'Plan configuration: change limits and pricing for affected organizations.',
          'Integrations and API access: manage external services and monitor error rates.'
        ]
      },
      {
        title: 'Revenue & Finance Operations',
        relatedPages: ['super-finance'],
        steps: [
          'Revenue & Finance Control: inspect global revenue and failed payments.',
          'Disputes and invoices: process refunds or invoice overrides as needed.',
          'Spend policy: keep financial governance aligned across organizations.'
        ]
      },
      {
        title: 'Risk & Compliance Investigation',
        relatedPages: ['super-risk'],
        steps: [
          'Risk & Compliance: review abuse and suspicious activity signals.',
          'Investigation: inspect audit logs, activity patterns, and related endpoints.',
          'Response: warn, suspend, or ban while preserving an auditable trail.'
        ]
      }
    ]
  }
};

export const roles = ROLE_ORDER.reduce((acc, roleId) => {
  const role = ROLE_ARCHITECTURE[roleId];
  acc[roleId] = {
    name: role.profileName,
    roleText: role.roleText,
    avatarText: role.avatarText
  };
  return acc;
}, {});

export const getDefaultPageForRole = (roleId) => ROLE_ARCHITECTURE[roleId]?.defaultPage || 'super-dashboard';

export const findPageConfig = (roleId, pageId) => {
  const role = ROLE_ARCHITECTURE[roleId];

  if (!role) {
    return {
      role: ROLE_ARCHITECTURE['super-admin'],
      page: ROLE_ARCHITECTURE['super-admin'].modules[0],
      parent: null
    };
  }

  for (const module of role.modules) {
    if (module.id === pageId) {
      return { role, page: module, parent: null };
    }

    const child = module.children?.find((item) => item.id === pageId);
    if (child) {
      return { role, page: child, parent: module };
    }
  }

  return { role, page: role.modules[0], parent: null };
};

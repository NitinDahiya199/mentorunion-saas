# MentorUnion SaaS - React Frontend

A modern React-based frontend for the MentorUnion SaaS Mentoring Platform.

## Features

- **Multi-role Dashboard**: Support for Super Admin, Platform Admin, Org Admin, Mentor, and Mentee roles
- **Session Management**: Complete session booking flow with multi-step wizard
- **Real-time Call Interface**: Live call simulation with timer
- **Automated Billing**: View invoices and payouts
- **Responsive Design**: Modern dark theme with beautiful UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header/          # Header component with role switcher
│   ├── Sidebar/         # Navigation sidebar
│   ├── MainContent/     # Main content area with page routing
│   ├── Pages/           # Page components
│   │   ├── SuperAdminDashboard/
│   │   ├── OrgAdminDashboard/
│   │   ├── PlatformAdminDashboard/
│   │   ├── SessionBooking/
│   │   ├── JoinCall/
│   │   └── BillingPayouts/
│   └── Modals/          # Modal components
│       ├── CreateOrgModal/
│       └── SessionOutcomeModal/
├── context/
│   └── AppContext.js    # Global state management
├── App.js               # Main app component
├── index.js             # Entry point
└── styles.css           # Global styles
```

## Key Technologies

- **React 18**: Modern React with hooks
- **Context API**: State management
- **CSS Variables**: Theming system
- **Font Awesome**: Icons

## Available Scripts

- `npm start`: Start development server
- `npm build`: Create production build
- `npm test`: Run tests
- `npm eject`: Eject from Create React App (irreversible)

## License

MIT

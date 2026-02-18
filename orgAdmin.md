MENTORUNION – ORG ADMIN SYSTEM ARCHITECTURE DOCUMENTATION

This document provides a comprehensive and in-depth explanation of the
MentorUnion Org Admin architecture diagram. It describes all modules,
submodules, functional flows, governance controls, reporting systems,
financial structures, and configuration capabilities available to the
Organization Admin role.

  -------------
  1. OVERVIEW
  -------------

The Org Admin panel is a centralized control system designed for
managing mentors, mentees, programs, financial credits, billing,
reporting, governance policies, and operational analytics within a
specific organization on the MentorUnion platform.

The structure follows:

Org Admin → All Modules → Primary Modules (1–14) → Submodules → Tables /
Metrics → Action Controls → Business Rules & Policies

The system is enterprise-ready and designed to support multi-cohort,
multi-program organizational control.

  ---------------------
  2. DASHBOARD (HOME)
  ---------------------

Purpose: The Dashboard acts as the intelligence and operational control
center for the organization.

Includes:

A)  Data Reports

-   Open Slots
-   Used Slots
-   Completed Sessions
-   Rescheduled Sessions
-   Cancelled Sessions
-   No Shows

These provide real-time operational health metrics of session activity.

B)  Call Records Overview

-   All Calls
-   Upcoming Calls
-   Ongoing Calls
-   Past Calls (Download available only for “All”)

C)  Agenda-Based Call Records

-   Agenda Title
-   Total Calls per Agenda

D)  Domain-Based Call Records

-   Domain Name
-   Total Calls per Domain

E)  Mentor Earnings Overview

-   Earnings per Hour
-   Earnings per Call

F)  New Users Added

-   Mentors Added
-   Mentees Added

Strategic Role: The dashboard serves as a Business Intelligence layer
combining operational tracking, engagement analytics, financial
summaries, and domain performance metrics.

  ------------------------
  3. CALL RECORDS MODULE
  ------------------------

Subsections: - All - Upcoming - Ongoing - Past

Capabilities: - Monitor lifecycle of mentorship sessions - Track
attendance and outcomes - Export historical data - Filter by status

This module ensures operational transparency and compliance tracking.

  ---------------------------------
  4. DOMAIN & CATEGORY MANAGEMENT
  ---------------------------------

Org Admin can: - Add / Edit / Delete Domains - Add / Edit / Delete
Categories - Add Sub-categories

Purpose: - Maintain structured taxonomy - Improve mentor
discoverability - Align reporting with domains

This module impacts search optimization and structured analytics.

  -------------------
  5. MENTORS MODULE
  -------------------

Subsections:

A)  All Mentors

-   Historical slot details
-   Export analytics dashboard

B)  Add Mentor in Organization

-   Assign mentor to organization
-   Map mentor to specific programs

C)  Add Mentor (Platform Level)

Advanced Controls: - Profile keyword structure - Mentor–Mentee–Admin
profile mapping - Visibility control per cohort or school -
Section/block management within profiles

Strategic Purpose: Provides organizational control over mentor
onboarding, classification, analytics, and visibility governance.

  -------------------
  6. MENTEES MODULE
  -------------------

Subsections: - All Mentees - Add Mentee

Capabilities: - Modify and extract data - Download impact analytics -
Manage mentor-program access

This module supports engagement tracking and access governance.

  -----------------
  7. BLOCKED LOGS
  -----------------

Includes: - Blocked Details → Blocked Mentees → All Logs

Purpose: - Enforce platform discipline - Track violations - Maintain
governance records

  -------------------
  8. ALL PROGRAMMES
  -------------------

Subsections: - Program Cards - Add Program

Additional Capability: - Multi-Organization Cohort Management

Purpose: - Organize mentorship programs - Segment users by cohorts -
Support enterprise onboarding models

  -------------------
  9. MANAGE CREDITS
  -------------------

Subsections: - Credits Count - Credits Table

Advanced Controls: - Manual credit edits - Bulk credit assignments -
Audit logs - Program-based renewal logic

Credits determine booking eligibility and session access. This module
acts as an access control and financial entitlement engine.

  --------------
  10. BILLINGS
  --------------

Subsections: - Billings Count - Billings Table

Mentor Earnings Panel: - View earnings - Track by timeframe - Filter by
program - Export reports

Purpose: - Financial transparency - Revenue tracking - Organizational
billing oversight

  ----------------------
  11. PRO-BONO MENTORS
  ----------------------

Connected to Resource Hub Management: - Upload SOPs - Upload Handbooks -
FAQs - Visibility controls

Purpose: Manage volunteer or special mentor segments separately with
structured resource governance.

  --------------------------
  12. CONFIGURATION MODULE
  --------------------------

A)  Feedback Management

-   Mentors
-   Mentees
-   Create Feedback

B)  Agenda-Specific Questions

-   Agenda Table
-   Create Agenda Questions

C)  Policy Tuning Panel

-   Cancellation rules
-   Reschedule rules
-   No-show rules
-   Adjustable without code changes

D)  Buffer Logic Control

-   Mentor buffer customization
-   Automated notifications

Purpose: This module functions as the governance and system-control
brain, allowing rule adjustments without developer intervention.

  --------------
  13. SETTINGS
  --------------

Includes: - My Profile - Profile Details - Edit Profile - Manage
Organization Details - Change Password - Reset

Communication Engine: - Email + WhatsApp integration - Bulk messaging -
Personalization tools - Message logs

Purpose: Admin identity management and communication oversight.

  ---------------------
  14. SUPPORT TICKETS
  ---------------------

Structure: - Support Tickets - Support Ticket Table

Includes: - AI-based first-level query resolution

Purpose: Automated support intake and escalation management.

  -------------
  15. LOG OUT
  -------------

Session termination and secure exit functionality.

  ------------------------
  SYSTEM CHARACTERISTICS
  ------------------------

This Org Admin architecture functions as a hybrid of:

-   Learning Management System (LMS)
-   Mentorship Marketplace
-   Booking Engine
-   Financial Tracking System
-   Governance & Policy Control System
-   Enterprise SaaS Admin Panel

It supports:

-   Multi-cohort control
-   Financial auditing
-   Analytics export
-   Policy configuration without code
-   Deep operational monitoring
-   Credit-based entitlement logic

  -----------------
  END OF DOCUMENT
  -----------------

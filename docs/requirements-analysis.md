# Requirements Analysis: IT Help Desk Ticketing System

1. Problem: Campus IT problem reports sent via paper/messages get lost, with no clear tracking of issue urgency or technician assignment.
2. Target Users: Campus Staff & Students (ticket submitters) and IT Technicians (ticket resolvers).
3. Functional Requirements: Auto-generate ticket IDs (TKT-0001); submit tickets; enforce strict status state machine (Open -> In Progress -> Resolved -> Closed, with Resolved -> In Progress allowed); enforce technician assignment before 'In Progress'; attach notes (newest first); track resolution duration in days; search/filter/sort tickets; render stats dashboard; persist data via localStorage.
4. Required Inputs: Requester Name, Category (Hardware, Network, Software, Account), Description, Priority (Low, Medium, High, Critical), Technician Selection, Note Text & Author.
5. Expected Outputs: Ticket list with dynamic filters/sorting, ticket detail view with notes timeline, dynamic metrics dashboard (tickets per status, unassigned open tickets count, days-to-resolve calculation).
6. Proposed Features:
   - Automated ID generation (TKT-0001+)
   - Strict status transition engine with user alert messages on invalid jumps
   - Notes thread ordered newest-first
   - Real-time search, category/priority/status filters, and priority/date sorting
   - Dashboard counting total/status metrics & unassigned open tickets
   - LocalStorage persistence engine
7. Tools and Technologies: HTML5, CSS3, JavaScript (ES6+), Git/GitHub, ChatGPT / Claude Code / Codex.

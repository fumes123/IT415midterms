# Campus IT Help Desk Ticketing System (IT415 Midterm)

A vanilla HTML5, CSS3, and JavaScript (ES6+) web application designed for campus IT offices to log, assign, track, and resolve IT service tickets efficiently.

## Features Built
- **Automated ID Generation:** Sequential ticket IDs (\TKT-0001+\).
- **Strict State Machine:** State sequence enforced (\Open\ -> \In Progress\ -> \Resolved\ -> \Closed\, with \Resolved\ -> \In Progress\ allowed for reopened tickets).
- **Technician Assignment Checks:** Enforces technician assignment before moving tickets to \In Progress\.
- **Notes & History Thread:** Real-time updates ordered newest-first.
- **Search, Filter & Sort:** Instant filtering across search queries, status, category, priority, and assigned technician.
- **Dashboard Metrics:** Real-time summary cards counting tickets per status and unassigned open tickets.
- **Data Persistence:** Built-in \localStorage\ engine.

## Project Structure
\\\	ext
IT415midterms/
+-- index.html
+-- css/
¦   +-- style.css
+-- js/
¦   +-- app.js
+-- docs/
¦   +-- requirements-analysis.md
¦   +-- ai-prompt-log.md
¦   +-- screenshots/
+-- README.md
\\\

## How to Run
1. Clone the repository:
   \\\ash
   git clone https://github.com/fumes123/IT415midterms.git
   \\\
2. Open \index.html\ directly in any modern Web Browser (Google Chrome, Microsoft Edge, Firefox).
3. Fill out the form to submit tickets and manage status updates through the interactive table and modal views.

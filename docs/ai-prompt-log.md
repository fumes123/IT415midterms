# AI-Assisted Development Documentation & Prompt Log

---

### Prompt #1
**Tool:** ChatGPT / Claude Code / Codex  
**Purpose:** Architecture setup & Project scaffolding  

#### 1. Prompt I used:
> **Context:** I am building a client-side IT Help Desk Ticketing System in vanilla HTML, CSS, and JavaScript for an IT415 midterm exam. Data must persist in localStorage.  
> **Objective:** Setup project repository scaffolding, folder structure, and initial documentation files.  
> **Requirements:** Define folder structure containing \css/\, \js/\, and \docs/screenshots/\, alongside initial documentation templates.  
> **Constraints:** Standard file layout without heavy build tooling.  
> **Expected Output:** Project directories and markdown files initialized.

#### 2. AI's answer:
Provided terminal instructions tailored for PowerShell to instantiate \css/\, \js/\, \docs/\, \README.md\, \equirements-analysis.md\, and \i-prompt-log.md\.

#### 3. My evaluation:
The structure aligns with the required exam directory layout. The initial terminal command using Linux syntax (\mkdir -p\) failed in PowerShell, so I adjusted it using PowerShell native syntax (\New-Item\).

#### 4. What I changed:
Replaced \mkdir -p\ with PowerShell's \New-Item -ItemType Directory\ command to successfully build the folder structure on Windows.

---

### Prompt #2
**Tool:** ChatGPT / Claude Code / Codex  
**Purpose:** Application Interface Generation  

#### 1. Prompt I used:
> **Context:** Building the frontend interface for an IT Help Desk Ticketing System using vanilla HTML and CSS.  
> **Objective:** Create a dark-themed, responsive dashboard, ticket form, filter panel, table view, and detail modal.  
> **Requirements:** Include form fields for requester, category, priority, description; stats dashboard cards; filter dropdowns; and a modal for ticket detail notes/status changes.  
> **Constraints:** Clean modern design using CSS variables matching GitHub dark theme styling without third-party frameworks.  
> **Expected Output:** Fully structured \index.html\ and standalone \css/style.css\.

#### 2. AI's answer:
Generated complete HTML structure with structured forms, table grids, modal placeholders, and full dark-theme responsive CSS styling.

#### 3. My evaluation:
The markup covers all requirements from Scenario 2, including modal overlays for ticket details, note entries, and filtering menus.

#### 4. What I changed:
Adjusted grid layouts to accommodate mobile viewport scaling and added color-coded status/priority CSS badge utilities.

---

### Prompt #3
**Tool:** ChatGPT / Claude Code / Codex  
**Purpose:** Core Application Functionality & LocalStorage  

#### 1. Prompt I used:
> **Context:** Developing js/app.js for the IT Help Desk Ticketing System.  
> **Objective:** Implement auto-increment ticket IDs (TKT-0001), ticket creation, notes system (newest first), search/filtering/sorting engine, and stats dashboard metrics[cite: 3].  
> **Requirements:** Data must persist across browser reloads using localStorage. Generate IDs dynamically and render statistics dynamically[cite: 3].  
> **Constraints:** Plain ES6 JavaScript, no external state libraries[cite: 2].  
> **Expected Output:** Working JavaScript code managing CRUD operations and dynamic DOM table rendering[cite: 2, 3].

#### 2. AI's answer:
Provided js/app.js logic with state persistence helpers (saveState), ticket ID generator, array filtering, and DOM event handlers[cite: 2, 3].

#### 3. My evaluation:
The script cleanly handles ticket submission, updates counts on the dashboard, and remembers entries using browser storage[cite: 2, 3].

#### 4. What I changed:
Added string escaping utility escapeHtml to prevent XSS vulnerability when displaying user-submitted requester names and notes.

---

### Prompt #4
**Tool:** ChatGPT / Claude Code / Codex  
**Purpose:** Feature Implementation — Status Transition State Machine Rules  

#### 1. Prompt I used:
> **Context:** Working on feature branch \eature/status-rules\ for IT Help Desk Ticketing System[cite: 2, 3].  
> **Objective:** Enforce status sequence rules (Open -> In Progress -> Resolved -> Closed, with Resolved -> In Progress allowed) and technician requirements[cite: 3].  
> **Requirements:** Prevent invalid jumps (e.g. Open to Closed), show alert dialogs on illegal moves, and block transition to 'In Progress' if technician is 'Unassigned'[cite: 3].  
> **Constraints:** Must evaluate current state dynamically before allowing state change[cite: 3].  
> **Expected Output:** \isValidStatusTransition\ validation guard function implemented in \js/app.js\[cite: 3].

#### 2. AI's answer:
Provided the guard function logic checking allowed state transitions and technician assignments with user feedback alerts[cite: 3].

#### 3. My evaluation:
Validation works correctly. Prevents direct jumps like Open -> Closed and alerts when attempting to move an unassigned ticket to In Progress[cite: 3].

#### 4. What I changed:
Refactored transition dictionary to explicitly allow Resolved tickets to transition back to In Progress for unresolved issues[cite: 3].

---

### Prompt #5
**Tool:** ChatGPT / Claude Code / Codex  
**Purpose:** Form Input & Submission Validation  

#### 1. Prompt I used:
> **Context:** Improving application resilience in \js/app.js\[cite: 2, 3].  
> **Objective:** Add input validation guards for ticket submission and note additions[cite: 2, 3].  
> **Requirements:** Reject white-space-only fields, enforce minimum character length (2 chars for names, 10 chars for ticket descriptions), and show error popups when validation fails[cite: 2, 3].  
> **Constraints:** Prevent form submission when invalid; display clear feedback alerts[cite: 2, 3].  
> **Expected Output:** \alidateTicketInput\ guard logic integrated into the submit event listener[cite: 2, 3].

#### 2. AI's answer:
Provided validation helper functions and integrated string trimming and length checks into submit actions[cite: 2, 3].

#### 3. My evaluation:
Successfully prevents blank and trivial single-letter ticket submissions or empty notes[cite: 2, 3].

#### 4. What I changed:
Customized error messages to clearly instruct users on required minimum character lengths[cite: 2, 3].

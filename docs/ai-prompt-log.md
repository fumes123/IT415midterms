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

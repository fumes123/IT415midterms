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

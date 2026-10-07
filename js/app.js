// LocalStorage Key & Initial State
const STORAGE_KEY = "it415_tickets_data";
let tickets = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let selectedTicketId = null;

// DOM Elements
const ticketForm = document.getElementById("ticket-form");
const tableBody = document.getElementById("ticket-table-body");
const searchInput = document.getElementById("search-input");
const filterStatus = document.getElementById("filter-status");
const filterCategory = document.getElementById("filter-category");
const filterPriority = document.getElementById("filter-priority");
const filterTechnician = document.getElementById("filter-technician");
const sortBy = document.getElementById("sort-by");

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  setupEventListeners();
});

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  renderApp();
}

function generateTicketId() {
  const max = tickets.reduce((acc, t) => {
    const num = parseInt(t.id.replace("TKT-", ""), 10);
    return num > acc ? num : acc;
  }, 0);
  return \TKT-\\;
}

// Stage 5 Validation Guard for Ticket Submission
function validateTicketInput(requesterName, description) {
  if (!requesterName || requesterName.trim().length < 2) {
    alert("Validation Error: Requester name must be at least 2 characters long.");
    return false;
  }
  if (!description || description.trim().length < 10) {
    alert("Validation Error: Description must be at least 10 characters long to explain the issue.");
    return false;
  }
  return true;
}

// Create Ticket
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const requesterName = document.getElementById("req-name").value.trim();
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;
  const description = document.getElementById("description").value.trim();

  if (!validateTicketInput(requesterName, description)) {
    return;
  }

  const newTicket = {
    id: generateTicketId(),
    requesterName: requesterName,
    category: category,
    priority: priority,
    description: description,
    status: "Open",
    assignedTechnician: "Unassigned",
    dateCreated: new Date().toISOString(),
    dateResolved: null,
    notes: []
  };

  tickets.push(newTicket);
  saveState();
  ticketForm.reset();
  alert(\Success: Ticket \ created successfully!\);
});

// Enforce State Machine & Status Rules
function isValidStatusTransition(current, next, technician) {
  if (next === "In Progress" && (technician === "Unassigned" || !technician)) {
    alert("Rule Violation: A ticket can become 'In Progress' ONLY if it has an assigned technician.");
    return false;
  }

  const allowed = {
    "Open": ["In Progress"],
    "In Progress": ["Resolved"],
    "Resolved": ["In Progress", "Closed"],
    "Closed": []
  };

  if (allowed[current] && allowed[current].includes(next)) {
    return true;
  }

  alert(\Invalid Transition: Jump from '\' to '\' is strictly not allowed.\);
  return false;
}

// Stage 6 Bug Fix: Clear dateResolved when moving back from Resolved to In Progress
function updateTicketStatus(id, newStatus) {
  const t = tickets.find(x => x.id === id);
  if (!t) return;

  if (isValidStatusTransition(t.status, newStatus, t.assignedTechnician)) {
    t.status = newStatus;
    
    if (newStatus === "Resolved") {
      t.dateResolved = new Date().toISOString();
    } else if (newStatus === "In Progress") {
      // Clear resolution date if reopened for further work
      t.dateResolved = null;
    }

    saveState();
    openModal(id);
  }
}

function assignTechnician(id, tech) {
  const t = tickets.find(x => x.id === id);
  if (t) {
    t.assignedTechnician = tech;
    saveState();
    openModal(id);
  }
}

function addNote(id, author, text) {
  const cleanAuthor = author ? author.trim() : "";
  const cleanText = text ? text.trim() : "";

  if (!cleanAuthor || cleanAuthor.length < 2) {
    alert("Validation Error: Note author name must be at least 2 characters.");
    return;
  }
  if (!cleanText || cleanText.length < 3) {
    alert("Validation Error: Note text cannot be empty or too short.");
    return;
  }

  const t = tickets.find(x => x.id === id);
  if (t) {
    t.notes.unshift({
      author: cleanAuthor,
      text: cleanText,
      date: new Date().toISOString()
    });
    saveState();
    openModal(id);
  }
}

// Render Logic
function renderApp() {
  renderDashboard();
  renderTable();
}

function renderDashboard() {
  document.getElementById("stat-open").textContent = tickets.filter(t => t.status === "Open").length;
  document.getElementById("stat-progress").textContent = tickets.filter(t => t.status === "In Progress").length;
  document.getElementById("stat-resolved").textContent = tickets.filter(t => t.status === "Resolved").length;
  document.getElementById("stat-closed").textContent = tickets.filter(t => t.status === "Closed").length;
  document.getElementById("stat-unassigned").textContent = tickets.filter(t => t.status === "Open" && t.assignedTechnician === "Unassigned").length;
}

function renderTable() {
  let list = [...tickets];

  const q = searchInput.value.toLowerCase();
  if (q) list = list.filter(t => t.description.toLowerCase().includes(q));
  if (filterStatus.value !== "All") list = list.filter(t => t.status === filterStatus.value);
  if (filterCategory.value !== "All") list = list.filter(t => t.category === filterCategory.value);
  if (filterPriority.value !== "All") list = list.filter(t => t.priority === filterPriority.value);
  if (filterTechnician.value !== "All") list = list.filter(t => t.assignedTechnician === filterTechnician.value);

  const pRank = { Critical: 4, High: 3, Medium: 2, Low: 1 };
  if (sortBy.value === "priority") {
    list.sort((a, b) => pRank[b.priority] - pRank[a.priority]);
  } else if (sortBy.value === "date-asc") {
    list.sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
  } else {
    list.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
  }

  tableBody.innerHTML = list.map(t => \
    <tr>
      <td><strong>\</strong></td>
      <td>\</td>
      <td>\</td>
      <td><span class="badge p-\">\</span></td>
      <td>\</td>
      <td>\</td>
      <td>\</td>
      <td><button class="btn btn-sm" onclick="openModal('\')">View</button></td>
    </tr>
  \).join('');
}

// Modal Engine
function openModal(id) {
  selectedTicketId = id;
  const t = tickets.find(x => x.id === id);
  if (!t) return;

  document.getElementById("modal-ticket-id").textContent = \\ (\)\;
  document.getElementById("m-requester").textContent = t.requesterName;
  document.getElementById("m-category").textContent = t.category;
  document.getElementById("m-priority").textContent = t.priority;
  document.getElementById("m-description").textContent = t.description;
  document.getElementById("m-created").textContent = new Date(t.dateCreated).toLocaleString();
  
  if (t.dateResolved) {
    const diffTime = Math.abs(new Date(t.dateResolved) - new Date(t.dateCreated));
    const diffDays = (diffTime / (1000 * 60 * 60 * 24)).toFixed(1);
    document.getElementById("m-resolution-time").textContent = \\ Day(s) (Resolved on \)\;
  } else {
    document.getElementById("m-resolution-time").textContent = "Not resolved yet";
  }

  document.getElementById("m-tech-select").value = t.assignedTechnician;
  document.getElementById("m-status-select").value = t.status;

  const notesContainer = document.getElementById("notes-list");
  notesContainer.innerHTML = t.notes.map(n => \
    <div class="note-item">
      <div class="note-meta"><strong>\</strong> - \</div>
      <div>\</div>
    </div>
  \).join('');

  document.getElementById("modal-backdrop").classList.remove("hidden");
}

function setupEventListeners() {
  document.getElementById("modal-close").onclick = () => {
    document.getElementById("modal-backdrop").classList.add("hidden");
  };

  document.getElementById("btn-save-tech").onclick = () => {
    assignTechnician(selectedTicketId, document.getElementById("m-tech-select").value);
  };

  document.getElementById("btn-save-status").onclick = () => {
    updateTicketStatus(selectedTicketId, document.getElementById("m-status-select").value);
  };

  document.getElementById("btn-add-note").onclick = () => {
    const author = document.getElementById("note-author").value;
    const text = document.getElementById("note-text").value;
    addNote(selectedTicketId, author, text);
    document.getElementById("note-text").value = "";
  };

  [searchInput, filterStatus, filterCategory, filterPriority, filterTechnician, sortBy].forEach(el => {
    el.addEventListener("input", renderTable);
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
}

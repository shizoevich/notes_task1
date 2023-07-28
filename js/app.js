// Define the predefined categories
const categories = ["Task", "Random Thought", "Idea"];

// Sample data with prepopulated notes
let notes = [
  {
    id: 1,
    createdAt: new Date(),
    content: "Buy groceries for dinner",
    category: "Task",
  },
  // Add more sample notes here
];

// Function to render the notes table
function renderNotesTable() {
  const notesTableBody = document.querySelector("#notes-table-body");
  notesTableBody.innerHTML = "";

  notes.forEach((note) => {
    const row = document.createElement("tr");

    const createdAtCell = document.createElement("td");
    createdAtCell.textContent = note.createdAt.toDateString();
    row.appendChild(createdAtCell);

    const contentCell = document.createElement("td");
    contentCell.textContent = note.content;
    row.appendChild(contentCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = note.category;
    row.appendChild(categoryCell);

    const datesCell = document.createElement("td");
    datesCell.textContent = extractDates(note.content).join(", ");
    row.appendChild(datesCell);

    notesTableBody.appendChild(row);
  });
}

// Function to extract dates from a note's content using regular expressions
function extractDates(content) {
  const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  return content.match(datePattern) || [];
}

// Function to render the summary table
function renderSummaryTable() {
  const summaryTableBody = document.querySelector("#summary-table-body");
  summaryTableBody.innerHTML = "";

  categories.forEach((category) => {
    const activeCount = notes.filter((note) => note.category === category && !note.archived).length;
    const archivedCount = notes.filter((note) => note.category === category && note.archived).length;

    const row = document.createElement("tr");

    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    row.appendChild(categoryCell);

    const activeCountCell = document.createElement("td");
    activeCountCell.textContent = activeCount;
    row.appendChild(activeCountCell);

    const archivedCountCell = document.createElement("td");
    archivedCountCell.textContent = archivedCount;
    row.appendChild(archivedCountCell);

    summaryTableBody.appendChild(row);
  });
}

// Event listener for form submission to add a new note
document.querySelector("#add-note-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const content = formData.get("content");
  const category = formData.get("category");

  if (!content || !category) {
    alert("Please fill in all fields.");
    return;
  }

  const newNote = {
    id: notes.length + 1,
    createdAt: new Date(),
    content: content,
    category: category,
    archived: false,
  };

  notes.push(newNote);
  renderNotesTable();
  renderSummaryTable();
  event.target.reset();
});

// Call the initial render functions
renderNotesTable();
renderSummaryTable();

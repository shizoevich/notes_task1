// main.js

import { findDatesInText } from './utils.js';

const notes = [
    {
      Name: 'Dentist',
      Created: '28.07.2023',
      Category: 'Task',
      Content: "I'm gonna have a dentist appointment on the 3.5.2021, I moved it from 5.5.2021.",
      Dates: findDatesInText("I'm gonna have a dentist appointment on the 3.5.2021, I moved it from 5.5.2021."),
      Status: "Active",
    },
    {
      Name: 'Shopping list',
      Created: '28.07.2023',
      Category: 'Task',
      Content: "Tomatoes, bread",
      Dates: findDatesInText("Tomatoes, bread"),
      Status: "Active",
    },
    {
      Name: 'The theory of evolution',
      Created: '28.07.2023',
      Category: 'Random Thought',
      Content: "Humans evolved from frogs. What was before the toad or the tadpole?",
      Dates: findDatesInText("Humans evolved from frogs. What was before the toad or the tadpole?"),
      Status: "Active",
    },
    {
      Name: 'Change icons',
      Created: '28.07.2023',
      Category: 'Idea',
      Content: "It seems to me that the icon I have chosen better depicts the concept of the task.",
      Dates: findDatesInText("It seems to me that the icon I have chosen better depicts the concept of the task."),
      Status: "Active",
    },
    {
      Name: 'Books',
      Created: '28.07.2023',
      Category: 'Task',
      Content: "His Dark Materials, Alice's Adventures in Wonderland",
      Dates: findDatesInText("His Dark Materials, Alice's Adventures in Wonderland"),
      Status: "Active",
    },
    {
      Name: 'Vitali Klitschko',
      Created: '28.07.2023',
      Category: 'Quote',
      Content: "I have two cases, four of which are already underway in the observation room, and which determine the impossibility...",
      Dates: findDatesInText("I have two cases, four of which are already underway in the observation room, and which determine the impossibility..."),
      Status: "Active",
    },
    {
      Name: 'Vitali Klitschko',
      Created: '28.07.2023',
      Category: 'Quote',
      Content: "And today, tomorrow, not everyone can watch.",
      Dates: findDatesInText("And today, tomorrow, not everyone can watch."),
      Status: "Active",
    },
    {
      Name: 'The theory of evolution',
      Created: '28.07.2023',
      Category: 'Random Thought',
      Content: "I'm gonna have a dentist appointment on the 3.5.2021, I moved it from 5.5.2021.",
      Dates: findDatesInText("I'm gonna have a dentist appointment on the 3.5.2021, I moved it from 5.5.2021."),
      Status: "Archived",
    },
    {
      Name: 'Dentist',
      Created: '28.07.2023',
      Category: 'Task',
      Content: "",
      Dates: findDatesInText(""),
      Status: "Archived",
    },
    {
      Name: 'Shopping list',
      Created: '28.07.2023',
      Category: 'Task',
      Content: "Tomatoes, bread",
      Dates: findDatesInText("Tomatoes, bread"),
      Status: "Archived",
    },
  ];

  const appContainer = document.querySelector('#app');
  const modal = document.getElementById('modal');
  const modalTable = document.getElementById('modalTable');
  const closeBtn = document.querySelector('.close');
  
  // Function to generate the table HTML for active notes
  function generateNotesTableHTML(notes) {
    let tableHTML = `
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th></th>
            <th>Archive</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    notes.forEach((note) => {
      if (note.Status === 'Active') {
        tableHTML += `
          <tr>
            <td><img src="${getCategoryIcon(note.Category)}" alt="${note.Category}" width="20" height="20"></td>
            <td>${note.Name}</td>
            <td>${note.Created}</td>
            <td>${note.Category}</td>
            <td>${note.Content}</td>
            <td>${note.Dates.join(', ')}</td>
            <td><button onclick="showModal('${note.Name}')">Edit</button></td>
            <td><button onclick="archiveNote('${note.Name}')">Archive</button></td>
            <td><button onclick="deleteNote('${note.Name}')">Delete</button></td>
          </tr>
        `;
      }
    });
  
    tableHTML += `
        </tbody>
      </table>
    `;
  
    return tableHTML;
  }
  
  // Function to get category icon based on the category name
  function getCategoryIcon(category) {
    switch (category) {
      case 'Task':
        return 'task-icon.png';
      case 'Quote':
        return 'quote-icon.png';
      case 'Random Thought':
        return 'random-thought-icon.png';
      case 'Idea':
        return 'idea-icon.png';
      default:
        return 'default-icon.png';
    }
  }
  
  // Function to open the modal with note details
  function showModal(noteName) {
    const note = notes.find((note) => note.Name === noteName);
    if (note) {
      modalTable.innerHTML = `
        <tr>
          <td><img src="${getCategoryIcon(note.Category)}" alt="${note.Category}" width="20" height="20"></td>
          <td>${note.Name}</td>
          <td>${note.Created}</td>
          <td>${note.Category}</td>
          <td>${note.Content}</td>
          <td>${note.Dates.join(', ')}</td>
          <td><button>Edit</button></td>
          <td><button onclick="archiveNote('${note.Name}')">Archive</button></td>
          <td><button onclick="deleteNote('${note.Name}')">Delete</button></td>
        </tr>
      `;
      modal.style.display = 'block';
    }
  }
  
  // Function to close the modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Function to generate and render the table
  function renderTable() {
    const tableHTML = generateNotesTableHTML(notes);
    appContainer.innerHTML = tableHTML;
  }
  
  // Initial render
  renderTable();
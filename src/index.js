/* eslint-disable no-unused-vars */

import _, { forEach } from 'lodash';
// import './style.css';
import List from './list.js';

const taskList = new List();

const form = document.querySelector('.form');
const container = document.querySelector('.listContainer');

const addTaskToHTML = (task) => {
  const list = document.createElement('div');
  list.className = 'list';
  list.innerHTML += `
  <input type= "checkbox" class= "checkbox" ${(task.completed) ? 'checked' : ''}>
  <span  contenteditable="true" class= "task-description">${task.description}</span>
  <i class="fas fa-ellipsis-v"></i>
  <i class="fas fa-trash"></i>
  `;
  container.appendChild(list);

  const checkbox = list.firstElementChild;

  if (task.completed) {
    checkbox.parentElement.classList.toggle('checkedHolder');
    checkbox.nextElementSibling.classList.toggle('completedList');
  }

  checkbox.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('mousedown', () => {
    checkbox.parentElement.remove();
    taskList.removeTask(task.index);
  });

  checkbox.addEventListener('click', (event) => {
    task.completed = event.target.checked;
    taskList.updateToLocalStorage();
    checkbox.parentElement.classList.toggle('checkedHolder');
    checkbox.nextElementSibling.classList.toggle('completedList');
  });

  const spanElement = checkbox.nextElementSibling;

  spanElement.addEventListener('keyup', (e) => {
    task.description = e.target.innerText;
    taskList.updateToLocalStorage();
  });

  spanElement.addEventListener('focus', (e) => {
    checkbox.parentElement.classList.toggle('focused');
    checkbox.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('trash-active');
    checkbox.nextElementSibling.nextElementSibling.classList.toggle('ellipse-disable');
  });

  spanElement.addEventListener('blur', (e) => {
    checkbox.parentElement.classList.toggle('focused');
    checkbox.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('trash-active');
    checkbox.nextElementSibling.nextElementSibling.classList.toggle('ellipse-disable');
  });
};

// EDITED THE ORIGINAL LINE
const addTask = () => {
  const { value } = document.querySelector('.input');
  const task = taskList.addTask(value);
  addTaskToHTML(task);
};

const updateListUsingLocalStorage = () => {
  taskList.taskList.forEach((task) => {
    addTaskToHTML(task);
  });
};

updateListUsingLocalStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
  form.reset();
});

const clearChecked = () => {
  const checkboxElements = document.querySelectorAll('.checkbox');
  const filteredArray = Array.from(checkboxElements)
    .filter((checkboxElement) => (checkboxElement.checked === true));
  filteredArray.forEach((element) => element.parentElement.remove());
};

const clearBtn = document.createElement('button');
form.appendChild(clearBtn);
clearBtn.type = 'button';
clearBtn.textContent = 'Clear all completed';
clearBtn.className = 'clearbutton';
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearChecked();
  taskList.clearCompletedTasks();
  form.reset();
});

export default taskList;

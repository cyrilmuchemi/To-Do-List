/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const topsection = document.querySelector('.topSec');
const form = document.querySelector('.myForm');
const todoList = document.querySelector('.todoList');
const clearBtn = document.querySelector('.clear');

class Mylist {
  constructor(descripion, completed, index) {
    this.descripion = descripion;
    this.completed = completed;
    this.index = index;
  }
}

const array = [];
const updateList = () => {
  const list = document.createElement('div');
  const input = document.querySelector('.input');
  const { value } = input;
  list.className = 'list';
  list.innerHTML += `
    <input type= "checkbox" class= "checkbox";
    <span>${value}</span>
    <i class="fas fa-ellipsis-v"></i>
    <i class="fas fa-trash"></i>
    `;
  todoList.appendChild(list);

  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((check) => {
    check.addEventListener('click', (e) => {
      check.parentElement.classList.toggle('checkedHolder');
    });
  });
};

const clearField = () => {
  document.querySelector('.input').value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  updateList();
  clearField();
});
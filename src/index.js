/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const form = document.querySelector('.form');
const container = document.querySelector('.listContainer');

const arr = [];
const toDo = () => {
  const list = document.createElement('div');
  const { value } = document.querySelector('.input');
  list.className = 'list';
  list.innerHTML += `
  <input type= "checkbox" class= "checkbox">
  <span>${value}</span>
  <i class="fas fa-ellipsis-v"></i>
  <i class="fas fa-trash"></i>
  <hr>
  `;
  container.appendChild(list);
};

const clearField = () => {
  document.querySelector('.input').value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  toDo();
  clearField();
});
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const form = document.querySelector('.form');
const container = document.querySelector('.listContainer');

const arr = [
  {
    descr: 'Prepare for Coding challenge',
    completed: true,
    index: 1,
  },

  {
    descr: 'Complete current project',
    completed: true,
    index: 2,
  },

  {
    descr: 'Watch some anime',
    completed: false,
    index: 3,
  },
];

const list = [];

for (let i = 0; i < arr.length; i += 1) {
  list[i] = document.createElement('div');
  list[i].className = 'list';
  list[i].innerHTML += `
  <input type= "checkbox" class= "checkbox">
  <span>${arr[i].descr}</span>
  <i class="fas fa-ellipsis-v"></i>
  <i class="fas fa-trash"></i>
  `;
  container.appendChild(list[i]);
}
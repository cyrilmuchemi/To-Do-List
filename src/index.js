/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const form = document.querySelector('.form');
const container = document.querySelector('.listContainer');

class ListObject {
  constructor(description, completed, index) {
    this.description = description
    this.completed = completed
    this.index = index
  }
}

const arr = [];


const toDo = () => {
  const list = document.createElement('div');
  const value = document.querySelector('.input').value;
  list.className = 'list';
  list.innerHTML += `
  <input type= "checkbox" class= "checkbox">
  <span>${value}</span>
  <i class="fas fa-ellipsis-v"></i>
  <i class="fas fa-trash"></i>
  `
  container.appendChild(list);

  const checkbox = list.firstChild;
    checkbox.addEventListener('click', () => {
      console.log('I am clicked')
      document.querySelector("body > form > div.listContainer > div > i.fas.fa-ellipsis-v")
     checkbox.parentElement.classList.toggle('checkedHolder');
      checkbox.nextElementSibling.classList.toggle('completedList');
      checkbox.parentElement.lastElementChild.previousElementSibling.classList.toggle('trash-active');
      checkbox.parentElement.lastElementChild.previousElementSibling.previousElementSibling.classList.toggle('ellipse-disable');
    })

  const object = new ListObject(value, false, arr.length +1);
  arr.push(object);
  localStorage.setItem('list', JSON.stringify(arr));

  const ellipse = checkbox.nextSibling;
    ellipse.addEventListener('click', () => {
     console.log('I am clicked')
     }); 
};

const clearField = () => {
  document.querySelector('.input').value = ''
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  toDo()
  clearField()
});
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
  <hr>
  `
  container.appendChild(list);

  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach(box => {
    box.addEventListener('click', () => {
      box.parentElement.classList.toggle('checkedHolder');
      box.nextElementSibling.classList.toggle('completedList');
      box.parentElement.lastElementChild.previousElementSibling.classList.toggle('trash-active');
      box.parentElement.lastElementChild.previousElementSibling.previousElementSibling.classList.toggle('ellipse-disable');
    })
  });

  const object = new ListObject(value, false, checkbox.length -1);
  arr.push(object);
  localStorage.setItem('list', JSON.stringify(arr));

  const ellipse = document.querySelectorAll('.fa-ellipsis-v');
  ellipse.forEach(dots => {
    dots.addEventListener('click', () => {
     list.contentEditable = true;
     });  
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
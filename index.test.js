/**
 * @jest-environment jsdom
 */

import './test.mock.js';
import Store from './src/index.js';

const listDivContainer = document.querySelector('.listContainer');

beforeEach(() => {
  listDivContainer.innerHTML = '';
  Store.taskList = [];
});

afterEach(() => {
  localStorage.removeItem('list');
});

describe('To-Do-List Context', () => {
  describe('Test add new task', () => {
    test('with description', async () => {
      document.querySelector('.input').value = 'test';
      document.forms[0].submit();

      expect(Store.taskList.length).not.toBe(0);
      expect(Store.taskList.length === 0).toBeFalsy();

      const taskElement = document.querySelector('.list');
      expect(taskElement instanceof HTMLElement).toBeTruthy();
      expect(Store.taskList[0].description).toBe('test');
    });
  });
  describe('Test remove individual task', () => {
    test('with description', async () => {
      document.querySelector('.input').value = 'value';
      document.forms[0].submit();
      document.querySelector('.input').value = 'newVal';
      document.forms[0].submit();
      document.querySelector('.input').value = 'anotherVal';
      document.forms[0].submit();

      const stash = Store.taskList[0];
      const { length } = Store.taskList;

      document.querySelector('.fa-trash').dispatchEvent(new Event('mousedown'));

      expect(Store.taskList.length).toBe(length - 1);
      expect(Store.taskList[0].description).not.toBe(stash.description);
    });
  });
  describe('Test update task', () => {
    test('with description', async () => {
      expect(Store.taskList.length).toBe(0);
      expect(listDivContainer.hasChildNodes()).toBeFalsy();

      document.querySelector('.input').value = 'desc1';
      document.forms[0].submit();

      expect(listDivContainer.hasChildNodes()).toBeTruthy();

      const firstTaskElement = document.querySelector('.list');

      expect(firstTaskElement instanceof HTMLElement).toBeTruthy();

      const [, descElement] = firstTaskElement.children;
      expect(descElement.textContent).toBe('desc1');

      const desc1Update = 'desc1 updated';
      descElement.innerText = desc1Update;
      descElement.dispatchEvent(new Event('keyup'));

      expect(descElement.innerText).toBe(desc1Update);
      expect(Store.taskList[0].description).toBe(desc1Update);
    });
  });
  describe('Test clear all completed', () => {
    test('with some checked tasks', async () => {
      const field = document.querySelector('.input');

      [
        'desc1',
        'desc2',
        'desc3',
      ].forEach((value) => {
        field.value = value;
        document.forms[0].submit();
      });

      expect(listDivContainer.hasChildNodes()).toBeTruthy();
      expect(listDivContainer.children.length).toBe(3);
      expect(Store.taskList.length).toBe(3);

      const firstTaskElement = listDivContainer.firstChild;
      const lastTaskElement = listDivContainer.lastChild;

      firstTaskElement.children[0].click();
      expect(Store.taskList[0].completed).toBeTruthy();

      lastTaskElement.children[0].click();
      expect(Store.taskList[2].completed).toBeTruthy();

      expect(firstTaskElement.children[0].checked).toBeTruthy();
      expect(lastTaskElement.children[0].checked).toBeTruthy();

      document.querySelector('button').click();

      expect(Store.taskList.length).toBe(1);
      expect(listDivContainer.children.length).toBe(1);
    });
  });
});

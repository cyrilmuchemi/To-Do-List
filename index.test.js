/**
 * @jest-environment jsdom
 */

import './test.mock.js';
import Store from './src/index.js';

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
});
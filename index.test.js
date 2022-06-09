/**
 * @jest-environment jsdom
 */

import './test.mock.js';
import { taskList as Store } from './src/index.js';

describe('To-Do-List Context', () => {
    describe('Test add new task', () => {
        test('with description', async() => {
            document.querySelector('.input').value = 'test';
            document.forms[0].submit();
        
            expect(Store.taskList.length).not.toBe(0);
            expect(Store.taskList.length === 0).toBeFalsy();
        
            const taskElement = document.querySelector('.list');
            expect(taskElement instanceof HTMLElement).toBeTruthy();
            expect(Store.taskList[0].description).toBe('test');
        });
    });
});
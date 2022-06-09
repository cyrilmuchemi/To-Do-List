//const addTask = require('./src/index');
import puppeteer from 'jest-puppeteer';


test('Adds a new task to to-do list app', async() => {
    const myBrowser = await puppeteer.launch('docs/index.html');
});
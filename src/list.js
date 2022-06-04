import ListItem from './listobject.js';

export default class List {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('list')) || [];
  }

    updateToLocalStorage = () => {
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }

    addTask = (description) => {
      const item = new ListItem(description, false, this.taskList.length + 1);
      this.taskList.push(item);

      this.updateToLocalStorage();
      return item;
    }

    updateIndex = () => {
      this.taskList.forEach((task, index) => {
        task.index = index + 1;
      });
    }

    removeTask = (index) => {
      this.taskList.splice(index - 1, 1);
      this.updateIndex();
      this.updateToLocalStorage();
    }

    clearCompletedTasks = () => {
      this.taskList = this.taskList.filter((task) => (task.completed === false));
      this.updateIndex();
      this.updateToLocalStorage();
    }
}

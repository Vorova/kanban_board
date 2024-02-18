import { Task } from './Task';

const KEY_FOR_LOCALSTORAGE = 'tasks';

export class TaskStorage {

    constructor() {
        this.tasks = JSON.parse(localStorage.getItem(KEY_FOR_LOCALSTORAGE)) ?? {};
    }

    save(task) {
        if (!(task instanceof Task)) return;
        this.tasks[task.id] = task;
        this.synchronizeTasks();
    }

    deleteById(taskId) {
        if (!(+taskId instanceof Number)) return;
        delete this.tasks[taskId];
        this.synchronizeTasks();
    }

    synchronizeTasks() {
        localStorage.setItem(KEY_FOR_LOCALSTORAGE, JSON.stringify(this.tasks));
    }
}

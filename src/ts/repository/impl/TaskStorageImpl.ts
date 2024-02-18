import {Task} from '../../entity/Task';
import {TaskStorage} from "../TaskStorage";

const KEY_FOR_LOCALSTORAGE = 'tasks';

export class TaskStorageImpl implements TaskStorage {

    private tasks: [number, Task] = JSON.parse(localStorage.getItem(KEY_FOR_LOCALSTORAGE)) ?? [];

    public save(task: Task): void {
        this.tasks[task.getId()] = task;
        this.synchronizeTasks();
    }

    public deleteById(taskId: number): void {
        delete this.tasks[taskId];
        this.synchronizeTasks();
    }

    getAll(): [number, Task] {
        return this.tasks;
    }

    public getLength(): number {
        return this.tasks.length;
    }

    private synchronizeTasks() {
        localStorage.setItem(KEY_FOR_LOCALSTORAGE, JSON.stringify(this.tasks));
    }
}

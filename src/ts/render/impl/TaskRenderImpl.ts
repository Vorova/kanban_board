import {Task} from "../../entity/Task";
import {TaskRender} from "../TaskRender";
import {TaskStorage} from "../../repository/TaskStorage";
import {TaskStorageImpl} from "../../repository/impl/TaskStorageImpl";

export class TaskRenderImpl implements TaskRender {

    private storage: TaskStorage;

    constructor() {
        this.storage = new TaskStorageImpl();
    }

    add(task: Task): void {
        throw new Error("Method not implemented.");
    }

    remove(takId: number): void {
        throw new Error("Method not implemented.");
    }

    startRender(): void {
        if (this.storage.getLength() == 0) {
            this.greeting();
            return;
        }

        this.addAll(this.storage.getAll());
    }

    private greeting(): void {
        console.log('Отрисовка приветствия')
    }

    private addAll(tasks: [number, Task]): void {
        console.log('Отрисовка всех задач молниеносно!');
    }

}
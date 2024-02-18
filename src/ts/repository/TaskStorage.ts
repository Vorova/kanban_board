import {Task} from "../entity/Task";

export interface TaskStorage {

    save(task: Task): void;

    deleteById(taskId: number): void;

    getLength(): number;

    getAll(): [number, Task]

}

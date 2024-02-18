import {Task} from "../entity/Task";

export interface TaskRender {

    add(task: Task): void;

    remove(takId: number): void;

    startRender(): void;

}
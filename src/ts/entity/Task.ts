import {TaskStatus} from '../enums/TaskStatus';

export class Task {

    private readonly id: number;
    private title: string;
    private description: string;
    private status: TaskStatus;

    constructor(title: string, description: string) {
        this.id = +new Date();
        this.title = title;
        this.description = description;
        this.status = TaskStatus.IN_PROGRESS;
    }

    public getId(): number {
        return this.id;
    }
}
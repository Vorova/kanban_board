import { TaskStatus } from '../enums/TaskStatus';

export class Task {
    constructor(title, description, id = +new Date(), status = TaskStatus.IN_PROGRESS) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
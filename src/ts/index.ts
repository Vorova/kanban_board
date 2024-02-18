import '../html/index.html';

import '../css/index.less';
import '../css/tasks-container.less';
import {TaskRender} from "./render/TaskRender";
import {TaskRenderImpl} from "./render/impl/TaskRenderImpl";

class Runner {

    private render: TaskRender;

    constructor() {
        this.render = new TaskRenderImpl();
    }

    public run() {
        this.render.startRender();
    }
}

new Runner().run();
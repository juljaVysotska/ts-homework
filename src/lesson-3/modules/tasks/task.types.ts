import * as z from 'zod';

const StatusSchema = z.enum(['todo', 'in_progress', 'done']);
export type Status = z.infer<typeof StatusSchema>;

const PrioritySchema = z.enum(['low', 'normal', 'high']);
export type Priority = z.infer<typeof PrioritySchema>;

abstract class TaskClass {
    abstract type: string;
    abstract id: string;
    abstract getTaskInfo(): void;
    abstract createdAt: Date;

    constructor(
        public title: string,
        public description: string,
        public status: Status,
        public priority: Priority
    ) { }
}

export enum InstanceType {
    SUBTASK = 'subtask',
    BUG = 'bug',
    STORY = 'story',
    EPIC = 'epic',
    UNLINKED_TASK = 'unlinked-task'
}

export class UnlinkedTask extends TaskClass {
    id: string;
    type = InstanceType.SUBTASK;
    createdAt: Date;

    constructor(task: NewTask) {
        super(task.title, task.description, task.status, task.priority);
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
    }

    getTaskInfo() {
        return this.type;
    }
}

export class Subtask extends TaskClass {
    id: string;
    type = InstanceType.SUBTASK;
    parentId: string;
    createdAt: Date;

    constructor(task: NewTask, parentId: string) {
        super(task.title, task.description, task.status, task.priority);
        this.parentId = parentId;
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
    }

    getTaskInfo() {
        return this.type;
    }
}

export class Bug extends TaskClass {
    id: string;
    type = InstanceType.BUG;
    parentId: string;
    createdAt: Date;

    constructor(task: NewTask, parentId: string, priority: Priority) {
        const newTaskUpdate = {
            ...task,
            priority
        };

        super(newTaskUpdate.title, newTaskUpdate.description, newTaskUpdate.status, newTaskUpdate.priority);
        this.parentId = parentId;
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
    }

    getTaskInfo() {
        return this.type;
    }
}

export class Story extends TaskClass {
    id: string;
    type = InstanceType.STORY;
    storyPoints: number;
    createdAt: Date;


    constructor(task: NewTask, storyPoints: number) {
        super(task.title, task.description, task.status, task.priority);
        this.storyPoints = storyPoints;
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
    }

    getTaskInfo() {
        return this.type;
    }
}

export class Epic extends TaskClass {
    id: string;
    type = InstanceType.EPIC;
    children: Story[];
    createdAt: Date;


    constructor(task: NewTask, children: Story[]) {
        super(task.title, task.description, task.status, task.priority);
        this.children = children;
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
    }

    addChild(child: Story) {
        this.children.push(child);
        return this.children;
    }

    getTaskInfo() {
        return this.type;
    }
}

export type NewTask = {
    title: string;
    description: string;
    status: Status;
    priority: Priority;
};

export type TasksTypes = UnlinkedTask | Subtask | Bug | Story | Epic;

// todo
export const TaskSchema = z.object({
    id: z.string(),
    type: z.enum(["UNLINKED", "SUBTASK", "BUG", "STORY", "EPIC"]),
    title: z.string(),
    description: z.string(),
    status: StatusSchema,
    createdAt: z.string(), // ISO date string
    priority: PrioritySchema,

    parentId: z.number().optional(),
    storyPoints: z.number().optional(),
    children: z.array(z.string()).optional()
});


export type TaskDetails = Partial<{
    title: string,
    description: string,
    status: Status,
    priority: Priority,
}>;

export type FilterParams = Partial<{
    status: Status;
    createdAt: string | Date;
    priority: Priority;
}>;
import { Project } from './Project';

export class Task {
    taskId!: number;
    name!: string;
    description!: string;
    expiredTime!: string;
    createdAt!: Date;
    updatedAt!: Date;
    status!: Boolean;
    isExpired!: Boolean;
    project!: Project;
}

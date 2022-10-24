import { Task } from "./Task";

export class Project {
    id!: number;
    name!: string;
    descriptionProject!: string;
    createdAt!: Date;
    updatedAt!: Date;
    status!: Boolean;
    tasks?: Task[];
}

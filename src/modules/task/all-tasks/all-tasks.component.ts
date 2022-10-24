import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '@app/Models/Task';
import { TaskService } from '../service/task.service';

@Component({
    selector: 'sb-all-tasks',
    templateUrl: './all-tasks.component.html',
    styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent implements OnInit {
    addClicked: Boolean = false;
    tasks?: Task[];
    task!: Task;

    constructor(public taskService: TaskService, public route: Router) {}

    ngOnInit(): void {
        this.fetchTasksData();
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
    }

    fetchTasksData() {
        this.taskService.getAll().subscribe(
            d => {
                this.tasks = d;
                console.log(this.tasks);
            },
            error => {
                console.log('aaaaaaaaaaerreur :(');
            }
        );
    }

    delete(p: Task) {
        this.taskService.delete(p.taskId).subscribe(d => {
            this.fetchTasksData();
        });
    }

    navigateToTask(p: Task) {
        console.log(p + 'nnn');
        this.route.navigate(['/task/viewTask/' + p.taskId]);
    }

    add(task: Task) {
        this.taskService.add(task).subscribe(
            d => {
                this.fetchTasksData();
                console.log('succes ajout');
            },
            error => {
                console.log('erreur images :(');
            }
        );
    }
}

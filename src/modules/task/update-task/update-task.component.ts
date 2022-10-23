import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '@app/Models/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'sb-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

    @Input() task!: Task;
    submitted: boolean = false;
    addForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private taskService: TaskService,
        private router: Router
    ) {
        this.addForm = fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            status: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        console.log(this.task);
        this.initializeForm();
    }

    onSubmit() {
        this.taskService.update(this.task, this.task.taskId).subscribe(
            d => {
                setTimeout(() => {
                    this.router.navigate(['/task/all']);
                }, 800);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        );
        console.log(this.task);
        console.log('testtest');
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            status: ['', Validators.required],
        });
    }
}

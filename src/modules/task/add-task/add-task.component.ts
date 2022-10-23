import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '@app/Models/Project';
import { Task } from '@app/Models/Task';
import { ProjectService } from '@modules/project/service/project.service';

@Component({
    selector: 'sb-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
    initialValue: Task = new Task();
    addForm!: FormGroup;
    projects?: Project[];
    projectId: number = 0;
    @Output() task: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            expiredTime: ['', Validators.required],
            status: ['', Validators.required],
            isExpired: ['', Validators.required],
        });
    }

    get name() {
        return this.addForm.get('name');
    }
    get description() {
        return this.addForm.get('description');
    }
    get status() {
        return this.addForm.get('status');
    }
    get expiredTime() {
        return this.addForm.get('expiredTime');
    }

    get isExpired() {
        return this.addForm.get('isExpired');
    }

    submit() {
        console.log(this.addForm.value);
        this.initialValue.name = this.addForm.value.name;
        this.initialValue.description = this.addForm.value.description;
        this.initialValue.status = this.addForm.value.status;
        this.initialValue.expiredTime = this.addForm.value.expiredTime;
        this.initialValue.isExpired = this.addForm.value.isExpired;
        this.task.emit(this.initialValue);
    }

    // fetchprojectsData() {
    //     this.projectService.getAll().subscribe(
    //         d => {
    //             this.projects = d;
    //             console.log(this.projects);
    //         },
    //         error => {
    //             console.log('aaaaaaaaaaerreur :(');
    //         }
    //     );
    // }
}

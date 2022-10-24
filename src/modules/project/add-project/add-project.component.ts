import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '@app/Models/Project';
import { ProjectService } from '../service/project.service';

@Component({
    selector: 'sb-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
    initialValue: Project = new Project();
    addForm!: FormGroup;
    @Output() project: EventEmitter<Project> = new EventEmitter<Project>();

    constructor(private fb: FormBuilder, private projectService: ProjectService) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            descriptionProject: ['', Validators.required],
            status: ['', Validators.required],
        });
    }

    get name() {
        return this.addForm.get('name');
    }
    get description() {
        return this.addForm.get('descriptionProject');
    }
    get status() {
        return this.addForm.get('status');
    }

    submit() {
        console.log(this.addForm.value);
        this.initialValue.name = this.addForm.value.name;
        this.initialValue.descriptionProject = this.addForm.value.descriptionProject;
        this.initialValue.status = this.addForm.value.status;
        this.project.emit(this.initialValue);
    }
}

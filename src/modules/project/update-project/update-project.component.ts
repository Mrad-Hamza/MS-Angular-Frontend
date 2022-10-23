import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '@app/Models/Project';
import { ProjectService } from '../service/project.service';

@Component({
    selector: 'sb-update-project',
    templateUrl: './update-project.component.html',
    styleUrls: ['./update-project.component.scss'],
})
export class UpdateProjectComponent implements OnInit {
    @Input() project!: Project;
    submitted: boolean = false;
    addForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private projectService: ProjectService,
        private router: Router
    ) {
        this.addForm = fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            status: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        console.log(this.project);
        this.initializeForm();
    }

    onSubmit() {
        this.projectService.update(this.project, this.project.id).subscribe(
            d => {
                setTimeout(() => {
                    this.router.navigate(['/project/all']);
                }, 800);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        );
        console.log(this.project);
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

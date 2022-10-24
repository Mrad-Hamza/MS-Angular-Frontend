import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/Models/Project';
import { ProjectService } from '../service/project.service';

@Component({
    selector: 'sb-all-projects',
    templateUrl: './all-projects.component.html',
    styleUrls: ['./all-projects.component.scss'],
})
export class AllProjectsComponent implements OnInit {
    addClicked: Boolean = false;
    projects?: Project[];
    project!: Project;

    constructor(public projectService: ProjectService, public route: Router) {}

    ngOnInit(): void {
        this.fetchProjectsData();
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
    }

    fetchProjectsData() {
        this.projectService.getAll().subscribe(
            d => {
                this.projects = d;
                console.log(this.projects);
            },
            error => {
                console.log('aaaaaaaaaaerreur :(');
            }
        );
    }

    delete(p: Project) {
        this.projectService.delete(p.id).subscribe(d => {
            this.fetchProjectsData();
        });
    }

    navigateToProject(p: Project) {
        console.log(p + 'nnn');
        this.route.navigate(['/project/viewProject/' + p.id]);
    }

    add(project: Project) {
        this.projectService.add(project).subscribe(
            d => {
                this.fetchProjectsData();
                console.log('succes ajout');
            },
            error => {
                console.log('erreur images :(');
            }
        );
    }
}

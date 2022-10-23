import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AllProjectsComponent,
        AddProjectComponent,
        UpdateProjectComponent,
        ViewProjectComponent,
    ],
    imports: [CommonModule, ProjectRoutingModule, NavigationModule, FormsModule,
      ReactiveFormsModule],
})
export class ProjectModule {}

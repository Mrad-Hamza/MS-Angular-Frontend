import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/project/all',
},
{ path: 'all', component: AllProjectsComponent },
{ path: 'viewProject/:id', component: ViewProjectComponent },
{
    path: '**',
    pathMatch: 'full',
    redirectTo: '/project/all',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

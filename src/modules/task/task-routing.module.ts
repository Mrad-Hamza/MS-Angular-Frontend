import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/task/all',
},
{ path: 'all', component: AllTasksComponent },
{ path: 'viewTask/:id', component: ViewTaskComponent },
{
    path: '**',
    pathMatch: 'full',
    redirectTo: '/task/all',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

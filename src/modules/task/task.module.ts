import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from '@modules/navigation/navigation.module';


@NgModule({
  declarations: [ViewTaskComponent, AllTasksComponent, AddTaskComponent, UpdateTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }

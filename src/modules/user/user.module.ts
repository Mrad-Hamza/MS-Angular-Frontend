import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from 'modules/navigation/navigation.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ AddUserComponent, UpdateUserComponent, AllUsersComponent, ShowUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }

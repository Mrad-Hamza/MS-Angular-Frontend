import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { AllPersonsComponent } from './all-persons/all-persons.component';

import { NavigationModule } from 'modules/navigation/navigation.module';
import { ViewPersonComponent } from './view-person/view-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [AllPersonsComponent, ViewPersonComponent, UpdatePersonComponent, AddPersonComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PersonModule { }

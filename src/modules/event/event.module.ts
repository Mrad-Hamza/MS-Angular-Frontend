import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModule } from './event-routing.module';
import { AllEventsComponent } from './all-events/all-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { FormsModule } from '@angular/forms';
import { NavigationModule } from 'modules/navigation/navigation.module';

@NgModule({
  declarations: [AllEventsComponent, AddEventComponent, ViewEventComponent, UpdateEventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
      NavigationModule,
      ReactiveFormsModule,
      FormsModule
  ]
})
export class EventModule { }

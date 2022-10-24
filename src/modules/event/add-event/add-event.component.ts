import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '@app/Models/Event';
import { EventService } from '../service/event.service';
@Component({
  selector: 'sb-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

    initialValue: Event = new Event;
    addForm !: FormGroup;
    @Output() event: EventEmitter<Event> = new EventEmitter<Event>();

    constructor(private fb: FormBuilder, private eventService: EventService) { }

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            eventName: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            type: ['', Validators.required],
            canal: ['', Validators.required],
            goals: ['', Validators.required],

        })
    }

    get eventName() {
        return this.addForm.get('eventName')
    }
    get startDate() {
        return this.addForm.get('startDate')
    }
    get endDate() {
        return this.addForm.get('endDate')
    }
    get type() {
        return this.addForm.get('type')
    }
    get canal() {
        return this.addForm.get('canal')
    }
    get goals() {
        return this.addForm.get('goals')
    }




    submit() {
        console.log(this.addForm.value);
        this.initialValue.eventName = this.addForm.value.eventName;
        this.initialValue.startDate = this.addForm.value.startDate;
        this.initialValue.endDate = this.addForm.value.endDate;
        this.initialValue.type = this.addForm.value.type;
        this.initialValue.canal = this.addForm.value.canal;
        this.initialValue.goals = this.addForm.value.goals;
        console.log(this.initialValue)
        this.event.emit(this.initialValue)
    }
}

import { Component, OnInit,Input } from '@angular/core';
import { Event } from '@app/Models/Event';
import { EventService } from '../service/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

     @Input() event !: Event
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder, private eventService: EventService, private router: Router) {
        this.addForm = fb.group({
            eventName: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            type: ['', Validators.required],
            canal: ['', Validators.required],
            goals: ['', Validators.required],
        })
    }

    ngOnInit(): void {
        console.log(this.event)
        this.initializeForm()
    }

    onSubmit() {

        this.eventService.update(this.event, this.event._id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/event/all']);
                }, 800);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        )
        console.log(this.event)
        console.log("testtest")
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

}

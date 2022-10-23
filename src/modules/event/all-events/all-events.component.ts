import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '@app/Models/Event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'sb-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {

    addClicked: Boolean = false;
    events?: Event[];
    event !: Event;

    constructor(public eventService: EventService, public route: Router) { }

ngOnInit(): void {
    this.fetchEventsData()
}

addButtonClicked() {
    this.addClicked = !this.addClicked;
}

fetchEventsData() {
    this.eventService.getAll().subscribe(
        (d) => {
            this.events = d;
            console.log(this.events)
        },
        (error) => {
            console.log("aaaaaaaaaaerreur :(")
        }
    );
}

delete (p: Event) {
    this.eventService.delete(p._id).subscribe(
        (d) => {
            this.fetchEventsData()
        }
    );
}

navigateToEvent(p: Event) {
    console.log(p)
    this.route.navigate(['/event/viewEvent/' + p._id])
}

add(e: Event) {
    this.eventService.add(e).subscribe(
        (d) => {
            this.fetchEventsData();
            console.log("succes ajout")
        },
        (error) => {
            console.log("erreur images :(")
        }
    );
}



}

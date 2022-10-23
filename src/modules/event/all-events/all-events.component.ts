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
    searchCanal : string = "";
    searchType : string = "";
    typeOptions = ['Virtual', 'In Person']
    canalOptions = ['Social Media', 'Media', 'Billboards']

    date1!: Date;
    date2!: Date;

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

test(){
    console.log(this.searchCanal,this.searchType)
    this.eventService.getByTypes(this.searchCanal,this.searchType).subscribe(
        (d) => {
            this.events = d
        }
    )
}

test2(){
    console.log(this.date1,this.date2)
    this.eventService.getByDates(this.date1, this.date2).subscribe(
        (d) => {
            this.events = d
        }
    )
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

import { Component, OnInit } from '@angular/core';
import { Event } from '@app/Models/Event';
import { EventService } from '../service/event.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sb-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

    event !: Event;
    id: any;
    updateEtat: boolean = false;
    submitted: boolean = false;
    addClient: boolean = false;

    constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')!;
        this.fetchEventsData(this.id);
    }

    fetchEventsData(idP: any) {
        this.eventService.getById(idP).subscribe(
            (p) => {
                this.event = p;
                console.log(this.event)
                console.log("succes")
            },
            (error) => {
                console.log("erreur images :(")
            }
        )
    }

    update() {
        console.log(this.updateEtat)
        this.updateEtat = !this.updateEtat;
    }
    delete(p: Event) {
        this.eventService.delete(p._id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/event/all']);
                }, 800);
            }
        );
    }


}

import { Component, OnInit } from '@angular/core';
import { Person } from '@app/Models/Person';
import { PersonServiceService } from '../service/person-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'sb-all-persons',
  templateUrl: './all-persons.component.html',
  styleUrls: ['./all-persons.component.scss']
})
export class AllPersonsComponent implements OnInit {

    addClicked: Boolean = false;
    persons ?: Person[];
    person !: Person;

    constructor(public personService: PersonServiceService, public route: Router) { }

    ngOnInit(): void {
        this.fetchPersonsData()
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
    }

    fetchPersonsData() {
        this.personService.getAll().subscribe(
            (d) => {
                this.persons = d;
                console.log(this.persons)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }

    delete(p: Person) {
        this.personService.delete(p.id).subscribe(
            (d)=>{
                this.fetchPersonsData()
            }
        );
    }

    navigateToPerson(p: Person) {
        console.log(p + "nnn")
        this.route.navigate(['/person/viewPerson/'+p.id])
    }

    add(person: Person) {
        this.personService.add(person).subscribe(
            (d) => {
                this.fetchPersonsData();
                console.log("succes ajout")
            },
            (error) => {
                console.log("erreur images :(")
            }
        );
    }

}

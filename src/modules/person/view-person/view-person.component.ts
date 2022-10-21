import { Component, OnInit } from '@angular/core';
import { Person } from '@app/Models/Person';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonServiceService } from '../service/person-service.service';
import { UpdatePersonComponent } from '../update-person/update-person.component';
import { Router } from '@angular/router';
import { Salesman } from '@app/Models/Salesman';
import { SalesmanService } from '@modules/salesman/service/salesman.service';

@Component({
  selector: 'sb-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {

    person !: Person;
    id:any;
    updateEtat: boolean = false;
    submitted: boolean = false;
    purchasesClicked: boolean = false;
    feedbacksClicked: boolean = false;
    salesmanClicked: boolean = false;
    salesmans ?: Salesman[]
    salesmanId: number=0

    constructor(private route: ActivatedRoute,private salesmanService:SalesmanService, private personService: PersonServiceService, private router: Router) { }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.fetchPersonData(this.id);
    }

    fetchPersonData(idP: any) {
        this.personService.getById(idP).subscribe(
            (p) => {
                this.person = p;
                console.log(this.person)
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
    delete(p: Person) {
        this.personService.delete(p.id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/person/all']);
                }, 800);
            }
        );
    }

    salesmanButtonClicked(){
        this.salesmanClicked=!this.salesmanClicked
    }
    feedbacksButtonClicked(){
        this.feedbacksClicked=!this.feedbacksClicked
    }
    purchasesButtonClicked(){
        this.purchasesClicked=!this.feedbacksClicked
    }

    fetchSalesmansData() {
        this.salesmanService.getAll().subscribe(
            (d) => {
                this.salesmans = d;
                console.log(this.salesmans)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }
}

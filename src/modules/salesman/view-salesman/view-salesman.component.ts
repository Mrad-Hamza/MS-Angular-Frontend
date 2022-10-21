import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Salesman } from '@app/Models/Salesman';
import { SalesmanService } from '../service/salesman.service';
import { Person } from '@app/Models/Person';
import { PersonServiceService } from '@modules/person/service/person-service.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'sb-view-salesman',
  templateUrl: './view-salesman.component.html',
  styleUrls: ['./view-salesman.component.scss']
})
export class ViewSalesmanComponent implements OnInit {

    salesman !: Salesman;
    id: any;
    updateEtat: boolean = false;
    submitted: boolean = false;
    addClient: boolean = false;
    persons?: Person[];
    clients?: Person[];
    newClientId : number =0;


    constructor(private route: ActivatedRoute, private salesmanService: SalesmanService, private router: Router, private personService:PersonServiceService) { }

    ngOnInit(): void {
        this.fetchPersonsData();
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.fetchSalesmanData(this.id);
    }

    fetchPersonsData() {
        this.personService.getAll().subscribe(
            (d) => {
                console.log(d)
                this.persons = d;
                console.log(this.persons)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }

    fetchClientsData() {
        this.personService.getBySalesmansId(this.salesman.id).subscribe(
            (d) => {
                console.log(d)
                this.clients = d;
                console.log(this.clients)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }



    addClientToSalesman() {
        console.log(this.newClientId)
        this.salesmanService.addClient(this.newClientId,this.salesman.id)
        this.fetchClientsData()
    }

    fetchSalesmanData(idP: any) {
        this.salesmanService.getById(idP).subscribe(
            (p) => {
                this.salesman = p;
                this.fetchClientsData();
                console.log(this.salesman)
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
    delete(p: Salesman) {
        this.salesmanService.delete(p.id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/salesman/all']);
                }, 800);
            }
        );
    }

    addClientButtonClicked() {
        this.addClient = !this.addClient;
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesmanService } from '../service/salesman.service';
import { Salesman } from '@app/Models/Salesman';

@Component({
  selector: 'sb-all-salesmans',
  templateUrl: './all-salesmans.component.html',
  styleUrls: ['./all-salesmans.component.scss']
})
export class AllSalesmansComponent implements OnInit {

    addClicked: Boolean = false;
    salesmans?: Salesman[];
    salesman !: Salesman;

    constructor(public salesmanService: SalesmanService, public route: Router) { }

    ngOnInit(): void {
        this.fetchSalesmansData()
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
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

    delete(p: Salesman) {
        this.salesmanService.delete(p.id).subscribe(
            (d) => {
                this.fetchSalesmansData()
            }
        );
    }

    navigateToSalesman(p: Salesman) {
        console.log(p + "nnn")
        this.route.navigate(['/salesman/viewSalesman/' + p.id])
    }

    add(salesman: Salesman) {
        this.salesmanService.add(salesman).subscribe(
            (d) => {
                this.fetchSalesmansData();
                console.log("succes ajout")
            },
            (error) => {
                console.log("erreur images :(")
            }
        );
    }
}

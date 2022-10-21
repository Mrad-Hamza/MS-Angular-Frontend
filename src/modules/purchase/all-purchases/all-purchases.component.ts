import { Component, OnInit } from '@angular/core';
import { Purchase } from '@app/Models/Purchase';
import { PurchaseService } from '../service/purchase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'sb-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.scss']
})
export class AllPurchasesComponent implements OnInit {

    addClicked: Boolean = false;
    purchases?: Purchase[];
    purchase !: Purchase;


    constructor(public purchaseService: PurchaseService, public route: Router) { }

    ngOnInit(): void {
        this.fetchPurchasesData()
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
    }

    fetchPurchasesData() {
        this.purchaseService.getAll().subscribe(
            (d) => {
                this.purchases = d;
                console.log(this.purchases)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }

    delete(p: Purchase) {
        this.purchaseService.delete(p.id).subscribe(
            (d) => {
                this.fetchPurchasesData()
            }
        );
    }

    navigateToPurchase(p: Purchase) {
        console.log(p )
        this.route.navigate(['/purchase/viewPurchase/' + p.id])
    }

    add(purchase: Purchase) {
        this.purchaseService.add(purchase).subscribe(
            (d) => {
                this.fetchPurchasesData();
                console.log("succes ajout")
            },
            (error) => {
                console.log("erreur images :(")
            }
        );
    }

}

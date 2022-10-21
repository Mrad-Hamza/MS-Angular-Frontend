import { Component, OnInit } from '@angular/core';
import { Purchase } from '@app/Models/Purchase';
import { PurchaseService } from '../service/purchase.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sb-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.scss']
})
export class ViewPurchaseComponent implements OnInit {

    purchase !: Purchase;
    id: any;
    updateEtat: boolean = false;
    submitted: boolean = false;

    constructor(private route: ActivatedRoute, private purchaseService: PurchaseService, private router: Router) { }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.fetchPurchaseData(this.id);
    }

    fetchPurchaseData(idP: any) {
        this.purchaseService.getById(idP).subscribe(
            (p) => {
                this.purchase = p;
                console.log(this.purchase)
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
    delete(p: Purchase) {
        this.purchaseService.delete(p.id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/purchase/all']);
                }, 800);
            }
        );
    }

}

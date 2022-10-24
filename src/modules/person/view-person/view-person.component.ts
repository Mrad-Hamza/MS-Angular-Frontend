import { Component, OnInit } from '@angular/core';
import { Person } from '@app/Models/Person';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonServiceService } from '../service/person-service.service';
import { UpdatePersonComponent } from '../update-person/update-person.component';
import { Router } from '@angular/router';
import { Salesman } from '@app/Models/Salesman';
import { SalesmanService } from '@modules/salesman/service/salesman.service';
import { PurchaseService } from '@modules/purchase/service/purchase.service';
import { PromotionService } from '@modules/promotion/service/promotion.service';
import { Promotion } from '@app/Models/Promotion';
import { Purchase } from '@app/Models/Purchase';
@Component({
    selector: 'sb-view-person',
    templateUrl: './view-person.component.html',
    styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {

    person !: Person;
    id: any;
    updateEtat: boolean = false;
    submitted: boolean = false;
    purchasesClicked: boolean = false;
    promotionsClicked: boolean = false;
    salesmanClicked: boolean = false;
    salesmans?: Salesman[]
    salesmanId: number = 0
    purchaseId: number = 0
    promotionId: number = 0
    allPromotions?: Promotion[]
    allPurchases?: Purchase[]

    constructor(private promotionService: PromotionService, private purchaseService: PurchaseService, private route: ActivatedRoute, private salesmanService: SalesmanService, private personService: PersonServiceService, private router: Router) { }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.fetchPersonData(this.id);
        this.fetchSalesmansData()
        this.fetchPromotionData()
        this.fetchPurchasesData()
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

    fetchPromotionData(){
        this.promotionService.getAll().subscribe(
            (res)=>{
                this.allPromotions=res;
                console.log(this.allPromotions)
            }
        )
    }

    fetchPurchasesData(){
        this.purchaseService.getAll().subscribe(
            (res)=>{
                this.allPurchases=res;
                console.log(this.allPurchases)
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

    salesmanButtonClicked() {
        this.salesmanClicked = !this.salesmanClicked
    }
    promotionsButtonClicked() {
        this.promotionsClicked = !this.promotionsClicked
    }
    purchasesButtonClicked() {
        this.purchasesClicked = !this.purchasesClicked
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


    addClientToSalesman() {
        console.log(this.salesmanId)
        this.salesmanService.addClient(this.person.id, this.salesmanId).subscribe(
            () => {
                this.fetchPersonData(this.id)
            }
        )
    }

    addPurchaseToSalesman() {
        this.purchaseService.setOwner(this.person.id, this.purchaseId).subscribe(
            () => {
                this.fetchPersonData(this.id)
            }
        )
    }

    addPromotionToSalesman() {
        this.promotionService.setOwner(this.person.id, this.promotionId).subscribe(
            () => {
                this.fetchPersonData(this.id)
            }
        )
    }
}

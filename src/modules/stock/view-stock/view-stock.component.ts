import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salesman } from '@app/Models/Salesman';
import { Stock } from '@app/Models/Stock';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'sb-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss']
})
export class ViewStockComponent implements OnInit {

  stock !: Stock;
  id: any;
  updateEtat: boolean = false;
  submitted: boolean = false;
  addClient: boolean = false;
 
  newClientId: number = 0;


  constructor(private route: ActivatedRoute, private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    
    this.id = parseInt(this.route.snapshot.paramMap.get('idStock')!);
    this.fetchStockData(this.id);
  }

  

  



  
  fetchStockData(idP: any) {
    this.stockService.getById(idP).subscribe(
      (p) => {
        this.stock = p;
        
        console.log(this.stock)
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
    this.stockService.delete(p.id).subscribe(
      (d) => {
        setTimeout(() => {
          this.router.navigate(['/stock/all']);
        }, 800);
      }
    );
  }

  

}

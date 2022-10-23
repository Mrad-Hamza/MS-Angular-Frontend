import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '@app/Models/Stock';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'sb-allstocks',
  templateUrl: './allstocks.component.html',
  styleUrls: ['./allstocks.component.scss']
})
export class AllstocksComponent implements OnInit {

  addClicked: Boolean = false;
  stocks?: Stock[];
  stock !: Stock;
  updateEtat: boolean = false;

  idStock: any;
  constructor(public stockservice: StockService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
 
   
    this.fetchStockData();
  }
  fetchStockDataa(idStock: any) {
    this.stockservice.getById(idStock).subscribe(
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
  addButtonClicked() {
    this.addClicked = !this.addClicked;
  }

  fetchStockData() {
    this.stockservice.getAll().subscribe(
      (d) => {
        this.stocks = d;
        console.log(this.stocks)
      },
      (error) => {
        console.log("aaaaaaaaaaerreur :(")
      }
    );
  }

  delete(p: Stock) {
    this.stockservice.delete(p.idStock).subscribe(
      (d) => {
        this.fetchStockData()
      }
    );
  }

  navigateToStock(p: Stock) {
    console.log(p + "nnn")
    this.router.navigate(['/stock/viewStock/' + p.idStock])
  }

  update() {
    console.log(this.updateEtat)
    this.updateEtat = !this.updateEtat;
  }
  add(stock: Stock) {
    this.stockservice.add(stock).subscribe(
      (d) => {
        this.fetchStockData();
        console.log("added with success ")
      },
      (error) => {
        console.log("erreur images :(")
      }
    );
  }
}



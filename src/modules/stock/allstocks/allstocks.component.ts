import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public stockservice: StockService, public route: Router) { }

  ngOnInit(): void {
    this.fetchStockData();
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

  // navigateToSalesman(p: Stock) {
  //   console.log(p + "nnn")
  //   this.route.navigate(['/salesman/viewSalesman/' + p.idStock])
  // }

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



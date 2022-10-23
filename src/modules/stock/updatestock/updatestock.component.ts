import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from '@app/Models/Stock';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'sb-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.scss']
})
export class UpdatestockComponent implements OnInit {

  @Input() stock !: Stock
  submitted: boolean = false;
  addForm !: FormGroup;

  constructor(private fb: FormBuilder, private stockService: StockService, private router: Router) {
    this.addForm = fb.group({
      stockName: ['', Validators.required],
      qte: ['', Validators.required],
      minQte: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    console.log(this.stock)
    this.initializeForm()
  }

  onSubmit() {

    this.stockService.update(this.stock, this.stock.idStock).subscribe(
      (d) => {
        setTimeout(() => {
          this.router.navigate(['/stock/all']);
        }, 800);
      }
      // (error) => {
      //     console.log('hhhhhhhh erreur');
      // } 
    )
    console.log(this.stock)
    console.log("testtest")
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      stockName: ['', Validators.required],
      qte: ['', Validators.required],
      minQte: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Stock } from '@app/Models/Stock';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'sb-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddstockComponent implements OnInit {

  initialValue: Stock = new Stock;
  addForm !: FormGroup;
  @Output() stock: EventEmitter<Stock> = new EventEmitter<Stock>();

  constructor(private fb: FormBuilder, private stockservice: StockService) { }


  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      stockName: ['', Validators.required],
      qte: ['', Validators.required],
      minQte: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  get stockName() {
    return this.addForm.get('stockName')
  }
  get qte() {
    return this.addForm.get('qte')
  }
  get minQte() {
    return this.addForm.get('minQte')
  }
  get description() {
    return this.addForm.get('description')
  }


  submit() {
    console.log(this.addForm.value);
    this.initialValue.stockName = this.addForm.value.stockName;
    this.initialValue.qte = this.addForm.value.qte;
    this.initialValue.minQte = this.addForm.value.minQte;
    this.initialValue.description = this.addForm.value.description;

    this.stock.emit(this.initialValue)
  }
}

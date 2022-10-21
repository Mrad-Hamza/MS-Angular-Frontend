import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Salesman } from '@app/Models/Salesman';
import { SalesmanService } from '../service/salesman.service';

@Component({
  selector: 'sb-add-salesman',
  templateUrl: './add-salesman.component.html',
  styleUrls: ['./add-salesman.component.scss']
})
export class AddSalesmanComponent implements OnInit {

    initialValue: Salesman = new Salesman;
    addForm !: FormGroup;
    @Output() salesman: EventEmitter<Salesman> = new EventEmitter<Salesman>();

    constructor(private fb: FormBuilder, private salesmanService: SalesmanService) { }


    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            bonus: ['', Validators.required],
            salary: ['', Validators.required],
            phone_numver: ['', Validators.required],
        })
    }

    get first_name() {
        return this.addForm.get('first_name')
    }
    get last_name() {
        return this.addForm.get('last_name')
    }
    get bonus() {
        return this.addForm.get('bonus')
    }
    get salary() {
        return this.addForm.get('salary')
    }
    get phone_numver() {
        return this.addForm.get('phone_numver')
    }


    submit() {
        console.log(this.addForm.value);
        this.initialValue.first_name = this.addForm.value.first_name;
        this.initialValue.last_name = this.addForm.value.last_name;
        this.initialValue.bonus = this.addForm.value.bonus;
        this.initialValue.salary = this.addForm.value.salary;
        this.initialValue.phone_numver = this.addForm.value.phone_numver;
        this.salesman.emit(this.initialValue)
    }


}

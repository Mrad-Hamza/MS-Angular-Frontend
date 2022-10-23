import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payroll } from '../../../app/Models/Payroll';
import { PayrollService } from '../../../app/Services/payroll.service';

@Component({
  selector: 'sb-all-payroll',
  templateUrl: './all-payroll.component.html',
  styleUrls: ['./all-payroll.component.scss']
})
export class AllPayrollComponent implements OnInit {
  
  payrolls: Payroll[]=[];
  constructor(private payrollService: PayrollService, private router: Router) {     
  }

  ngOnInit(): void {
    this.payrollService.viewPayrolls().subscribe(payrolls => {
      console.log(payrolls);
      this.payrolls = payrolls;
    });
  }

  deletePayroll(payroll : Payroll){
    let conf = confirm("Are you sure ?");
    if(conf){
      this.payrollService.deletePayroll(payroll.id).subscribe(() => {
        console.log("Payroll deleted");
      });
    }
    this.deletePayrollFromTable(payroll);
  }

  deletePayrollFromTable(payroll: Payroll){
    this.payrolls.forEach((cur, index) => {
      if(payroll.id === cur.id){
        this.payrolls.splice(index, 1);
      }
    });
  }
}

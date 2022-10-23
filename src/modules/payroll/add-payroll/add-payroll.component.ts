import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payroll } from '../../../app/Models/Payroll';
import { PayrollService } from '../../../app/Services/payroll.service';

@Component({
  selector: 'sb-add-payroll',
  templateUrl: './add-payroll.component.html',
  styleUrls: ['./add-payroll.component.scss']
})
export class AddPayrollComponent implements OnInit {

  newPayroll = new Payroll();
  constructor(private payrollService: PayrollService, private router: Router) {     
  }

  ngOnInit(): void {
  }

  addPayroll(){
    this.payrollService.addPayroll(this.newPayroll).subscribe(payroll => {
      console.log(payroll);
    });
    this.router.navigate(['payroll/all']).then(()=>{
      window.location.reload();
    });
  }

}

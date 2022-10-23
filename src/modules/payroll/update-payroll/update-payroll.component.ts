import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payroll } from '../../../app/Models/Payroll';
import { PayrollService } from '../../../app/Services/payroll.service';

@Component({
  selector: 'sb-update-payroll',
  templateUrl: './update-payroll.component.html',
  styleUrls: ['./update-payroll.component.scss']
})
export class UpdatePayrollComponent implements OnInit {

  currentPayroll = new Payroll();
  constructor(private activatedRoute: ActivatedRoute, private payrollService: PayrollService, private router: Router) {     
  }

  ngOnInit(): void {
    this.payrollService.viewPayroll(this.activatedRoute.snapshot.params['id']).subscribe( payroll => {
      this.currentPayroll = payroll;
    });
    console.log(this.currentPayroll);
  }

  updatePayroll(){
    this.payrollService.updatePayroll(this.currentPayroll.id, this.currentPayroll).subscribe(payroll => {
      console.log(payroll);
    });
    this.router.navigate(['payroll/all']).then(()=>{
      window.location.reload();
    });
  }

}

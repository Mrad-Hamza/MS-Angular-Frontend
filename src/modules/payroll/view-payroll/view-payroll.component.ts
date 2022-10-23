import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payroll } from '../../../app/Models/Payroll';
import { PayrollService } from '../../../app/Services/payroll.service';

@Component({
  selector: 'sb-view-payroll',
  templateUrl: './view-payroll.component.html',
  styleUrls: ['./view-payroll.component.scss']
})
export class ViewPayrollComponent implements OnInit {
  
  payroll = new Payroll();
  constructor(private activatedRoute: ActivatedRoute, private payrollService: PayrollService, private router: Router) {     
  }

  ngOnInit(): void {
    this.payrollService.viewPayroll(this.activatedRoute.snapshot.params['id']).subscribe( payroll => {
      this.payroll = payroll;
    });
    console.log(this.payroll);
  }

  deletePayroll(payroll : Payroll){
    let conf = confirm("Are you sure ?");
  if(conf){
    this.payrollService.deletePayroll(payroll.id).subscribe(() => {
      console.log("Payroll Deleted");
    });
  }
  this.router.navigate(['all']).then(()=>{
    window.location.reload();
  });
  }
}

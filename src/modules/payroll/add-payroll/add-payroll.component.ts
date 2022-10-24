import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '@app/Models/Employee';
import { EmployeeService } from '@app/Services/employee.service';
import { Payroll } from '../../../app/Models/Payroll';
import { PayrollService } from '../../../app/Services/payroll.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sb-add-payroll',
  templateUrl: './add-payroll.component.html',
  styleUrls: ['./add-payroll.component.scss']
})
export class AddPayrollComponent implements OnInit {

  newPayroll = new Payroll();
  employees: Employee[]=[];
  constructor(private employeeService: EmployeeService, private payrollService: PayrollService, private router: Router) {     
  }

  ngOnInit(): void {
    this.employeeService.viewEmployees().subscribe(employees => {
      console.log(employees);
      this.employees = employees;
    });
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

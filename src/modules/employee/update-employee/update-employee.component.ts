import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '@app/Models/Employee';
import { EmployeeService } from '@app/Services/employee.service';

@Component({
  selector: 'sb-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  currentEmployee = new Employee();
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {     
  }

  ngOnInit(): void {
    this.employeeService.viewEmployee(this.activatedRoute.snapshot.params['id']).subscribe( employee => {
      this.currentEmployee = employee;
    });
    console.log(this.currentEmployee);
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.currentEmployee.id, this.currentEmployee).subscribe(employee => {
      console.log(employee);
    });
    this.router.navigate(['employee/all']).then(()=>{
      window.location.reload();
    });
  }

}

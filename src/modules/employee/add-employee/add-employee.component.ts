import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '@app/Models/Employee';
import { EmployeeService } from '@app/Services/employee.service';

@Component({
  selector: 'sb-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  newEmployee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) {     
  }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService.addEmployee(this.newEmployee).subscribe(employee => {
      console.log(employee);
    });
    this.router.navigate(['employee/all']).then(()=>{
      window.location.reload();
    });
  }

}

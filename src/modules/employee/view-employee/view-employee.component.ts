import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '@app/Models/Employee';
import { EmployeeService } from '@app/Services/employee.service';

@Component({
  selector: 'sb-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employee = new Employee();
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {     
  }

  ngOnInit(): void {
    this.employeeService.viewEmployee(this.activatedRoute.snapshot.params['id']).subscribe( employee => {
      this.employee = employee;
    });
    console.log(this.employee);
  }

  deleteEmployee(employee : Employee){
    let conf = confirm("Are you sure ?");
  if(conf){
    this.employeeService.deleteEmployee(employee.id).subscribe(() => {
      console.log("Employee Deleted");
    });
  }
  this.router.navigate(['all']).then(()=>{
    window.location.reload();
  });
  }
}

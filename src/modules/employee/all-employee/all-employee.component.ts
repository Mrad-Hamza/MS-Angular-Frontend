import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '@app/Models/Employee';
import { EmployeeService } from '@app/Services/employee.service';

@Component({
  selector: 'sb-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.scss']
})
export class AllEmployeeComponent implements OnInit {

  employees: Employee[]=[];
  constructor(private employeeService: EmployeeService, private router: Router) {     
  }

  ngOnInit(): void {
    this.employeeService.viewEmployees().subscribe(employees => {
      console.log(employees);
      this.employees = employees;
    });
  }

  deleteEmployee(employee : Employee){
    let conf = confirm("Are you sure ?");
    if(conf){
      this.employeeService.deleteEmployee(employee.id).subscribe(() => {
        console.log("Employee deleted");
      });
    }
    this.deleteEmployeeFromTable(employee);
  }

  deleteEmployeeFromTable(employee: Employee){
    this.employees.forEach((cur, index) => {
      if(employee.id === cur.id){
        this.employees.splice(index, 1);
      }
    });
  }

  public onOpenModal(employee: Employee, mode: string){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if(mode === 'edit') {
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode === 'delete') {
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }
}

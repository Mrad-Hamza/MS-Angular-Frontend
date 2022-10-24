import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL: string = 'http://localhost:8083/api/employee2';
  employees: Employee[]=[];
  fact:any;

  constructor(private http: HttpClient) { }

  viewEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL + '/viewAll');
  }
  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiURL + "/create", employee, httpOptions);
  }

  deleteEmployee(id: number){
    return this.http.delete(this.apiURL + "/remove/"+id, httpOptions);
  }

  viewEmployee(id: number): Observable<Employee>{
   //this.fact=this.factures.find(f => f.idFacture == id);
   return this.http.get<Employee>(this.apiURL + "/view/"+id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>{
   return this.http.put<Employee>(this.apiURL + "/modify/" +id, employee, httpOptions); 
  }
}

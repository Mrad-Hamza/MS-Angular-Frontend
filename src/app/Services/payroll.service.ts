import { Injectable } from '@angular/core';
import { Payroll } from '../Models/Payroll';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  apiURL: string = 'http://localhost:8082/api/payrolls';
  payrolls: Payroll[]=[];
  fact:any;

  constructor(private http: HttpClient) { }

  viewPayrolls(): Observable<Payroll[]>{
    return this.http.get<Payroll[]>(this.apiURL + '/viewAll');
  }
  addPayroll(payroll: Payroll): Observable<Payroll>{
    return this.http.post<Payroll>(this.apiURL + "/create", payroll, httpOptions);
  }

  deletePayroll(id: number){
    return this.http.delete(this.apiURL + "/remove/"+id, httpOptions);
  }

  viewPayroll(id: number): Observable<Payroll>{
   //this.fact=this.factures.find(f => f.idFacture == id);
   return this.http.get<Payroll>(this.apiURL + "/view/"+id);
  }

  updatePayroll(id: number, payroll: Payroll): Observable<Payroll>{
   return this.http.put<Payroll>(this.apiURL + "/modify/" +id, payroll, httpOptions); 
  }
}

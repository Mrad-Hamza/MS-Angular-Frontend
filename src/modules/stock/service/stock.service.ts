import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '@app/Models/Stock';
import { Observable } from 'rxjs';
const URI = "http://localhost:8090/SpringMVC/stock/";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(URI + "retrieve-all-stock");
  }

  getById(idStock: number): Observable<Stock> {
    return this.http.get<Stock>(URI + "retrieve-stock/" + idStock)
  }

  delete(idStock: number) {
    return this.http.delete<Stock>(URI + "remove-stock/" + idStock)
  }

  update(data: any, idStock: number) {
    return this.http.put<Stock>(URI + "modify-stock/" + idStock, data);
  }

  add(data: any,): Observable<Stock> {
    return this.http.post<Stock>(URI + "add-stock/" , data);
  }

}

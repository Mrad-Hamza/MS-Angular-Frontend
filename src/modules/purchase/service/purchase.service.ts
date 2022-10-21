import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '@app/Models/Purchase';

const URI = "http://localhost:8090/SpringMVC/servlet/";


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Purchase[]> {
        return this.http.get<Purchase[]>(URI + "getAllPurchases");
    }

    getById(id: number): Observable<Purchase> {
        return this.http.get<Purchase>(URI + "getPurchaseById/" + id)
    }

    delete(id: number) {
        return this.http.delete<Purchase>(URI + "deletePurchase/" + id)
    }

    update(data: any, id: number) {
        return this.http.put<Purchase>(URI + "updatePurchase/" + id, data);
    }

    add(data: any): Observable<Purchase> {
        return this.http.post<Purchase>(URI + "addPurchase", data);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '@app/Models/Promotion';

const URI = "http://localhost:8090/SpringMVC/servlet/";


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Promotion[]> {
        return this.http.get<Promotion[]>(URI + "getAllPromotions");
    }

    getById(id: number): Observable<Promotion> {
        return this.http.get<Promotion>(URI + "getPromotionById/" + id)
    }

    delete(id: number) {
        return this.http.delete<Promotion>(URI + "deletePromotion/" + id)
    }

    update(data: any, id: number) {
        return this.http.put<Promotion>(URI + "updatePromotion/" + id, data);
    }

    add(data: any): Observable<Promotion> {
        return this.http.post<Promotion>(URI + "addPromotion", data);
    }

    setOwner(idOwner: number, idPurchase: number) {
        return this.http.put<Promotion>(URI + "promotion/setOwner/" + idOwner + "/" + idPurchase, {});
    }
}

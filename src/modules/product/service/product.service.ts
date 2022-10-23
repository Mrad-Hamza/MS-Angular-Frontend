import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/Models/Product';
import { Observable } from 'rxjs';
const URI = "http://localhost:8090/SpringMVC/product/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URI + "retrieve-all-products");
  }

  getById(idProduct: number): Observable<Product> {
    return this.http.get<Product>(URI + "/retrieve-product/" + idProduct)
  }

  delete(idProduct: number) {
    return this.http.delete<Product>(URI + "remove-product/" + idProduct)
  }

  update(data: any, idProduct: number) {
    return this.http.put<Product>(URI + "modify-product/" + idProduct, data);
  }

  add(data: any, idStock:number): Observable<Product> {
    return this.http.post<Product>(URI + "add-product/" + idStock, data);
  }

  // addClient(idC: number, idSalesman: number) {
  //   return this.http.put<Product>(URI + "salesman/setClient/" + idC + "/" + idSalesman, {});
  // }
}

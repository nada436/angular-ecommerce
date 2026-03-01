import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  list: Iproduct[] = [] as Iproduct[] ;

  constructor(private http:HttpClient) {

}

  
getOneProduct(id: number | string): Observable<Iproduct> {
 return this.http.get<Iproduct>(`${environment.baseurl}/products/${id}`)
}

   getall(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${environment.baseurl}/products`)
  }

  
 deleteOneProduct(id: number): Observable<any> {
  return this.http.delete(`${environment.baseurl}/products/${id}`);
}

 addOneProduct(product: Partial<Iproduct>): Observable<Iproduct> {
  return this.http.post<Iproduct>(`${environment.baseurl}/products`,product)
  }



//update
updateProduct(id: number, newProduct: Iproduct):Observable<Iproduct> {
  return this.http.put<Iproduct>(`${environment.baseurl}/products/${id}`,newProduct)
}


}
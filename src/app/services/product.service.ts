import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs'


// En los servicios va a estar toda la logica de negocios para conectarnos a nuestra API y obtener nuestros datos, crearlos, modificarlos o eliminarlos.

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'https://nest-project-zeta.vercel.app'

  constructor(private http: HttpClient) { }

  // Mi logica de negocios

  getProducts(): Observable<Product[]>{

    const result = this.http.get<Product[]>(`${this.BASE_URL}/product`)

    return result
  }

  getProduct(id: string): Observable<Product>{

    const result = this.http.get<Product>(`${this.BASE_URL}/product/${id}`)

    return result
  }

  createProduct(product: Product): Observable<Product>{

    const result = this.http.post<Product>(`${this.BASE_URL}/product/create`, product)

    return result
  }

  updateProduct(id:string, product: Product): Observable<Product>{

    const result = this.http.put<Product>(`${this.BASE_URL}/product/update?productID=${id}`, product)

    return result
  }

  deleteProduct(id: string): Observable<Product>{

    const result = this.http.delete<Product>(`${this.BASE_URL}/product/delete?productID=${id}`)

    return result
  }
}

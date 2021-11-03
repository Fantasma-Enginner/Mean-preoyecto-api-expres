import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private URl = 'http://localhost:4000/api/productos/';
  constructor( private http: HttpClient) { }

  getProducto(): Observable<any>{
    return this.http.get(this.URl);
  }

  eliminarProducto(id: string): Observable<any>{
    return this.http.delete(this.URl + id);
  }

  guardarProducto(producto: Producto): Observable<any>{
    return this.http.post(this.URl,producto);
  }

  obtenerProducto(id: string):Observable<any>{
    return this.http.get(this.URl + id);
  }

  editarProducto(id: string, producto: Producto):Observable <any>{
     return this.http.put(this.URl + id, producto);
  }

}

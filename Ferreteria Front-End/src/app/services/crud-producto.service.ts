import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Producto } from '../model/Producto';

@Injectable()
export class CrudProductoService {
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/ferreteria/productos';

  getProducto() {
    return this.http.get<Producto[]>(this.Url);
  }

  guardarProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }

  getProductoId(idProducto:number){
    return this.http.get<Producto>(this.Url+"/"+idProducto);
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.idProducto,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.idProducto);
  }
}
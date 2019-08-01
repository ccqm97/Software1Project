import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../model/Proveedor';

@Injectable() 
export class CrudProveedorService {
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/ferreteria/proveedores';

  getProveedores() {
    return this.http.get<Proveedor[]>(this.Url);
  }

  guardarProveedor(proveedor:Proveedor){
    return this.http.post<Proveedor>(this.Url,proveedor);
  }

  getProveedorNit(nitProveedor:number){
    return this.http.get<Proveedor>(this.Url+"/"+nitProveedor);
  }

  updateProveedor(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.Url+"/"+proveedor.nitProveedor,proveedor);
  }

  deleteProveedor(proveedor:Proveedor){
    return this.http.delete<Proveedor>(this.Url+"/"+proveedor.nitProveedor);
  }
}
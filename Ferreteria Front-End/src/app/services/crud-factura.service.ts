import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../model/Factura';

@Injectable()
export class CrudFacturaService {
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/ferreteria/facturas';

  getFactura() {
    return this.http.get<Factura[]>(this.Url);
  }

  guardarFactura(factura:Factura){
    return this.http.post<Factura>(this.Url,factura);
  }

  getFacturaId(idFactura:number){
    return this.http.get<Factura>(this.Url+"/"+idFactura);
  }

  updateFactura(factura:Factura){
    return this.http.put<Factura>(this.Url+"/"+factura.idFactura,factura);
  }

  deleteFactura(factura:Factura){
    return this.http.delete<Factura>(this.Url+"/"+factura.idFactura);
  }
}

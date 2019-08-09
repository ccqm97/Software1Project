import { Injectable } from '@angular/core';
import { ItemProducto } from '../model/ItemProducto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrudItemProductoService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/ferreteria/itemProducto';

  guardarItemProducto(itemProducto:ItemProducto){
    return this.http.post<ItemProducto>(this.Url,itemProducto);
  }

  getItemProductoCode(codeProducto:string){
    return this.http.get<ItemProducto[]>(this.Url+"/"+codeProducto);
  }
}

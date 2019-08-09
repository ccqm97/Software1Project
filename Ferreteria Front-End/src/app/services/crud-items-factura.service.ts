import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemFactura } from '../model/ItemFactura';

@Injectable({
  providedIn: 'root'
})
export class CrudItemsFacturaService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/ferreteria/itemsFactura';

  getItem() {
    return this.http.get<ItemFactura[]>(this.Url);
  }

  guardarItem(itemsFactura: ItemFactura) {
    return this.http.post<ItemFactura>(this.Url, itemsFactura);
  }
}

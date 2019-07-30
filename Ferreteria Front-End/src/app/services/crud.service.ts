import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  personas: Persona[];

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8083/Ferreteria/personas';

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url, persona);
  }

}

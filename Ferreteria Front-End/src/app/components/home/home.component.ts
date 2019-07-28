import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { Persona } from '../../model/Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas: Persona[];

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit() {
    this.crud.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });

   }

  list() {
    alert('sd');
  }

  save(persona: Persona) {
    this.crud.createPersona(persona)
    .subscribe(data => {
      alert('se agrego');
    });
  }
}

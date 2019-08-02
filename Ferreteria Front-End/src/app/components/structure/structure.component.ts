import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  productos() {
    this.router.navigate(['mostrarProductos']);
  }

  proveedores() {
    this.router.navigate(['mostrarProveedores']);
  }

  facturas() {
    this.router.navigate(['mostrarFacturas']);
  }
}

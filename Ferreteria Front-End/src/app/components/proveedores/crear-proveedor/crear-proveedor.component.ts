import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudProveedorService } from '../../../services/crud-proveedor.service';
import { Proveedor } from '../../../model/Proveedor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  prov: FormGroup;
  submitted = false;

  constructor(private router:Router, private sevice:CrudProveedorService,private formBuilder: FormBuilder) { }

  proveedor: Proveedor = new Proveedor();

  ngOnInit() {
    this.prov = this.formBuilder.group({
      nit: ['', [Validators.required, Validators.pattern('[0-9]*')]],            
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.pattern('[0-9]*')]]
  });
  }

  get f() { return this.prov.controls; }

  guardarProveedor(){
    this.submitted = true;
         if (this.prov.invalid) {
            return;
        }
    this.sevice.guardarProveedor(this.proveedor)
    .subscribe(data=>{
      this.router.navigate(["mostrarProveedores"]);
    });
  }

  cancelar(){
    this.router.navigate(["mostrarProveedores"]);
  }
}

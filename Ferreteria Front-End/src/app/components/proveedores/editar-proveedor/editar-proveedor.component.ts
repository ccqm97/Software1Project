import { Component, OnInit } from '@angular/core';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/model/Proveedor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  prov: FormGroup;
  submitted = false;
  proveedor:Proveedor = new Proveedor();
  constructor(private router:Router,private service:CrudProveedorService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.prov = this.formBuilder.group({
      nit: ['', [Validators.required, Validators.pattern('[0-9]*')]],            
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.pattern('[0-9]*')]]
  });
    this.editarProveedor();
  }

  get f() { 
    return this.prov.controls; 
  }


  editarProveedor(){
    this.submitted = true;
         if (this.prov.invalid) {
            return;
        }
    let nitProveedor = localStorage.getItem("nitProveedor");
    this.service.getProveedorNit(+nitProveedor)
    .subscribe(data=>{
      this.proveedor= data; 
    })
  }

  actualizarProveedor(proveedor:Proveedor){
    this.submitted = true;
         if (this.prov.invalid) {
            return;
        }
    this.service.updateProveedor(proveedor)
    .subscribe(data=>{
      this.proveedor = data;
      alert("Se actualizo el proveedor");
      this.router.navigate(["mostrarProveedores"]);
  });
  }
  
  cancelar(){
    this.router.navigate(["mostrarProveedores"]);
  }

}

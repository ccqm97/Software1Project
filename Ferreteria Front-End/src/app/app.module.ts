import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { CrudService } from './services/crud.service';
import { CrudProveedorService } from './services/crud-proveedor.service';
import { HttpClientModule } from '@angular/common/http';
import { CrearProveedorComponent } from './components/proveedores/crear-proveedor/crear-proveedor.component';
import { MostarProveedorComponent } from './components/proveedores/mostar-proveedor/mostar-proveedor.component';
import { EditarProveedorComponent } from './components/proveedores/editar-proveedor/editar-proveedor.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { MostrarProductosComponent } from './components/producto/mostrar-productos/mostrar-productos.component';
import { CrudProductoService } from './services/crud-producto.service';
import { EditarFacturaComponent } from './components/factura/editar-factura/editar-factura.component';
import { MostrarFacturaComponent } from './components/factura/mostrar-factura/mostrar-factura.component';
import { CrudFacturaService } from './services/crud-factura.service';
import { CrearFacturaComponent } from './components/factura/crear-factura/crear-factura.component';

const config = {
  apiKey: 'AIzaSyAFyCq73g0Gtl_AjMmT76uWU6g8LwMrERk',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'ferreteria-3e006',
};

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CrearProveedorComponent,
    MostarProveedorComponent,
    EditarProveedorComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    MostrarProductosComponent,
    EditarFacturaComponent,
    MostrarFacturaComponent,
    CrearFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudService,
    CrudProveedorService,
    CrudProductoService,
    CrudFacturaService],
  bootstrap: [AppComponent]
})


export class AppModule { }

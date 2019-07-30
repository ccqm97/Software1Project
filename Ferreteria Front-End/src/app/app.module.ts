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
import { EliminarProveedorComponent } from './components/proveedores/eliminar-proveedor/eliminar-proveedor.component';

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
    EliminarProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudService,CrudProveedorService],
  bootstrap: [AppComponent]
})


export class AppModule { }

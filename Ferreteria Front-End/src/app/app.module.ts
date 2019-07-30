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
import { HttpClientModule } from '@angular/common/http';
import { StructureComponent } from './components/structure/structure.component';

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
    StructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})


export class AppModule { }

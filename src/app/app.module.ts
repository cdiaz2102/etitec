import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';

import {FlashMessagesModule} from 'angular2-flash-messages'
import {FlashMessagesService} from 'angular2-flash-messages'

import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'
import { environment } from '../environments/environment';

import{AuthService} from './servicios/auth.service';
import {NoticiasService} from './servicios/noticias.service'
import {AuthGuard} from './auth.guard'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NavbarComponent,
    NotFoundPageComponent,
    PrivadoPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, HttpClientModule, NoticiasService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }

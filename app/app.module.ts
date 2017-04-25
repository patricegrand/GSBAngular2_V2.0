import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { ConnexionComponent }   from './connexion/app.connexion.component';
import {DataService} from './services/app.service.data';

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule],
  declarations: [ AppComponent,ConnexionComponent],
  providers : [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component Imports

import LoginComponent from 'src/app/components/Login/login.component';
import { RegisterComponent } from './components/Register/register.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { CardComponent } from './components/card/card.component';


// primeng imports

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import {ImageModule} from 'primeng/image';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CardComponent,
    ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    ImageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

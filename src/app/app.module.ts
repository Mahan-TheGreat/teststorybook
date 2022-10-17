import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component Imports

import LoginComponent from 'src/app/components/login/login.component';
import { RegisterComponent } from './components/Register/register/register.component';


// primeng imports

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

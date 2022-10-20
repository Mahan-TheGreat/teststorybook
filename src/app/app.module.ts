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
import { ChartComponent } from './components/chart/chart.component';


// primeng imports

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CardComponent,
    ChartComponent,
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
    ImageModule,
    CardModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

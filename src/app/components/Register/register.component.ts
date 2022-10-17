import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {
  
  // @Input()
  registerForm = new FormGroup({
    FirstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    LastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    Password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ConfirmPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] })

  });

  @Input()
  ErrorMessageFirstName=false;

  @Input()
  ErrorMessageLastName=false;

  @Input()
  ErrorMessageEmail=false;

  @Input()
  ErrorMessagePssword=false;

  @Input()
  ErrorMessageConfirmPassword=false;

  @Input()
  ErrorTextFirstName = '';

  @Input()
  ErrorTextLastName = '';

  @Input()
  ErrorTextEmail = '';

  @Input()
  ErrorTextPassword = '';

  @Input()
  ErrorTextConfirmPassword = '';


  get FirstName(){ return this.registerForm.get('FirstName');}   
  get LastName(){ return this.registerForm.get('LastName');}   
  get Email(){ return this.registerForm.get('Email');}   
  get Username(){ return this.registerForm.get('Username');}   
  get Password(){ return this.registerForm.get('Password');} 
  get ConfirmPassword(){ return this.registerForm.get('ConfirmPassword');}   




  // handleClick(){
  //   console.log(this.loginForm.value);
  // }
}




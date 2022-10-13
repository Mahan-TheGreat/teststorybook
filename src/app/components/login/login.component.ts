import { Component, Input } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


export interface ILoginForm {
  Username: FormControl;
  Password: FormControl;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export default class LoginComponent {

  constructor(){
  }
  
   requiredValidator = Validators.required;
  
  // @Input()
  loginForm = new FormGroup<ILoginForm>({
    Username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    Password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  @Input()
  ErrorMessage=false;

  @Input()
  ErrorTextUsername = ''

  @Input()
  ErrorTextPassword = ''

  get Username(){ return this.loginForm.get('Username');}   
  get Password(){ return this.loginForm.get('Password');}   

  // loginFormStruct: LoginForm = {
  //   username: {
  //     isRequired: true,
  //     minLength: 3,
  //     fieldType: 'string',
  //     fieldName: 'username',
  //   },
  //   password: {
  //     isRequired: true,
  //     minLength: 6,
  //     maxLength: 20,
  //     fieldType: 'password',
  //     fieldName: 'password',
  //   }
  // }

  // handleClick(){
  //   console.log(this.loginForm.value);
  // }
}



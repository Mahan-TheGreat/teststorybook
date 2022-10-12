import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export default class LoginComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  UserName: string = '';

  @Input()
  Password: string = '';


  doSignup = (event: any) => {
    console.log("Signupp Clicked");
    console.log(event);
  }
}



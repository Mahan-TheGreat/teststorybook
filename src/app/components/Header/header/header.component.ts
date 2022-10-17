import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Input()
  user='';

  @Input()
  isLoggedIn=false;

  @Input()
  showUserName=true;

  @Input()
  notificationCount=1;


  handleClick(){
    this.isLoggedIn=!this.isLoggedIn;
  }

}

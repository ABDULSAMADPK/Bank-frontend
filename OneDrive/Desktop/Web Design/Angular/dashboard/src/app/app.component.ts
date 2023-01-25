import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  sideBar=true
  isSideBarToggle(){
    this.sideBar=!this.sideBar
  }
}

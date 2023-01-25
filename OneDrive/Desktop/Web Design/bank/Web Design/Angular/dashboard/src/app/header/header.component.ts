import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() isSideBarToggle= new EventEmitter()
sideBarToggle(){
  this.isSideBarToggle.emit()
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'))
  },300);
}
}

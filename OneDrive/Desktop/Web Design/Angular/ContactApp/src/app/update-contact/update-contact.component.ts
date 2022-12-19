import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  allGroups:any[]=[]
  constructor (private api:ApiService) { }

  ngOnInit(): void {
     this.api.getAllGroups()
    .subscribe((data:any)=>{
      this.allGroups = data
    })
  }
}

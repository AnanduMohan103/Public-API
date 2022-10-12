import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pubapi',
  templateUrl: './pubapi.component.html',
  styleUrls: ['./pubapi.component.css']
})
export class PubapiComponent implements OnInit {

  constructor(private myapi:ServiceService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.pubData=data
      }
    )
  }


pubData:any={}
  ngOnInit(): void {
  }

}

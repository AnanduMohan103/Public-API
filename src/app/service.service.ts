import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  viewData=()=>{
    return this.http.get("https://api.publicapis.org/entries")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DependencyService {
  

  constructor(private http: HttpClient) { }
  showTodayDate(){
    let ndate=new Date();
    return ndate;
  }
  
  
 } 

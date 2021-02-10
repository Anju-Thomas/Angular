import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class DependencyService {
  

  constructor() { }
  showTodayDate(){
    let ndate=new Date();
    return ndate;
  }
  
  
 } 

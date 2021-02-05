import { Component, OnInit } from '@angular/core';
import {DependencyService} from '../dependency.service';

@Component({
  selector: 'app-dependent',
  templateUrl: './dependent.component.html',
  styleUrls: ['./dependent.component.css']
})
export class DependentComponent implements OnInit {
 todaydate

  constructor( private Service:DependencyService) { 
    this.todaydate=this.Service.showTodayDate();
  }

  ngOnInit(): void {
  }
 
}

import { Component, OnInit } from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(private _modelService: ModelService){}
 
  public printItems(){
     console.log('items in warehouse:');
     console.log(this._modelService.getItems());
  }
  
  ngOnInit(): void {

  }
}
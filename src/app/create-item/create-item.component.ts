import { Component, OnInit } from '@angular/core';
import {ModelService} from '../model.service';
import {Item} from '../item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  private _item:Item = {name:'',description:'',price:0};
 
  constructor(private _modelService: ModelService){}
 
 public get Item():Item{
     return this._item;
 }
 
 public addItem(){
     const currentItem:Item = {
         name:this._item.name,
         description:this._item.description,
         price:this._item.price
        
     };
 
    this._modelService.addItem(currentItem);
 
    }


  ngOnInit(): void {
  
  }
}

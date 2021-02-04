import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentItem = 'Anju';
  items = ['Hi', 'Hello', 'Heyy'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

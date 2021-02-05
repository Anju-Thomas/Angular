import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  

  name='anju'
  today:number=Date.now()
  birthday = new Date(1988, 3, 15);



  constructor() { }

  ngOnInit(): void {
  }

}

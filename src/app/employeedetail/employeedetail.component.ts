import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  public employees:any=[];

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getEmployees()
    .subscribe(data=> this.employees = data);
  }

}


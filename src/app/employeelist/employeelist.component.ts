import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees:any=[];

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getEmployees()
    .subscribe(data=> this.employees = data);
  }

}

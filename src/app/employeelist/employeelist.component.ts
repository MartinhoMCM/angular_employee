import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {

  this._employeeService.getEmployes().
  subscribe(data=>this.employees=data);
  }

}

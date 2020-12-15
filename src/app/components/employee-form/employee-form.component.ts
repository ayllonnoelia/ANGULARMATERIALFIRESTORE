import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = {} as Employee;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(){
    if(this.employee.nombre !== '' && this.employee.pais !== '' && this.employee.telefono !== 0){
      this.employeeService.addEmployee(this.employee);
      this.employee = {} as Employee;
    }
  }
}


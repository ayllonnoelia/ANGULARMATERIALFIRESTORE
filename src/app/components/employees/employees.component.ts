import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees = [];
  editingEmployees: Employee;
  editing: boolean = false;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      console.log(employees);
      this.employees = employees;
    });    
  }

  deleteEmployee(event, employee){
    if (confirm('¿De verdad quieres eliminar este registro?')){
      this.employeeService.deleteEmployee(employee);
    }
  }

  editEmployee(event, employee){
    this.editingEmployees = employee;
    this.editing = !this.editing;
  }

  updateEmployees(){
    this.employeeService.updateEmployees(this.editingEmployees);
    this.editingEmployees = {} as Employee;
    this.editing = false;
  }
}



import { Component } from '@angular/core';

import { Employee } from "./models/employee";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  employeeArray : Employee[] = [
    {id: 1, nombre: "Noelia", pais: "España", telefono: 123456789},
    {id: 2, nombre: "Laura", pais: "España", telefono: 321654987},
    {id: 3, nombre: "Keana", pais: "España", telefono: 789456132}
  ];

  selectedEmployee:Employee = new Employee();

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    
    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm("¿De verdad quieres borrar ese registro?")){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }

  }*/

}

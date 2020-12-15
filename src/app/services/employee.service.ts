import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeCollection: AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;
  employeeDoc: AngularFirestoreDocument<Employee>;

  constructor(public db: AngularFirestore){
    //this.employees = this.db.collection('employees').valueChanges();
    this.employeeCollection = this.db.collection('employees');
    this.employees = this.employeeCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Employee;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getEmployees(){
    return this.employees;
  }

  addEmployee(employee: Employee){
    this.employeeCollection.add(employee);
  }

  deleteEmployee(employee: Employee){
    this.employeeDoc = this.db.doc(`employees/${employee.id}`);
    this.employeeDoc.delete();
  }

  updateEmployees(employee: Employee){
    this.employeeDoc = this.db.doc(`employees/${employee.id}`);
    this.employeeDoc.update(employee);
  }
}


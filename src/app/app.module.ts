import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

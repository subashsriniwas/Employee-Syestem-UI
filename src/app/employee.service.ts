import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeesList() {
    throw new Error('Method not implemented.');
  }

  constructor(private Employee : Employee) { }
}

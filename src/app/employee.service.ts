import { Employee } from './employee';
import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees"; 

  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]> { 
    return this.httpClient.get<Employee[]>(this.baseURL); 
  }
}

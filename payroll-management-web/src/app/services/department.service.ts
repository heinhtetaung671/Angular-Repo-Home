import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { DepartmentForm } from '../model/data/department-form';
import { ApiResponse } from '../model/data/api-response';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  save(form: DepartmentForm){
    return this.http.post<ApiResponse>(`${BASE_URL}/api/department`, form);
  }
}

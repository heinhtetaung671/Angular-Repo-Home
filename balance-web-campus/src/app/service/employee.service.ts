import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ApiResponse } from '../model/api-response';

const BASE_URL = `${environment.API_BASE_URL}/employee`;
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  create(form: any) {
    return this.http.post<ApiResponse<any>>(`${BASE_URL}`, form);
  }

  update(id: number, form: any) {
    return this.http.put<ApiResponse<any>>(`${BASE_URL}/${id}`, form);
  }

  search(form: any) {
    return this.http.get<ApiResponse<any>>(`${BASE_URL}`, { params: form });
  }

  findById(id: number) {
    return this.http.get<ApiResponse<any>>(`${BASE_URL}/${id}`);
  }

  findByIdForEdit(id: number) {
    return this.http.get<ApiResponse<any>>(`${BASE_URL}/${id}/edit`);
  }

  updateStatus(id: number, form: any) {
    return this.http.put<ApiResponse<any>>(`${BASE_URL}/status`, form);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  search(){
    return this.http.get<ApiResponse>('http://localhost:8080/angular-universty-api/api/category/search');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { ServerUtilsService } from './server-utils.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,private serverUtils: ServerUtilsService) { }

  search(){
    return this.http.get<ApiResponse>(`${this.serverUtils.basePath}/api/category/search`);
  }
}

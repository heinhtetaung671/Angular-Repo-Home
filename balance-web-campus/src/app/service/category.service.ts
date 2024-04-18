import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ApiResponse } from '../model/api-response';
import { BalanceType, CategorySelectBox } from '../model/balance-app';

const BASE_URL = `${environment.API_BASE_URL}/category`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {  
    console.log(new Date())
  }

  create(form: any){
    return this.http.post<ApiResponse<any>>(`${BASE_URL}`, form);
  }

  update(id: number, form: any){
    return this.http.put<ApiResponse<any>>(`${BASE_URL}/${id}`, form);
  }

  search(form: any){
    return this.http.get<ApiResponse<any>>(`${BASE_URL}`, {params: form});
  }

  findById(id: number){
    return this.http.get<ApiResponse<any>>(`${BASE_URL}/${id}`);
  }

  loadAllForSearchBox(type: BalanceType){
    return this.http.get<ApiResponse<CategorySelectBox[]>>(`${BASE_URL}/${type}/for-select-box`);
  }

}

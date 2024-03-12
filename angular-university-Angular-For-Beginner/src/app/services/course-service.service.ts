import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerUtilsService } from './server-utils.service';
import { CourseForm } from '../../model/course-form';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient, private serverUtils: ServerUtilsService) { }

  save(courseForm: CourseForm){
    return this.http.post<ApiResponse>(`${this.serverUtils.basePath}/api/course/save`, courseForm);
  }

}

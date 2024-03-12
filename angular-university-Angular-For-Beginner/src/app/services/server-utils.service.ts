import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerUtilsService {

  constructor() { }

  get basePath(): string{
    return 'http://localhost:8080/angular-universty-api'
  }
}

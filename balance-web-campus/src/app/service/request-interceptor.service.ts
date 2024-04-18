import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { ApiResponseUtils } from '../model/api-response-utils';
import { SecurityContextHolderService } from './security-context-holder.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  public token = signal<string>('');
  constructor(private securityContextHolder: SecurityContextHolderService) {
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJoZWluaHRldGF1bmciLCJpYXQiOjE3MTM0NjQ5ODAsImV4cCI6MTcxNDY2NDk4MCwic3ViIjoiaGhlaW44MzU4QGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjoiQWRtaW4ifQ._Dto8R6nr0JFI9iLwXT1vI6DBEe9Q__gyPOecenou4jjLfjIlBM_BHvAJauPTDpXu2fCDj6KyQvIdps51-pCTQ'}
    })

    return next.handle(req);
  }
}

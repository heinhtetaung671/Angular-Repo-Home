import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { RequestInterceptorService } from './service/request-interceptor.service';

const tokenInterceptor: Provider = { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(), provideHttpClient(withFetch(), withInterceptorsFromDi()) ,
    tokenInterceptor
   
  ]
};


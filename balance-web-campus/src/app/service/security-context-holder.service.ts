import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityContextHolderService {

  context = signal<SecurityContext>({token: ''})

  constructor() { }
}

export interface SecurityContext{
  token: string;
}
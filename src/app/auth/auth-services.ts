import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  isLogged = true
  isAdmin = true

  constructor() {}

  isAutenticato() {
    return this.isLogged
  }

  isRoleAdmin() {
    return this.isAdmin
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  isLogged = false
  isAdmin = false

  constructor() {}

  isAutenticato() {
    return this.isLogged
  }

  isRoleAdmin() {
    return this.isAdmin
  }
}

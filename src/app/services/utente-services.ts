import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtenteServices {
  private url = "http://localhost:9090/rest/utente/"

  constructor(private http:HttpClient) {}

  login(body:{}) {
    return this.http.post(this.url + "login", body)
  }

  register(body:{}) {
    return this.http.post(this.url + "create", body)
  }
}

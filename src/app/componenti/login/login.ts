import { UtenteServices } from './../../services/utente-services';
import { Component, signal, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServices } from '../../auth/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  msg = signal("")
  @ViewChild ('loginForm') loginForm:NgForm

  constructor(private UtenteServices:UtenteServices, private auth:AuthServices, private routing:Router) {}

  onSubmit() {
    console.log("user:" + this.loginForm.form.value.userName)
    this.UtenteServices.login({
      userName: this.loginForm.form.value.userName,
      pwd: this.loginForm.form.value.password
    }).subscribe({
      next:((r:any) => {
        this.msg.set("")
        console.log(r)
        this.auth.setAutentified()
        if (r.role == 'ADMIN')
          this.auth.setAdmin()
        else
          this.auth.setUser()
        this.routing.navigate(['home'])
      }),
      error:((r:any) => {
        this.msg.set(r.error.msg)
      })
    })

  }

  onRegister() {
    this.routing.navigate(['register'])
  }
}

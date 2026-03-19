import { UtenteServices } from './../../services/utente-services';
import { Component, signal, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  standalone: false,
  templateUrl: './registrazione.html',
  styleUrl: './registrazione.css',
})
export class Registrazione {
  msg = signal("")
  @ViewChild ('registForm') registForm:NgForm

  constructor(private UtenteServices:UtenteServices, private routing:Router) {}

  onSubmit() {
    if (this.registForm.form.value.password != this.registForm.form.value.passwordCntrl) {
      this.msg.set("password non coincidono...")
      return
    }
    this.UtenteServices.register({
      userName: this.registForm.form.value.userName,
      pwd: this.registForm.form.value.password,
      email: this.registForm.form.value.email,
      role: 'USER'
    }).subscribe({
      next: ((r:any) => {
        console.log(r)
        this.routing.navigate(['login'])
      }),
      error:((r:any) => {
        this.msg.set(r.error.msg)
      })
    })

  }
}

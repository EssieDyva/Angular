import { Component, signal, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  msg = signal("")
  @ViewChild ('loginform') loginform:NgForm

  onSubmit() {
    console.log("user:" + this.loginform.form.value.userName)
  }

  onRegister() {}
}

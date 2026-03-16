import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  homeForm: FormGroup

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      nome: new FormControl('mioNome', Validators.required),
      cognome: new FormControl('mioCognome', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    })
  }


  onSubmit() {
    console.log(this.homeForm)
    console.log("nome:" + this.homeForm.value.nome)
    console.log("cognome:" + this.homeForm.value.cognome)
  }
}

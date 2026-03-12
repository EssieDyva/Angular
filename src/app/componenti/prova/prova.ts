import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  standalone: false,
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
export class Prova {

  cani = [
    {
      nome:'roger',
      razza:'golden',
      descrizione:'bla bla bla e compagnia...'
    }
  ]

  daVedere:Boolean = true
  

  isDisable:Boolean = false

  hoCliccato(e:any) {
    console.log(e)
  }

  onInput(e:Event) {
    console.log((<HTMLInputElement>e.target).value)
    // console.log(e)
  }

  title:String="Titolo angular"
}

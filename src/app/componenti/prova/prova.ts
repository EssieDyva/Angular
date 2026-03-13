import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  standalone: false,
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
export class Prova implements OnInit, OnChanges{

  @Input() data:any;
  @Output() mandaDatiEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.data);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  cani = [
    {
      nome: 'roger',
      razza: 'golden',
      descrizione: 'bla bla bla e compagnia...',
    },
  ];

  persone = [
    {
      nome: 'Luca',
      cognome: 'Purino',
      isOnline: true,
      colore: 'green',
    },
    {
      nome: 'Paola',
      cognome: 'Strumel',
      isOnline: false,
      colore: 'red',
    },
    {
      nome: 'Anna',
      cognome: 'Berola',
      isOnline: false,
      colore: 'black',
    },
    {
      nome: 'Marcello',
      cognome: 'Zucchetti',
      isOnline: true,
      colore: 'blue',
    },
  ];

  numero = 3;

  coloreOn='green'
  coloreOff='red'

  daVedere: Boolean = true;
  msgToSend="msg da Prova"
  isDisable: Boolean = false;

  hoCliccato(e: any) {
    console.log(e);
  }

  onInput(e: Event) {
    console.log((<HTMLInputElement>e.target).value);
    // console.log(e)
  }

  mandaDati() {
    this.mandaDatiEvent.emit(this.msgToSend);
  }

  title: String = 'Titolo angular';
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaServices {
private persone = [
  {nome: 'Luca', cognome: 'Purino', isOnline: true, colore: 'green'},
  {nome: 'Giovanni', cognome: 'Rossi', isOnline: false, colore: 'red'},
  {nome: 'Maria', cognome: 'Bianchi', isOnline: true, colore: 'green'},
  {nome: 'Anna', cognome: 'Verdi', isOnline: false, colore: 'red'},
]

getPersone() {
  return this.persone
}

getPersona(index:number) {
  return this.persone[index]
}
}

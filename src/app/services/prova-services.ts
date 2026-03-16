import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaServices {
private persone = [
  {nome: 'Luca', cognome: 'Purino', email:'l.purino@mail.com', isOnline: true, colore: 'green'},
  {nome: 'Giovanni', cognome: 'Rossi', email:'g.rossi@mail.com', isOnline: false, colore: 'red'},
  {nome: 'Maria', cognome: 'Bianchi', email:'m.bianchi@mail.com', isOnline: true, colore: 'green'},
  {nome: 'Anna', cognome: 'Verdi', email:'a.verdi@mail.com', isOnline: false, colore: 'red'},
]

getPersone() {
  return this.persone
}

getPersona(index:number) {
  return this.persone[index]
}
}

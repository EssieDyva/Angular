import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prova-persona-service',
  standalone: false,
  templateUrl: './prova-persona-service.html',
  styleUrl: './prova-persona-service.css',
})
export class ProvaPersonaService implements OnInit{

  persone:any
  persona:any
  isProfile:boolean=false

  constructor(private service:ProvaServices, private route: ActivatedRoute){}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("id")) {
      this.isProfile=true
      this.persona = this.service.getPersona(parseInt(this.route.snapshot.paramMap.get("id")!))
      console.log(this.persona)
    }
  }

}

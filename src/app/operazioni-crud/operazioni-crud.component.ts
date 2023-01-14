import { Component } from '@angular/core';
import {persona} from "../Model/persona";
import {RestServiceService} from "../services/rest-service.service";

@Component({
  selector: 'app-operazioni-crud',
  templateUrl: './operazioni-crud.component.html',
  styleUrls: ['./operazioni-crud.component.css']
})
export class OperazioniCrudComponent {
  p:persona; //oggetto della classe persona
 //////////////////////////////////////////////////////////////
  //i dati che mi arrivano dalla modale tramite ngmodel
  nome: string;
  cognome: string;
  mail: string;
  sesso: string;
  mestiere!: string;
  avatar!:string;
///////////////////////////////////////////////////////////////

  //tramite la code Injection inietto il servizio nella classe op-crud
  constructor(private serviceRest:RestServiceService) {
  }
  onInsert() {
    this.p=new persona(this.nome,this.cognome,this.mail,this.sesso,this.avatar,this.mestiere);
    console.log(this.p);
    this.serviceRest.insertPersona(this.p).subscribe(()=>{});
  }
}

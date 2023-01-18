import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {persona} from "../Model/persona";
import {RestServiceService} from "../services/rest-service.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-Insert',
  templateUrl: './operazioni-crud.component.html',
  styleUrls: ['./operazioni-crud.component.css']
})
export class OperazioniCrudComponent implements AfterViewInit {
  @ViewChild('modal') modalRef; //equivale a $('#id') in jquery
  caricato:boolean=false;
  p: persona; //oggetto della classe persona
  //////////////////////////////////////////////////////////////
  //i dati che mi arrivano dalla modale tramite ngmodel
  nome: string;
  cognome: string;
  mail: string;
  sesso: string;
  mestiere!: string;
  avatar!: string;
///////////////////////////////////////////////////////////////

  //tramite la code Injection inietto il servizio nella classe op-crud
  constructor(private serviceRest: RestServiceService, private modalService: NgbModal) {
  }

  onInsert() {
    this.p = new persona(this.nome, this.cognome, this.mail, this.sesso, this.avatar, this.mestiere);
    console.log(this.p);
    this.caricato=false;
    this.serviceRest.insertPersona(this.p).subscribe(() => {
    });
  }
  onExit(m)
  {
    this.caricato=false;
    m.dismiss('Cross click')
    //this.modalService.dismissAll('Cross click');
  }

  ngAfterViewInit(): void {
    console.log("sono in ng");
      this.modalService.open(this.modalRef);
      this.caricato=true;
      this.serviceRest.areaCondivisa.sel=this.caricato;
  }


}

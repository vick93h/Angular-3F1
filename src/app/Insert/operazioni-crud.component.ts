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
  @ViewChild('modale') modalRef; //equivale a $('#id') in jquery
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
  private id: number;
  currentInput: any;
  constructor(private serviceRest: RestServiceService, private modalService: NgbModal) {

  }

  onInsert(m) {
    let id=this.serviceRest.areaCondivisa.arrayPersona.length;
    this.p = new persona(id+1,this.nome, this.cognome, this.mail, this.sesso, this.avatar, this.mestiere);
    console.log(this.p);
    this.caricato=false;
    this.serviceRest.insertPersona(this.p).subscribe(() => {
    });
    m.dismiss('Cross click')
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


  onFileSelected($event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.avatar=target.files[0].name;
      this.avatar='./assets/image/'+this.avatar;
      console.log(this.avatar);
      console.log(target.files[0].name);
    }
  }
}

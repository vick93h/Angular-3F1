import {Component, EventEmitter, Output} from '@angular/core';
import {RestServiceService} from './services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inserisci:boolean=false;
  public leggi:boolean=false;
  public aggiorna:boolean=false;
  public cancella:boolean=false;
  public display:string;
  receivedData:any;
  title = 'Operazioni CRUD';
  constructor(private rest:RestServiceService,private modalService: NgbModal){
  }
  /*displayHandler(event:any)
  {
    console.log('sono nel display handler')
    this.receivedData=event;
    console.log(this.receivedData);
  }*/
  displayHandler(event:any)
  {
    console.log('sono nel display handler')
    this.modalService.open( this.rest.areaCondivisa.reference);
  }

  Inserted() {
    this.inserisci=true;

  }

  Read() {
    this.leggi=true;
  }

  Update() {
    this.aggiorna=true;
  }

  Delete() {
    this.cancella=true;
  }
}

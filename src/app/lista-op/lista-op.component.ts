import {Component, ViewChild} from '@angular/core';
import {OperazioniCrudComponent} from '../Insert/operazioni-crud.component';
import {RestServiceService} from '../services/rest-service.service';
@Component({
  selector: 'app-lista-op',
  templateUrl: './lista-op.component.html',
  styleUrls: ['./lista-op.component.css']
})
export class ListaOpComponent {
  @ViewChild(OperazioniCrudComponent)insert!:OperazioniCrudComponent
  public inserisci:boolean=false;
  public leggi:boolean=false;
  public aggiorna:boolean=false;
  public cancella:boolean=false;
  constructor(private service: RestServiceService) {
  }
    Inserted() {
    this.inserisci=true;
    if(this.service.areaCondivisa.sel==true)
    {
      this.insert.ngAfterViewInit();
    }

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

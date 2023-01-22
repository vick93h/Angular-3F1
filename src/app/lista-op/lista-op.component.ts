import {Component, ViewChild} from '@angular/core';
import {OperazioniCrudComponent} from '../Insert/operazioni-crud.component';
import {RestServiceService} from '../services/rest-service.service';
import {DeleteComponent} from '../delete/delete.component';
import { ReadComponent } from '../read/read.component';
import { TabellaComponent } from '../tabella/tabella.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lista-op',
  templateUrl: './lista-op.component.html',
  styleUrls: ['./lista-op.component.css']
})
export class ListaOpComponent {
  @ViewChild(OperazioniCrudComponent)insert!:OperazioniCrudComponent
  @ViewChild(DeleteComponent)delete!:DeleteComponent
  @ViewChild(ReadComponent)read!:ReadComponent
  @ViewChild(TabellaComponent)tabella!:TabellaComponent;
  public inserisci:boolean=false;
  public leggi:boolean=false;
  public aggiorna:boolean=false;
  public cancella:boolean=false;
  //code injection per il service e per il routing
  constructor(private service: RestServiceService,private route:Router) {
  }
    Inserted() {
    this.inserisci=true;
    this.route.navigate(['Insert']);
    if(this.service.areaCondivisa.sel==true)
    {
         this.insert.ngAfterViewInit();
    }

  }

     Read() {
    this.leggi=true;
    this.route.navigate(['Read']);
    if(this.service.areaCondivisa.selectRead==true){
      console.log("sono nella read");
         this.read.ngAfterViewInit();
  }
 }

  Update() {
    this.aggiorna=true;
  }

    Delete() {
    this.cancella=true;
    this.route.navigate(['Delete']);
    if(this.service.areaCondivisa.sel==true)
    {
         this.delete.ngAfterViewInit();
    }
  }
}

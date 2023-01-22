import {Component, Input, ViewChild} from '@angular/core';
import {OperazioniCrudComponent} from '../Insert/operazioni-crud.component';
import {RestServiceService} from '../services/rest-service.service';
import {DeleteComponent} from '../delete/delete.component';
import { ReadComponent } from '../read/read.component';
import { TabellaComponent } from '../tabella/tabella.component';
import {Router} from '@angular/router';
import {UpdateComponent} from '../update/update.component';
@Component({
  selector: 'app-lista-op',
  templateUrl: './lista-op.component.html',
  styleUrls: ['./lista-op.component.css']
})
export class ListaOpComponent {
  @ViewChild(OperazioniCrudComponent)insert!:OperazioniCrudComponent
  @ViewChild(DeleteComponent)delete!:DeleteComponent
  @ViewChild(ReadComponent)read!:ReadComponent
  @ViewChild(UpdateComponent)update!:UpdateComponent
  @Input() search: boolean=false;

  //code injection per il service e per il routing
  constructor(private service: RestServiceService,private route:Router) {
  }
    async Inserted() {
    await this.route.navigate(['Insert']);
    if(this.service.areaCondivisa.sel==true)
    {
         await this.insert.ngAfterViewInit();
    }

  }

     async Read() {
    await this.route.navigate(['Read']);
    if(this.service.areaCondivisa.selectRead==true){
        await this.read.ngAfterViewInit();
  }
 }

  async Update() {
    await this.route.navigate(['Update']);
    if(this.service.areaCondivisa.sel==true)
    {
       await this.update.ngAfterViewInit();
    }
  }

    async Delete() {
    await this.route.navigate(['Delete']);
    if(this.service.areaCondivisa.sel==true)
    {
        await this.delete.ngAfterViewInit();
    }
  }
}

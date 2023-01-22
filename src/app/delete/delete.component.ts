import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RestServiceService} from '../services/rest-service.service';
import { TabellaComponent } from '../tabella/tabella.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements AfterViewInit{
  constructor(private serviceRest: RestServiceService,private modalService: NgbModal,private route:Router) {
  }
  @ViewChild('modale') modalRef:ElementRef<HTMLModElement>; //equivale a $('#id') in jquery
  id: any;
  caricato:boolean=false;

  async onExit(m: any) {
    this.caricato=false;
    m.dismiss('Cross click')
    await this.route.navigate(['Home']);
  }

  async onDelete(m: any) {
    this.caricato=false;
    this.serviceRest.deletePersona(this.id).subscribe(()=>{});
    m.dismiss('Cross click');
    await this.route.navigate(['Home']);
  }

    async ngAfterViewInit(): Promise<void> {
    await new Promise(f => setTimeout(f, 1000));
    this.modalService.open(this.modalRef);
    this.caricato=true;
    this.serviceRest.areaCondivisa.sel=this.caricato;
  }
}

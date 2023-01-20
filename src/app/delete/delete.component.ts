import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RestServiceService} from '../services/rest-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements AfterViewInit{
  constructor(private serviceRest: RestServiceService,private modalService: NgbModal) {
  }
  @ViewChild('modale') modalRef; //equivale a $('#id') in jquery
  id: any;
  caricato:boolean=false;

  onExit(m: any) {
    this.caricato=false;
    m.dismiss('Cross click')
  }

  onInsert(m: any) {
    this.caricato=false;
    m.dismiss('Cross click')
  }

  ngAfterViewInit(): void {
    this.modalService.open(this.modalRef);
    this.caricato=true;
    this.serviceRest.areaCondivisa.sel=this.caricato;
  }
}

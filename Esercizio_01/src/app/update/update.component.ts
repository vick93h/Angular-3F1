import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {persona} from "../Model/persona";
import { ModaleComponent } from '../modale/modale.component';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit,AfterViewInit  {
  @ViewChild('modale')modalRef:ElementRef<HTMLModElement>;
  @ViewChild(ModaleComponent)mod:ModaleComponent;
  id: any;
  nome: string;
  cognome: string;
  mail: string;
  sesso: string;
  mestiere!: string;
  avatar!: string;
  p:persona;

  constructor(private serviceRest: RestServiceService,private modalService: NgbModal,private route:Router) {

  }
  async ngAfterViewInit(): Promise<void> {


  }
  async ngOnInit(): Promise<void> {
    await new Promise(f => setTimeout(f, 1000));
    this.modalService.open(this.modalRef);//apre la modale dal .ts
    this.serviceRest.areaCondivisa.sel=true;
  }


  async onExit(modal: any) {
   modal.dismiss('Cross click');
   this.modalService.dismissAll();
   await this.route.navigate(['Home']);
  }

  async onInsert(modal: any) {
    this.serviceRest.areaCondivisa.id=this.id;
    modal.dismiss('Cross click');
    this.modalService.dismissAll();
    await new Promise(f => setTimeout(f, 500));
    await this.route.navigate(['UpdatePhase']);
  }
}

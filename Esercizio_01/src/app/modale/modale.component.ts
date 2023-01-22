import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit, AfterViewInit{
  @ViewChild('modale')modaleRef!:ElementRef<HTMLModElement>
  nome: string;
  cognome: string;
  mail: string;
  sesso: string;
  mestiere!: string;
  avatar!: string;
  currentInput!:string;
  constructor(private serviceRest: RestServiceService, private modalService: NgbModal,private route:Router,private elRef:ElementRef) {}

  ngOnInit(): void {

    }
  async onExit(modal: any) {
    modal.dismiss('Cross click')
    this.modalService.dismissAll();
   await  this.route.navigate(['Update']);
  }
  onFileSelected(event){

  }
  async onInsert(modal: any) {

    await  this.route.navigate(['Home']);
  }
  async ngAfterViewInit(): Promise<void> {

  }

}

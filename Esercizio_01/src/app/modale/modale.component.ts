import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { persona } from '../Model/persona';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit, AfterViewInit{
  @ViewChild('modale')modaleRef!:ElementRef<HTMLModElement>
  id:number;
  nome!: string;
  cognome!: string;
  mail!: string;
  sesso!: string;
  mestiere!: string;
  avatar!: string;
  currentInput!:string;
  p:persona;

  constructor(private serviceRest: RestServiceService, private modalService: NgbModal,private route:Router,private elRef:ElementRef) {
    this.id=this.serviceRest.areaCondivisa.id;
  }

      ngOnInit(){
        const $modalElement: HTMLElement = document.querySelector('#modalEl');
        const modalOptions: ModalOptions = {
          placement: 'bottom-right',
          backdrop: 'dynamic',
          backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
          onHide: () => {
              console.log('modal is hidden');
          },
          onShow: () => {
              console.log('modal is shown');
          },
          onToggle: () => {
              console.log('modal has been toggled');
          }
      }

      const modal: ModalInterface = new Modal($modalElement, modalOptions);

      modal.show();
     this.serviceRest.getDatiById(this.id).subscribe((data:any) => {this.p=data;
     console.log(this.p);});
    }
  async onExit() {

   await  this.route.navigate(['Update']);
  }
  onFileSelected($event:Event){
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.avatar=target.files[0].name;
      this.avatar='./assets/image/'+this.avatar;//ricavo il nome dell' immagine e concateno la cartella asset per definire il path completo

    }
  }
  async onInsert() {

    await  this.route.navigate(['Home']);
  }
  async ngAfterViewInit(): Promise<void> {
  await new Promise(f => setTimeout(f, 1000));
    this.nome=this.p.Nome;
    this.cognome=this.p.Cognome;
    this.mail=this.p.Email;
    this.sesso=this.p.Sesso;
    this.avatar=this.p.Avatar;
    this.mestiere=this.p.Mestiere;
  }

}

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
  temp:persona;
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
   await new Promise(f => setTimeout(f, 200));
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
    const $inputElementName: HTMLInputElement = document.querySelector('#first_name');
    this.nome=$inputElementName.value;
    const $inputElementSurname: HTMLInputElement = document.querySelector('#sur_name');
    this.cognome=$inputElementSurname.value;
    const $inputElementMail: HTMLInputElement = document.querySelector('#email');
    this.mail=$inputElementMail.value;
    const $inputElementGender: HTMLInputElement = document.querySelector('#gender');
    this.sesso=$inputElementGender.value;
    const $inputElementAvatar: HTMLInputElement = document.querySelector('#file_input');
    this.avatar=$inputElementAvatar.value;
    const $inputElementMestiere: HTMLInputElement = document.querySelector('#mestiere');
    this.mestiere=$inputElementMestiere.value;
    this.temp = new persona(+this.id, this.nome, this.cognome, this.mail, this.sesso, this.avatar,this.mestiere);
    console.log(this.temp);
    await this.serviceRest.updatePersona(this.id, this.temp).subscribe(()=>{});
    await new Promise(f => setTimeout(f, 200));
    await  this.route.navigate(['']);
  }
  async ngAfterViewInit(): Promise<void> {
  await new Promise(f => setTimeout(f, 200));
    this.nome=this.p.Nome;
    this.cognome=this.p.Cognome;
    this.mail=this.p.Email;
    this.sesso=this.p.Sesso;
    this.avatar=this.p.Avatar;
    this.mestiere=this.p.Mestiere;
  }

}

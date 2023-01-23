import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { persona } from '../Model/persona';


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
  p:persona[];
  constructor(private serviceRest: RestServiceService, private modalService: NgbModal,private route:Router,private elRef:ElementRef) {
    this.id=this.serviceRest.areaCondivisa.id;
  }

  async ngOnInit():Promise<void> {
    await this.serviceRest.getDatiById(this.id).subscribe((data:any) => {this.p=data;
    console.log(this.p);});
    }
  async onExit(modal: any) {
    modal.dismiss('Cross click')
    this.modalService.dismissAll();
   await  this.route.navigate(['Update']);
  }
  onFileSelected($event:Event){
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.avatar=target.files[0].name;
      this.avatar='./assets/image/'+this.avatar;//ricavo il nome dell' immagine e concateno la cartella asset per definire il path completo

    }
  }
  async onInsert(modal: any) {

    await  this.route.navigate(['Home']);
  }
  async ngAfterViewInit(): Promise<void> {
  await new Promise(f => setTimeout(f, 1000));

  }

}

import { MessageService } from './services/message.service';
import { Component } from '@angular/core';
import {RestServiceService} from './services/rest-service.service';
import { NgxLoadersCssModule } from 'ngx-loaders-css';
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inserisci:boolean=false;
  public leggi:boolean=false;
  public aggiorna:boolean=false;
  public cancella:boolean=false;
  public display:string;
  receivedData:any;
  title = 'popolaTabella';
  constructor(private rest:RestServiceService){
  }
  displayHandler(event:any)
  {
    console.log('sono nel display handler')
    this.receivedData=event;
    console.log(this.receivedData);
  }

  Inserted() {
    this.inserisci=true;
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

import { MessageService } from './services/message.service';
import { Component } from '@angular/core';
import {RestServiceService} from './services/rest-service.service';

@Component({
  selector: 'app-root',
  template:`<app-select-box (valuePremuto)="displayHandler($event)"></app-select-box> <app-card [valueDisplay]=receivedData></app-card>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}

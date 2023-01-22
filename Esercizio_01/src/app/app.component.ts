import {Component, EventEmitter, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {RestServiceService} from './services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TabellaComponent } from './tabella/tabella.component';
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{

  public display:string;
  receivedData:any;
  title = 'Operazioni CRUD';

  constructor(private rest:RestServiceService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges");

  }



}

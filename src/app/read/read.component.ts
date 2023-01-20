import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TabellaComponent } from '../tabella/tabella.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit,AfterViewInit {

  constructor(private serviceRest: RestServiceService) {

  }
  @ViewChild(TabellaComponent)tabellaRef:TabellaComponent;
  ngOnInit(): void {
    this.serviceRest.areaCondivisa.selectRead=true;
  }

  ngAfterViewInit(): void {
    console.log("read in after view init")
    this.read();
  }
  read(){
    console.log("read....");
    this.serviceRest.getDati().subscribe((e:any)=>{
    this.serviceRest.areaCondivisa.arrayPersona=e;
    });
  }
}

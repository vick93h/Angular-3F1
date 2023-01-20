import {AfterViewInit, Component} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements AfterViewInit {
  constructor(private serviceRest: RestServiceService) {

  }

  ngAfterViewInit(): void {
    this.serviceRest.areaCondivisa.selectRead=false;
    console.log("read in after view init")
    this.read();
  }
  read(){
    console.log("read....");
    this.serviceRest.getDati().subscribe(()=>{});
  }
}

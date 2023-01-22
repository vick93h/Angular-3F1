import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestServiceService} from '../services/rest-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit,AfterViewInit {

  constructor(private serviceRest: RestServiceService,private route:Router) {

  }
  ngOnInit(): void {
    this.serviceRest.areaCondivisa.selectRead=true;
  }

  async ngAfterViewInit(): Promise<void> {
    this.serviceRest.getDati().subscribe((e:any)=>{
    });
    await new Promise(f => setTimeout(f, 3000));
    await this.route.navigate(['Home']);

  }

}

import { areaDati } from './../Model/areaDati';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { post } from '../Model/post';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  @Output() valuePremuto:EventEmitter<any>=new EventEmitter<any>();
post!:post[];
constructor(private restService:RestServiceService){}
  ngOnInit(): void {
    this.restService.getDati().subscribe((data:any)=>{this.post = data;});

  }
  onPremuto():void
  {
    var comboboxValue = (<HTMLInputElement>document.getElementById('selezione')).value;
    console.log(comboboxValue);
    this.valuePremuto.emit(comboboxValue);
  }


  updateSelect() {
    this.restService.getDati().subscribe((data:any)=>{this.post = data;});
  }
}

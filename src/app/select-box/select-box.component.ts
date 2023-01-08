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
constructor(private restService:RestServiceService){//this.pronto=new EventEmitter<boolean>();
   }
  ngOnInit(): void {
    this.restService.getDati().subscribe((data:any)=>{this.post = data;});

  }
  /*selectSelezione()
  {
    var comboboxValue = (<HTMLInputElement>document.getElementById('Selezione')).value;
    console.log(comboboxValue);
    this.restService.areaCondivisa.selectValue=comboboxValue;
    console.log(this.restService.areaCondivisa.selectValue);
    this.restService.areaCondivisa.sel=true;
    console.log(this.restService.areaCondivisa.sel);

  }*/
  /*onPronto(event){
    var comboboxValue = (<HTMLInputElement>document.getElementById('Selezione')).value;
    //console.log(comboboxValue);
    this.restService.areaCondivisa.selectValue=comboboxValue;
    //console.log(this.restService.areaCondivisa.selectValue);
    this.restService.areaCondivisa.sel=true;
    //console.log(this.restService.areaCondivisa.sel);
  this.pronto.emit(this.restService.areaCondivisa.sel);
  }*/
  onPremuto():void
  {
    console.log('premuto 2')
    var comboboxValue = (<HTMLInputElement>document.getElementById('selezione')).value;
    console.log(comboboxValue);
    this.valuePremuto.emit(comboboxValue);
  }



}

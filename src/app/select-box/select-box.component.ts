import { areaDati } from './../Model/areaDati';
import { Component, OnInit } from '@angular/core';
import { post } from '../Model/post';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
post!:post[];
constructor(private restService:RestServiceService){}
  ngOnInit(): void {
    this.restService.getDati().subscribe((data:any)=>{this.post = data;});

  }
  selectSelezione()
  {
    var comboboxValue = (<HTMLInputElement>document.getElementById('Selezione')).value;
    console.log(comboboxValue);
    this.restService.areaCondivisa.selectValue=comboboxValue;
    console.log(this.restService.areaCondivisa.selectValue);
    this.restService.areaCondivisa.sel=true;
    console.log(this.restService.areaCondivisa.sel);
  
  }


}

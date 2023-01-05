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
selectedTeam:any;
dato:string;
display = false;
constructor(private restService:RestServiceService){}
  ngOnInit(): void {
    this.restService.getDati().subscribe((data:any)=>{this.post = data;});
  }
  /* selectSelezione()
  {
    this.display = true;
    document.querySelector('#comp-render').innerHTML='<object type="text/html" data="card.component.html" ></object>';
    var comboboxValue = (<HTMLInputElement>document.getElementById('Selezione')).value;
    console.log(comboboxValue);
    this.restService.areaCondivisa.selectValue=comboboxValue;
    this.dato=this.restService.areaCondivisa.selectValue;
    console.log(this.restService.areaCondivisa.selectValue);
    this.restService.areaCondivisa.sel=true;
    console.log(this.restService.areaCondivisa.sel);
    this.display = !this.display;
  }*/
  onSelected(value:string): void {
		this.selectedTeam = value;
    this.restService.areaCondivisa.selectValue=this.selectedTeam
    console.log(this.restService.areaCondivisa.selectValue);
	}



}

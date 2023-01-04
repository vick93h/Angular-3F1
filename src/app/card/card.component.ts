import { RestServiceService } from './../services/rest-service.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit ,OnChanges {
 @Input() premuto:boolean;
  value!:any;
  constructor(private restService:RestServiceService){}
  ngOnChanges(changes:SimpleChanges) {
    if(changes.hasOwnProperty('select-box')){
    this.do_work(this.premuto);
    this.premuto = !this.premuto;
    }
  }
  ngOnInit(): void {
    this.premuto =this.restService.areaCondivisa.sel;
  }
do_work(input:boolean)
{
  if(input==true){
    console.log(this.restService.areaCondivisa.selectValue);
     this.value=this.restService.areaCondivisa.selectValue;
    }
}

}


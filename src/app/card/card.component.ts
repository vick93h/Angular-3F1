import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  value: any;
@Input() set valueDisplay(value:any){
if(value!=undefined)
{
  this.value=value
}
else
{
  console.log('undefined!')
}
}
  /*bufferToggle() {
    this.value = this.restService.areaCondivisa.selectValue;
    console.log(this.value);
  }*/
  /*refresh() {
    this.bufferToggle();
  }*/

}

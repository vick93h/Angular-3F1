import { RestServiceService } from "./../services/rest-service.service";
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
export class CardComponent implements OnInit {
  @Input() value: string;
  constructor(private restService: RestServiceService) {}
  ngOnInit(): void {
    this.bufferToggle();
  }

  bufferToggle() {
    this.value = this.restService.areaCondivisa.selectValue;
    console.log(this.value);
  }
  refresh() {
    this.bufferToggle();
  }
}

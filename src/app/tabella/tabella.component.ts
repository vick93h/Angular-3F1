
import {AfterViewInit, Component, OnInit} from '@angular/core';
import { RestServiceService } from "../services/rest-service.service";
import {persona} from '../Model/persona';

@Component({
  selector: "app-tabella",
  templateUrl: "./tabella.component.html",
  styleUrls: ["./tabella.component.css"],
})
export class TabellaComponent implements OnInit {

  person!: persona[];
  page: number;
  constructor(private rest: RestServiceService) {}

  ngOnInit() {
    console.log("sono qui");
    this.get();
  }
      get() {
        this.rest.getDati().subscribe((e: any) => {
        console.log(e);
        this.person = e;
        this.rest.areaCondivisa.arrayPersona=this.person;
    });
  }


}


import {AfterViewInit, Component, OnInit} from '@angular/core';
import { post } from "../Model/post";
import { RestServiceService } from "../services/rest-service.service";
import {persona} from '../Model/persona';

@Component({
  selector: "app-tabella",
  templateUrl: "./tabella.component.html",
  styleUrls: ["./tabella.component.css"],
})
export class TabellaComponent implements OnInit,AfterViewInit {
  title_ng!:string;
  author_ng!:string;
  person!: persona[];
  page: number;
  constructor(private rest: RestServiceService) {}

  ngOnInit() {
    this.getPost();
  }
  ngAfterViewInit(){
  }
     getPost() {
      this.rest.getDati().subscribe((e: any) => {
        console.log(e);
      this.person = e;
        this.rest.areaCondivisa.arrayPersona=e;
    });
  }
  async post()
  {
   /* let p:post=new post(this.posts.length+1,this.title_ng,this.author_ng);
    this.person.push(p);
    await this.proposalTablaJsonDb(p);//scrive nel JsonDB tramite http
   // await this.getPost();//leggo dal JsonDb*/
  }
  async proposalTablaJsonDb(p:post)
  {
    await this.rest.postDati(p).subscribe(()=>{});
  }

}

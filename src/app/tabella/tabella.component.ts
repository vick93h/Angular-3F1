
import { Component, OnInit } from "@angular/core";
import { post } from "../Model/post";
import { RestServiceService } from "../services/rest-service.service";

@Component({
  selector: "app-tabella",
  templateUrl: "./tabella.component.html",
  styleUrls: ["./tabella.component.css"],
})
export class TabellaComponent implements OnInit {
  title_ng!:string;
  author_ng!:string;
  posts!: post[];
  constructor(private rest: RestServiceService) {}

  ngOnInit() {
    this.getPost();
  }
     getPost() {
      this.rest.getDati().subscribe((e: any) => {
      this.posts = e;
    });
  }
  async post()
  {
    let p:post=new post(this.posts.length+1,this.title_ng,this.author_ng);
    this.posts.push(p);
    await this.proposalTablaJsonDb(p);//scrive nel JsonDB tramite http
   // await this.getPost();//leggo dal JsonDb
  }
  async proposalTablaJsonDb(p:post)
  {
    await this.rest.postDati(p).subscribe(()=>{});
  }

}

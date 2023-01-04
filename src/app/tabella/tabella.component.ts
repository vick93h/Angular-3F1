
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
      console.log(e);
      this.posts = e;
      var table = document.createElement("table");
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var nome = document.createTextNode('Title');
      var cognome = document.createTextNode('Author');
      td1.appendChild(nome);
      td2.appendChild(cognome);
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
      for (var i = 0; i < this.posts.length; i++) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        var text1 = document.createTextNode(this.posts[i].title);
        var text2 = document.createTextNode(this.posts[i].author);

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
        table.setAttribute("border", "2");
        table.setAttribute("style", "background-color:aqua;");
        table.setAttribute("width", "200px");
        table.setAttribute("height", "200px");
        table.setAttribute("align", "center");
      }
      document.body.appendChild(table);
    });
  }
  async post()
  {
    var title=(<HTMLInputElement>document.getElementById("title")).value
    var author=(<HTMLInputElement>document.getElementById("author")).value
    var p:post=new post(title,author);
    await this.rest.postDati(p).subscribe(()=>{});
  }
}

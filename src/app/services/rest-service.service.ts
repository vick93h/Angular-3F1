import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { post } from "../Model/post";
@Injectable({
  providedIn: "root",
})
export class RestServiceService {
  private posts:post[]; //array di post
  url: string = " http://localhost:3000/posts";
  intestazione = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) {}

  getDati(){

   return this.http.get(this.url);
  }
  postDati(postItem:post){

    return this.http.post(this.url,postItem);
   }

}

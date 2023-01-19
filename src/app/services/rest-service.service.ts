import { areaDati } from './../Model/areaDati';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { post } from "../Model/post";
import {persona} from "../Model/persona";
@Injectable({
  providedIn: "root",
})
export class RestServiceService {
  private people!:persona[];//array di persone
  public areaCondivisa:areaDati=new areaDati();
  url: string = " http://localhost:3000/persona";
  intestazione = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) {}

  getDati(){

   return this.http.get(this.url);
  }
  postDati(postItem:post){

    return this.http.post(this.url,postItem);
   }
  insertPersona(person:persona)
  {
    return this.http.post(this.url,person); //chiamata Http di tipo post verso il backEnd
  }


}

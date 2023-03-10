import { areaDati } from './../Model/areaDati';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {persona} from "../Model/persona";
@Injectable({
  providedIn: "root",
})
export class RestServiceService {
  private people!:persona[];//array di persone
  public areaCondivisa:areaDati=new areaDati();
  url: string = "http://localhost:8080/api/person";


  intestazione = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) {}

  getDati(){

   return this.http.get(this.url);
  }
  getDatiById(id:number){
    return this.http.get(`http://localhost:8080/api/person/${id}`,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
  insertPersona(person:persona)
  {
    return this.http.post(this.url,person); //chiamata Http di tipo post verso il backEnd
  }
   deletePersona(id:number) {
    const url = `http://localhost:8080/api/person/${id}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });

  }
  updatePersona(id:number,person:persona){
    const url = `http://localhost:8080/api/person/${id}`;
    return this.http.put(url,person,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
  }

}

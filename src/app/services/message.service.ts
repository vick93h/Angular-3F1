import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
helloMessage:string;
goodByeMessage:string;
  constructor() { }
  getHelloMessage():string {
    return this.helloMessage;
  }
  setHelloMessage(message:string){
    this.helloMessage=message;
  }
  getGoodByeMessage():string {
    return this.goodByeMessage;
  }
  setGoodByeMessage(goodbye:string)
  {
    this.goodByeMessage=goodbye;
  }
}

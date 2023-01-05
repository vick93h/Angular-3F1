import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  helloMessage:string='Messaggio da Hello!';
  constructor(private restMessage:MessageService){}

  ngOnInit()
  {
    this.restMessage.setHelloMessage(this.helloMessage);//stiamo sul componente hello

  }

}

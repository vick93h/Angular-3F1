import { MessageService } from './../services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent {
message:string;
constructor(private restGoodbye:MessageService){}
leggiMessaggio()
{
  this.message=this.restGoodbye.getHelloMessage();
}
}

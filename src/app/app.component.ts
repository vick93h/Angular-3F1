import { MessageService } from './services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popolaTabella';
  constructor(private restMessage:MessageService){}
}

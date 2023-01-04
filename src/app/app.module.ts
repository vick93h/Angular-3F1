import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { CardComponent } from './card/card.component';
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    HelloComponent,
    GoodbyeComponent,
    CardComponent,
    SelectBoxComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

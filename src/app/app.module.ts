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
import { OperazioniCrudComponent } from './Insert/operazioni-crud.component';
import {NgxLoadersCssModule} from 'ngx-loaders-css';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    HelloComponent,
    GoodbyeComponent,
    CardComponent,
    SelectBoxComponent,
    OperazioniCrudComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [BrowserModule, NgxLoadersCssModule],NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

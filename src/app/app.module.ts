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
import { ListaOpComponent } from './lista-op/lista-op.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    HelloComponent,
    GoodbyeComponent,
    CardComponent,
    SelectBoxComponent,
    OperazioniCrudComponent,
    ListaOpComponent,
    CustomPaginationComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [BrowserModule, NgxLoadersCssModule],NgbModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

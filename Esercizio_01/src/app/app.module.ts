import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { FormsModule } from '@angular/forms';
import { OperazioniCrudComponent } from './Insert/operazioni-crud.component';
import {NgxLoadersCssModule} from 'ngx-loaders-css';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaOpComponent } from './lista-op/lista-op.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { AppRoutesModule } from './app-routes.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdateComponent } from './update/update.component';
import { ModaleComponent } from './modale/modale.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    OperazioniCrudComponent,
    ListaOpComponent,
    CustomPaginationComponent,
    DeleteComponent,
    ReadComponent,
    ErrorPageComponent,
    UpdateComponent,
    ModaleComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [BrowserModule, NgxLoadersCssModule],NgbModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaOpComponent} from './lista-op/lista-op.component';
import {OperazioniCrudComponent} from './Insert/operazioni-crud.component';
import {ReadComponent} from './read/read.component';
import {DeleteComponent} from './delete/delete.component';
import {RouterModule} from '@angular/router';

class Routes {
}
//definisco le rotte
const appRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ListaOpComponent },
  { path: 'Insert', component: OperazioniCrudComponent },
  { path: 'Read', component: ReadComponent },
  { path: 'Delete', component: DeleteComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }

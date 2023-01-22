import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaOpComponent} from './lista-op/lista-op.component';
import {OperazioniCrudComponent} from './Insert/operazioni-crud.component';
import {ReadComponent} from './read/read.component';
import {DeleteComponent} from './delete/delete.component';
import {RouterModule} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import { UpdateComponent } from './update/update.component';
import { ModaleComponent } from './modale/modale.component';

class Routes {
}
//definisco le rotte
const appRoutes: Routes[] = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ListaOpComponent },
  { path: 'Insert', component: OperazioniCrudComponent },
  { path: 'Read', component: ReadComponent },
  { path: 'Delete', component: DeleteComponent },
  { path: 'Update', component: UpdateComponent },
  {path:'UpdatePhase',component: ModaleComponent},
  {path:'**',component:ErrorPageComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }

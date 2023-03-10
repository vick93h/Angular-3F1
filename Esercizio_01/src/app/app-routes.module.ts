import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaOpComponent} from './lista-op/lista-op.component';
import {OperazioniCrudComponent} from './Insert/operazioni-crud.component';
import {ReadComponent} from './read/read.component';
import {DeleteComponent} from './delete/delete.component';
import { RouterModule, CanActivate } from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import { UpdateComponent } from './update/update.component';
import { ModaleComponent } from './modale/modale.component';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';

class Routes {
}
//definisco le rotte
const appRoutes: Routes[] = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ListaOpComponent,CanActivate:[AuthGuardGuard]},
  { path: 'Insert', component: OperazioniCrudComponent,CanActivate:[AuthGuardGuard]},
  { path: 'Read', component: ReadComponent,CanActivate:[AuthGuardGuard]},
  { path: 'Delete', component: DeleteComponent,CanActivate:[AuthGuardGuard]},
  { path: 'Update', component: UpdateComponent,CanActivate:[AuthGuardGuard]},
  { path:'UpdatePhase',component: ModaleComponent,CanActivate:[AuthGuardGuard]},
  {path:'**',component:ErrorPageComponent},

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

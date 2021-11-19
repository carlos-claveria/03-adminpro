import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule }   from './pages/pages.routing';
import { P404Component }        from './p404/p404.component';
import { AuthRoutingModule }    from './auth/auth.routing';

const routes : Routes = [

  // /dashboard -> PagesRoutingModule
  // /auth      -> AuthRoutingModule

  { path: ''            , redirectTo: '/dashboard/main', pathMatch: 'full'},
  { path: '**'          , component: P404Component},

];

@NgModule({
  imports : [
      RouterModule.forRoot(routes),
      PagesRoutingModule,
      AuthRoutingModule
    ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {AgentComponent} from './agent/agent.component';
import {LoginComponent} from './login/login.component';
import {NavComponent} from './nav/nav.component';

const routes: Routes = [{ path: 'admin', component: AdminComponent},
{ path: 'agent', component: AgentComponent },
{ path: 'login', component: LoginComponent },
{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

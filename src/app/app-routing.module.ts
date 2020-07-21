
import { ownerComponent } from './owner/owner.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { clubComponent } from './club/club.component';
import { kinderComponent } from './kinder/kinder.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
   {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component:clubComponent
      },
      { 
        path: 'kinder',
        component:kinderComponent

      },
      {
        path: 'owner',
        component:ownerComponent

      },
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

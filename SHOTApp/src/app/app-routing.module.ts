
import { NgModule }             from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './common/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ];


  @NgModule({
    imports: [ NgbModule.forRoot(), RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule {}


   
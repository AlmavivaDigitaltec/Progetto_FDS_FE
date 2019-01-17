﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserViewComponent } from './admin-home/user-view/user-view.component';
import { PrenotabiliViewComponent } from './admin-home/prenotabili-view/prenotabili-view.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'userHome', component: HomeComponent, canActivate: [AuthGuard] },
    { 
      path: 'adminHome', 
      component: AdminHomeComponent, 
      children: [
        { path: 'utenti', outlet: 'sub', component: UserViewComponent },
        { path: 'prenotabili', outlet: 'sub', component: PrenotabiliViewComponent }
        //{ path: 'prenotazioni', component: UserViewComponent }
      ]
    },
    //{ path: 'adminHome/utenti/update/:id', component: UserViewComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
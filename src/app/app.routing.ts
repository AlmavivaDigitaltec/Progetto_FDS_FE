import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserViewComponent } from './admin-home/user-view/user-view.component';
import { PrenotabiliViewComponent } from './admin-home/prenotabili-view/prenotabili-view.component';
import { NgModule } from '@angular/core';
import { PrenotazioniViewComponent } from './admin-home/prenotazioni-view/prenotazioni-view.component';
import { PrenotabileFormComponent } from './admin-home/prenotabili-view/prenotabile-form/prenotabile-form.component';
import { UserFormComponent } from './admin-home/user-view/user-form/user-form.component';
import { UpdateUserFormComponent } from './admin-home/user-view/update-user-form/update-user-form.component';
import { UpdatePrenotabileFormComponent } from './admin-home/prenotabili-view/update-prenotabile-form/update-prenotabile-form.component';
import { DettagliUtenteComponent } from './admin-home/user-view/dettagli-utente/dettagli-utente.component';
import { UpdatePrenotazioniFormComponent } from './admin-home/prenotazioni-view/update-prenotazioni-form/update-prenotazioni-form.component';
import { PrenotazioniFormComponent } from './home/prenotazioni-form/prenotazioni-form.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { 
      path: 'userHome',
      component: HomeComponent,
      children: [
        {
          path: 'prenotazioniCreate',
          component: PrenotazioniFormComponent
        }
      ] 
    },
    
    { 
      path: 'adminHome', 
      component: AdminHomeComponent, 
      children: [
        { 
          path: 'utenti', 
          component: UserViewComponent,
          children: [
            { path: 'create', component: UserFormComponent},
            { path: 'update/:utente', component: UpdateUserFormComponent}
          ]
        },
        { 
          path: 'prenotabili', 
          component: PrenotabiliViewComponent,
          children: [
            { path: 'create', component: PrenotabileFormComponent},
            { path: 'update/:prenotabile', component: UpdatePrenotabileFormComponent}
          ]
        },
        { 
          path: 'prenotazioni', 
          component: PrenotazioniViewComponent,
          children: [
            { path: 'update/:prenotazione', component: UpdatePrenotazioniFormComponent}
          ]
        }
      ]
    },
    //{ path: 'adminHome/utenti/update/:id', component: UserViewComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DettagliPrenotazioniComponent } from './home/dettagli-prenotazioni/dettagli-prenotazioni.component';
import { PrenotazioneService } from './_services/prenotazione.service';
import { UserViewComponent } from './admin-home/user-view/user-view.component';
import { PrenotabiliViewComponent } from './admin-home/prenotabili-view/prenotabili-view.component';
import { DettagliPrenotabileComponent } from './admin-home/prenotabili-view/dettagli-prenotabile/dettagli-prenotabile.component';
import { PrenotabileService } from './_services/prenotabile.service';
import { PrenotazioniViewComponent } from './admin-home/prenotazioni-view/prenotazioni-view.component'
import { DettagliUtenteComponent } from './admin-home/user-view/dettagli-utente/dettagli-utente.component';
import { DettagliPrenotazioneComponent } from './admin-home/prenotazioni-view/dettagli-prenotazione/dettagli-prenotazione.component';
import { PrenotabileFormComponent } from './admin-home/prenotabili-view/prenotabile-form/prenotabile-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';;
import { UserFormComponent } from './admin-home/user-view/user-form/user-form.component'
;
import { UpdateUserFormComponent } from './admin-home/user-view/update-user-form/update-user-form.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminHomeComponent ,
        DettagliPrenotazioniComponent ,
        DettagliUtenteComponent ,
        UserViewComponent ,
        PrenotabiliViewComponent,
        DettagliPrenotabileComponent ,
        PrenotazioniViewComponent ,
        DettagliPrenotazioneComponent ,
        PrenotabileFormComponent ,
        UserFormComponent,
        UpdateUserFormComponent],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PrenotazioneService,
        UserService,
        PrenotabileService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
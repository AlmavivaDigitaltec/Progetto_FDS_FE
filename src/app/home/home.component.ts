import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService } from '../_services';
import { Prenotazione } from "../_models/Prenotazione";
import { PrenotazioneService } from '../_services/prenotazione.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    currentUser: User;
    prenotazioni: Prenotazione[];
    //prenotazioni: Observable<Prenotazione[]>;

    constructor(private userService: UserService, private prenotazioneService: PrenotazioneService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

     ngOnInit() {
         this.loadAllPrenotazioni();
    }

    deleteUser(matricola: string) {
        //this.userService.delete(matricola).pipe(first()).subscribe(() => { 
            //this.loadAllUsers()
        //});
    }

    private loadAllPrenotazioni() {
        /*
        this.prenotazioneService.getAll().pipe(first()).subscribe(pren => {
            alert('prenotazioni caricate');
            this.prenotazioni = pren;
        });
        */
       this.prenotazioneService.getAll().subscribe(pren => {
           this.prenotazioni = pren;
       });
    }

    private deleteAllPrenotazioni()
    {
        alert('prenotazioni cancellate');
    }
}

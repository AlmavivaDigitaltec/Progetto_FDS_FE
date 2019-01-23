import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from 'src/app/_models/Prenotazione';
import { PrenotazioneService } from 'src/app/_services/prenotazione.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { PrenotazioniViewComponent } from '../prenotazioni-view.component';

@Component({
  selector: 'app-dettagli-prenotazione, [app-dettagli-prenotazione]',
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrls: ['./dettagli-prenotazione.component.css']
})

export class DettagliPrenotazioneComponent implements OnInit {
  
  @Input() prenotazione: Prenotazione;
  loading = false;

  constructor(
    private prenotazioneService: PrenotazioneService,
    private router: Router,
    private alertService: AlertService,
    private prenotazioniViewComponent: PrenotazioniViewComponent) { }

  ngOnInit() {
  }

  updatePrenotazione() {
    this.router.navigate(['adminHome/prenotazioni/update', JSON.stringify(this.prenotazione)]);
  }

  deletePrenotazione() {
    
  }

}

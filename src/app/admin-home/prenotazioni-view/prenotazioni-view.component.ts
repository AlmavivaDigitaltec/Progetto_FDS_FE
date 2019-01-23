import { Component, OnInit, Input } from '@angular/core';
import { PrenotazioneService } from 'src/app/_services/prenotazione.service';
import { Prenotazione } from 'src/app/_models/Prenotazione';

@Component({
  selector: 'app-prenotazioni-view',
  templateUrl: './prenotazioni-view.component.html',
  styleUrls: ['./prenotazioni-view.component.css']
})
export class PrenotazioniViewComponent implements OnInit {

  listaPrenotazioni: Prenotazione[];

  constructor(private prenotazioneService: PrenotazioneService) { }

  ngOnInit() {
    this.loadAllPrenotazioni();
  }

  loadAllPrenotazioni() {
    this.prenotazioneService.getAll().subscribe(pren => {
      this.listaPrenotazioni = pren;
    });
  }

}

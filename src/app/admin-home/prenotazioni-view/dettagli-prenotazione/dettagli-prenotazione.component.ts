import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from 'src/app/_models/Prenotazione';
import { PrenotazioneService } from 'src/app/_services/prenotazione.service';

@Component({
  selector: 'app-dettagli-prenotazione, [app-dettagli-prenotazione]',
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrls: ['./dettagli-prenotazione.component.css']
})
export class DettagliPrenotazioneComponent implements OnInit {
  
  @Input() prenotazione: Prenotazione;

  constructor(private prenotazioneService: PrenotazioneService) { }

  ngOnInit() {
  }

  updatePrenotazione() {

  }

  deletePrenotazione() {
    
  }

}

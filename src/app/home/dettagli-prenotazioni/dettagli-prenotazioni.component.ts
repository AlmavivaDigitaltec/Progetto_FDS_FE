import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from "src/app/_models/Prenotazione";

@Component({
  selector: 'app-dettagli-prenotazioni, [app-dettagli-prenotazioni]',
  templateUrl: './dettagli-prenotazioni.component.html',
  styleUrls: ['./dettagli-prenotazioni.component.css']
})
export class DettagliPrenotazioniComponent implements OnInit {

  @Input() prenotazione: Prenotazione;

  constructor() { }

  ngOnInit() {
  }

}

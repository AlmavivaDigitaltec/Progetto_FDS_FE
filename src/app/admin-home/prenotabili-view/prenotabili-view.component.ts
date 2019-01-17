import { Component, OnInit } from '@angular/core';
import { Prenotabile } from 'src/app/_models/prenotabile';

@Component({
  selector: 'app-prenotabili-view, [app-prenotabili-view]',
  templateUrl: './prenotabili-view.component.html',
  styleUrls: ['./prenotabili-view.component.css']
})
export class PrenotabiliViewComponent implements OnInit {

  prenotabile: Prenotabile;
  listaPrenotabili: Prenotabile[];

  constructor() { }

  ngOnInit() {
    this.loadAllPrenotazioni();
  }

  private loadAllPrenotazioni() {

  }

}

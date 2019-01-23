import { Component, OnInit } from '@angular/core';
import { Prenotabile } from 'src/app/_models/prenotabile';
import { PrenotabileService } from 'src/app/_services/prenotabile.service';

@Component({
  selector: 'app-prenotabili-view',
  templateUrl: './prenotabili-view.component.html',
  styleUrls: ['./prenotabili-view.component.css']
})
export class PrenotabiliViewComponent implements OnInit {

  prenotabile: Prenotabile;
  listaPrenotabili: Prenotabile[];

  constructor(private prenotabileService: PrenotabileService) { }

  ngOnInit() {
    this.loadAllPrenotabili();
  }

  loadAllPrenotabili() {
      this.prenotabileService.getAll().subscribe(pren => {
      this.listaPrenotabili = pren;
    });
  }
}

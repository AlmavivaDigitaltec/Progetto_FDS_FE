import { Component, OnInit, Input } from '@angular/core';
import { Prenotabile } from 'src/app/_models/prenotabile';

@Component({
  selector: 'app-dettagli-prenotabile',
  templateUrl: './dettagli-prenotabile.component.html',
  styleUrls: ['./dettagli-prenotabile.component.css']
})
export class DettagliPrenotabileComponent implements OnInit {

  @Input() prenotabile: Prenotabile;

  constructor() { }

  ngOnInit() {
  }

  updatePrenotabile() {

  }

  deletePrenotabile() {
    
  }

}

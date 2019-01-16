import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-dettagli-utente, [app-dettagli-utente]',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.css']
})
export class DettagliUtenteComponent implements OnInit {

  @Input() utente: User;

  constructor() { }

  ngOnInit() {
  }

}

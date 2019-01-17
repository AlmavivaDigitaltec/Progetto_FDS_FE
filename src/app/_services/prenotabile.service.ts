import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prenotabile } from '../_models/prenotabile';

@Injectable()
export class PrenotabileService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Prenotabile[]>(this.url + '/utente/vediTuttiPrenotabili');
  }
}

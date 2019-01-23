import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prenotazione } from "../_models/Prenotazione";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Prenotazione[]>(this.url + '/admin/vediTuttePrenotazioni' );
  }
}

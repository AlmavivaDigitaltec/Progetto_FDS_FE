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

  register(prenotabile: Prenotabile) {
    const body = { 
      codice: prenotabile.codice,
      nome: prenotabile.nome,
      data_inizio: prenotabile.data_inizio,
      data_fine: prenotabile.data_fine,
      ora_inizio: prenotabile.ora_inizio,
      ora_fine: prenotabile.ora_fine
     }
    return this.http.post(`${this.url}/admin/inserisciPrenotabile`, body);
  }

  update(prenotabile: Prenotabile) {
    return this.http.put(`${this.url}/admin/modificaPrenotabile`, prenotabile);
  }

  delete(prenotabile: Prenotabile){
    return this.http.delete(`${this.url}/admin/eliminaPrenotabile/${prenotabile.codice}`);
  }


}

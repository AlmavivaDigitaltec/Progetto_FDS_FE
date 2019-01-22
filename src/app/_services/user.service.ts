import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    
    private url = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.url + '/admin/vediTutto');
    }

    getById(matricola: string) {
        return this.http.get(`${environment.apiUrl}/users/` + matricola);
    }

    register(user: User) {
        const body = { matricola: user.matricola, nome: user.nome, cognome: user.cognome, mail: user.mail, password: user.password }
        return this.http.post(`${this.url}/utente/inserisci`, body);
    }

    update(user: User) {
        return this.http.put(`${this.url}/admin/modifica`, user);
    }

    delete(user: User) {
        //alert(JSON.stringify(user));
        return this.http.delete(`${this.url}/admin/cancellaUtenteMatricola/${user.matricola}`);
    }
}

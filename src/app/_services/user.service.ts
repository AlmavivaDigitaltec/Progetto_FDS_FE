import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(matricola: string) {
        return this.http.get(`${environment.apiUrl}/users/` + matricola);
    }

    register(nome: string, cognome: string, mail: string, password: string, matricola: string) {
        alert('dentro register');
        const body = { nome: nome, cognome: cognome, mail: mail, password: password, matricola: matricola };
        return this.http.post<any>('http://localhost:8080/utente/inserisci/',body);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user.matricola, user);
    }

    delete(matricola: string) {
        return this.http.delete(`${environment.apiUrl}/users/` + matricola);
    }
}

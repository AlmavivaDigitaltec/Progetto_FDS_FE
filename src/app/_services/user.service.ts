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
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user.matricola, user);
    }

    delete(matricola: string) {
        return this.http.delete(`${environment.apiUrl}/users/` + matricola);
    }
}

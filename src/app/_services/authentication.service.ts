import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(mail: string, password: string) {
        /*return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));*/

            const body = { nome: '', cognome: '', mail: mail, password: password, matricola: ''};

            return this.http.post<any>('http://localhost:8080/utente/login',body).pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser',JSON.stringify(user));
                    
                    if(user.matricola=='000')
                    {
                        alert('############' + '\n' + "#    ADMIN    #" + "\n" + '############');
                    }
                    else
                        alert('Utente loggato: ' + user.nome + ' ' + user.cognome);
                }
                else {
                  alert('utente non registrato');
                  window.location.reload();
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService, AlertService } from 'src/app/_services';
import { Router } from '@angular/router';
import { UserViewComponent } from '../user-view.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dettagli-utente, [app-dettagli-utente]',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.css']
})
export class DettagliUtenteComponent implements OnInit {

  @Input() user: User;
  alertService: AlertService;
  userViewComponent: UserViewComponent;
  loading: boolean;
  //@Output() userDeleted = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    //alert(this.user.nome);
    this.router.navigate(['adminHome/utenti/update', JSON.stringify(this.user)]);

  }

  /*deleteUser() {
    //alert(this.user.nome);
    this.userService.delete(this.user).subscribe( data => {
      this.alertService.success('Cancellazione effettuata!', true);
      this.router.navigate(['adminHome/utenti']);
      this.userViewComponent.loadAllUsers();
    });
  }*/

  deleteUser(){
    this.loading = true;
        this.userService.delete(this.user).pipe(first())
            .subscribe(
                user => {
                    this.alertService.success('Cancellazione effettuata!', true);
                    this.router.navigate(['adminHome/utenti']);
                    this.userViewComponent.loadAllUsers();
                });
  }

}

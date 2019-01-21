import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettagli-utente, [app-dettagli-utente]',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.css']
})
export class DettagliUtenteComponent implements OnInit {

  @Input() user: User;
  //@Output() userDeleted = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    alert(this.user.nome);
    this.router.navigate(['adminHome/utenti/update', JSON.stringify(this.user)]);

  }

  deleteUser() {
    alert(this.user.nome);
    this.userService.delete(this.user);
  }

}

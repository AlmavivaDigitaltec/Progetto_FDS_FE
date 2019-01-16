import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-dettagli-utente, [app-dettagli-utente]',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.css']
})
export class DettagliUtenteComponent implements OnInit {

  @Input() utente: User;
  //@Output() userDeleted = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  updateUser() {

  }

  deleteUser() {
    alert(this.utente.nome);
  // this.userDeleted.emit(this.utente);
  }

}

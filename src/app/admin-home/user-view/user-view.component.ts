import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  currentUser: User;
  listaUtenti: User[];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(utenti => {
      this.listaUtenti = utenti;
    });
  }

  
}

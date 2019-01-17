import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService } from '../_services';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() {
}

  ngOnInit() {
  }
}

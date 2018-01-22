import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.users = this.databaseService.getUsers();
  }

}

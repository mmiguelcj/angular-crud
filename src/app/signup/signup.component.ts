import { Router } from '@angular/router/src/router';
import { Component, OnInit } from '@angular/core';

import { DatabaseService } from './../database.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  user: any;

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.cleanUser();
  }

  cleanUser() {
    return {
      id: null, 
      firstName: '', 
      lastName: '', 
      email: '' 
    };
  }

  onSubmit(dadosForm) {
    this.databaseService.addUser(this.user);
    this.user = this.cleanUser();
    this.router.navigate(['users']);
  }
}

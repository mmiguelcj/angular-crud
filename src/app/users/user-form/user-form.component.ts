import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router/src/router';

import { DatabaseService } from './../../database.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id: number;
  user: any;

  inscricao: Subscription;

  constructor( private route: ActivatedRoute, 
  private databaseService: DatabaseService,
  private router: Router) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.user = this.databaseService.getUser(this.id);

        if (this.user == null ) {
          this.router.navigate(['notExist']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  
  onSubmit(dadosForm) {
    this.user.firstName = dadosForm.value.first_name;
    this.user.lastName = dadosForm.value.last_name;
    this.user.email = dadosForm.value.email;
    this.router.navigate(['user', this.user.id]);
  }

}

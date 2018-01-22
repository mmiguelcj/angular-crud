import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { ActivatedRoute } from '@angular/router/src/router_state';
import { Subscription } from 'rxjs/Subscription';

import { DatabaseService } from '../../database.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  id: number;
  user: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private databaseService: DatabaseService,
    private router: Router) { }

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

  userEdit (){
    this.router.navigate(['/user', this.id, 'edit']);
  }

  userDelete() {
    this.databaseService.removeUser(this.user);
    this.router.navigate(['/users']);
  }
}

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common/src/common_module';


import { UserDoesNotExistComponent } from 'app/users/user-does-not-exist/user-does-not-exist.component';
import { UserDetailsComponent } from 'app/users/user-details/user-details.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';

import { DatabaseService } from './../database.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserDoesNotExistComponent,
    UserFormComponent
  ],
  providers: [DatabaseService],
})
export class UsersModule { }

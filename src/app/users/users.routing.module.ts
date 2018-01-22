import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from 'app/users/user-details/user-details.component';
import { UserDoesNotExistComponent } from 'app/users/user-does-not-exist/user-does-not-exist.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'user', children: [
    { path: ':id', component: UserDetailsComponent },
    { path: ':id/edit', component: UserFormComponent}
  ]},
  { path: 'notExist', component: UserDoesNotExistComponent },
    //if route does not exist.
    { path: ':x', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  
  private users = [
    {id: 1, firstName: 'Mauri', lastName: 'Jr', email: 'teste1@teste.com' },
    {id: 2, firstName: 'Pedro', lastName: 'Manuel', email: 'teste2@teste.com' },
    {id: 3, firstName: 'Paulo', lastName: 'Pereira', email: 'teste3@teste.com' }
  ];

  private id = this.users.length;

  getUsers() {
    return this.users;
  }

  getUser (id: number) {
    let users = this.getUsers();
    for (let i=0; i < users.length; i++) {
      let user = users[i];
      if (user.id == id) {
        return user;
      }
    }
    return null;
  }

  getNewId () {
    return this.id + 1;
  }
  
  addUser (user) {
    user.id = this.getNewId();
    this.users.push(user);
    this.id += 1;
  }

  removeUser (user) {
    var idx = this.users.indexOf(user);
    if (idx != -1) {
        return this.users.splice(idx, 1);
    }
  }

  constructor() { }

}

import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  usersArray : Iuser[] = [
    {
      userName: 'John Doe',
      userId: '1',
      userRole : 'Admin'
    },
    {
      userName: 'Jane Doe',
      userId: '2',
      userRole : 'User'
    },
    {
      userName: 'May Doe',
      userId: '3',
      userRole : 'User'
    },
    {
      userName: 'Maria Doe',
      userId: '4',
      userRole : 'Admin'
    }
  ]

  fetchAllUsers(){
    return this.usersArray
  }

  //sngle user
  fetchSingleUser(id : string):Iuser{
    return this.usersArray.find(user => user.userId === id) as Iuser
  }

  //Add User
  onAddUser(user : Iuser):void{
    this.usersArray.push(user)
  }
  //updateUser
  updateUser(updatedUser:Iuser){
    let getIndex = this.usersArray.findIndex(user => user.userId === updatedUser.userId)
    this.usersArray[getIndex]=updatedUser;
  }
}

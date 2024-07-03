import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersArr! : Array<Iuser>;
  seluserId! : string;
  constructor(private router : Router, private userServ : UsersService) { }

  ngOnInit(): void {
    this.usersArr = this.userServ.fetchAllUsers()
  }

  gotoProducts(){
    this.router.navigate(['/products'])
  }

}

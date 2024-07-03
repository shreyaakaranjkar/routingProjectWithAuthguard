import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Iuser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObject! : Iuser;

  constructor(private route : ActivatedRoute, private userServ : UsersService, private router : Router) { }


  ngOnInit(): void {
    // let getUserId = this.route.snapshot.params['userId'];
    // console.log(getUserId);
    // this.userObject = this.userServ.fetchSingleUser(getUserId)
    this.route.params
    .subscribe(res => {
      let getUserId = res['userId'];
    console.log(getUserId);
    this.userObject = this.userServ.fetchSingleUser(getUserId)
    })
  }

  editUser(){
    this.router.navigate(['edit'],{
      relativeTo : this.route,
      queryParamsHandling : 'preserve'
    })
  }

}

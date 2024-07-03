import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  userId! : string;
 userObj! : Iuser;
 userForm! : FormGroup;
 isEditMode : boolean = false;

  constructor(private route : ActivatedRoute, private userServ : UsersService,
            private router : Router,private uuid :UuidService) { }

  ngOnInit(): void {
    this.createForm()
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId);
   if(this.userId){
    this.isEditMode = true;
    this.userObj = this.userServ.fetchSingleUser(this.userId);
    this.userForm.patchValue(this.userObj)

    this.route.queryParams
    .subscribe(res => {
      if(res['userRole']==='Admin'){
        this.userForm.enable()
      }
      else{
        this.userForm.disable()
      }
    })
  }
  else{
    this.isEditMode =false;
  }
  }
//onUserAdd
  onUserAdd(){
    let user : Iuser = {...this.userForm.value, userId : this.uuid.uuid()};
    this.userServ.onAddUser(user)
    console.log(user)
  }
  //createForm
  createForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null,[Validators.required]),
      userRole : new FormControl(null,[Validators.required])
    })
  }
  //updateUser
  updateUser(){
    let updatedObj = {...this.userForm.value, userId : this.userId};
    this.userServ.updateUser(updatedObj);
    this.router.navigate(['/users'])
  }

}

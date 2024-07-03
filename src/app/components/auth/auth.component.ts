import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authServ : AuthService) { }

  loginForm! : FormGroup;
  signUpForm! : FormGroup;
  userHasAccount : boolean = true

  ngOnInit(): void {
    this.createloginForm()
    this.createSignUpForm()
  }

  createloginForm(){
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
    }) 
  }

  createSignUpForm(){
    this.signUpForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
      Cpassword : new FormControl(null,[Validators.required])
    })
  }
  
  //onLogin
  onLogin(){
      if(this.loginForm.valid){

        let loginCred = this.loginForm.value;
        console.log(loginCred);
        
        this.authServ.onLogIn(loginCred)
      }
      else{
        alert('Please Enter Login Values First!')
      }
    
  }

  //onUserSignUp
  onUserSignUp(){

  }
}

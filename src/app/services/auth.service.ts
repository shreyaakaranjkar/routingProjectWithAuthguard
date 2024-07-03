import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoginState : boolean = false;
  loginState$ : Subject<boolean> = new Subject<boolean>()

  constructor(private router : Router) {
    console.log(this.userLoginState)
   }

  isAunthenticated(){
    return new Promise<boolean>((resolve,reject) => {
      setTimeout(() => {
        if(localStorage.getItem("token")){
          this.userLoginState = true;
        }
        else{
          this.userLoginState = false;
          this.router.navigate(['/'])
        }
        this.loginState$.next(this.userLoginState) //instead of sending twice in if-else
        resolve(this.userLoginState)
      }, 1000);
    })
  }

  onLogIn(obj :any){
    
    if(obj.email === 'abc' && obj.password === 'abc'){
      this.userLoginState = true;
      this.router.navigate(['home'])
      localStorage.setItem("token","JWT Token")
    }
    else{
      alert('Invalid Login Details!')
    }
   
  }
  onLogOut(){
    this.userLoginState = false;
    // this.router.navigate(['/']) //if state not true then redirect
    this.router.navigate(['/'])
    localStorage.removeItem("token")
  }
}

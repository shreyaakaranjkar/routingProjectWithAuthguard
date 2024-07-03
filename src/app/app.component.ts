import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authServ : AuthService){}
 
  title = 'routingProject';
  isLogin : boolean = false;

  ngOnInit(): void {
    this.authServ.loginState$
    .subscribe(res => {
      this.isLogin = res
    })
  }
}

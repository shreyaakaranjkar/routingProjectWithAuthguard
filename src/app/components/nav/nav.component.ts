import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authServ : AuthService) { }

  ngOnInit(): void {
  }

  // onLogIn(){
  // this.authServ.onLogIn()
  // } - Authentication through auth.ts so method not required

  onLogOut(){
    this.authServ.onLogOut()
  }

}

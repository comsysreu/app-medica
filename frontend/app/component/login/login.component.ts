import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  notification: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  
  login(){
    console.log('Login');
    this.notification = !this.notification;
  }

  resetPassword(){
    console.log('reset Password');
  }

  createAccount(){
    console.log('Create Account');
  }

}

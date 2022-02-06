import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  //setam token in local storage
  setToken( token: string) : void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  getUsername() : string | null{
    return localStorage.getItem('username');
  }

  isLoggedIn(){
    return this.getToken() != null;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.route.navigate(['login']);
  }

  login({username, password}: any) {
    //generez random token
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';
      for ( var i = 0; i < 12; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
    this.setToken(result);
    localStorage.setItem('username', username);
    console.log(result);

    
  }

}

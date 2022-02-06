import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['site']);
    }

  }

  onSubmit(): void{
   // console.log(this.loginForm.value);
   this.http.get<any>("http://localhost:3000/comments")
   .subscribe(res => {
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })
      if(user){
        //generez un token
        this.auth.login(this.loginForm.value)
        this.router.navigate(['site']);
        //console.log(this.auth.getToken);
           
      }
   })
  }

}

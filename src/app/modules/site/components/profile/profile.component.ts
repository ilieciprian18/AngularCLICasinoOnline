import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private http : HttpClient) { }

  public balance : any;
  public username : any;
  public email : any;
  public earnings : any;
  public phonenumber : any;

  ngOnInit(): void {

    this.http.get<any>("http://localhost:3000/comments")
   .subscribe(res => {
      const user = res.find((a:any)=>{
        if(a.username === localStorage.getItem('username')){
          this.balance = a.balance + '$';
          this.username = a.username;
          this.email = a.email;
          this.phonenumber = a.phonenumber;
          this.earnings = a.earnings + '$';
          return true;
        }
        else return false;
      })
   })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) { }

  public balance: any;

  ngOnInit(): void {

  
  this.http.get<any>("http://localhost:3000/comments")
   .subscribe(res => {
      const user = res.find((a:any)=>{
        if(a.username === localStorage.getItem('username')){
          this.balance = a.balance + '$';
          return true;
        }
        else return false;
      })
   })
  
  }

  // ngOnChanges(): void {
  //   this.http.get<any>("http://localhost:3000/comments")
  //  .subscribe(res => {
  //     const user = res.find((a:any)=>{
  //       if(a.username === localStorage.getItem('username')){
  //         this.balance = a.balance + '$';
  //         return true;
  //       }
  //       else return false;
  //     })
  //  })
  // }

  // ngOnChanges(): void{
  //   this.http.get<any>("http://localhost:3000/comments")
  //  .subscribe(res => {
  //     const user = res.find((a:any)=>{
  //       if(a.username === localStorage.getItem('username')){
  //         console.log(a.balance)
  //         return true;
  //       }
  //       else return false;
  //     })
  //  })
  // }



  logout(): void {
    this.auth.logout();
  }
}

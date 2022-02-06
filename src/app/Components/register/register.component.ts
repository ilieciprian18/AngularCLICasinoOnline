import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router, private auth: AuthService) { }

  // initializez formu cu chestii nule
  //ar trb verificate astea
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      phonenumber:[''],
      password:[''],
      balance:['500'],
      earnings:['0'],
    })

    if(this.auth.isLoggedIn()){
      this.router.navigate(['site']);
    }
  }

  //un call de post ca sa salvez datele in db
  signUp():void {
    this.http.post<any>("http://localhost:3000/comments", this.signupForm.value)
    .subscribe(res=> {
      alert("Sign Succesfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

}

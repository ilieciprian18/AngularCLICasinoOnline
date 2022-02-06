import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

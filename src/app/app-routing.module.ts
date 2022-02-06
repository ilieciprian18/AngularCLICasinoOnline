import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'register' , component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'site', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./modules/site/site.module').then((m) => m.SiteModule),},
  {path: '**' , component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

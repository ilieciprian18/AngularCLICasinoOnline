import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RuletaComponent } from './components/ruleta/ruleta.component';
import { ServicesComponent } from './components/services/services.component';
import { SiteDashboardComponent } from './components/site-dashboard/site-dashboard.component';

const routes: Routes = [
  {path: '', component: SiteDashboardComponent, children: [
    {path: 'ruleta', component : RuletaComponent},
    {path: 'profile', component : ProfileComponent},
    {path: 'services', component : ServicesComponent},
    {path: 'contact', component : ContactComponent},
    {path: '', redirectTo : '/site/ruleta', pathMatch: 'full'},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteDashboardComponent } from './components/site-dashboard/site-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RuletaComponent } from './components/ruleta/ruleta.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SiteDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    RuletaComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SiteModule { }

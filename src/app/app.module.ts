import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ListContactsComponent } from './contact/list-contacts/list-contacts.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './pages/log/log.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './shared/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddContactComponent,
    ListContactsComponent,
    ContactInfoComponent,
    LogComponent,
    AboutComponent,
    DetailsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ListContactsComponent } from './contact/list-contacts/list-contacts.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddContactComponent,
    ListContactsComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

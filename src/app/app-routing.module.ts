import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LogComponent } from './pages/log/log.component';

const routes: Routes = [
  { path: '', redirectTo: 'log/contact', pathMatch: 'full' }, // Home page, redirects to log contact page
  { path: 'log/contact', component: HomeComponent },          // Lets the user enter a new contact
  { path: 'log/contact/:id', component: DetailsComponent },      // Lets the user view / edit a specific contact
  { path: 'log/view', component: LogComponent },            // Lists all the contacts
  { path: 'about', component: AboutComponent },             // About this app
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

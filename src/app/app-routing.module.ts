import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { RedirectGuard } from './directive/redirectGuard';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  },
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'contacts', component: ContactsComponent},
  {
    path: 'linkedIn',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.linkedin.com/in/seulgi-jo/'
    }
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', 
    component: ContactsComponent,
    children:[
      {
        path: 'contact/:action',
        component: ContactComponent
      }
    ]
   },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  { path: '**', redirectTo: '/something', pathMatch: "full" },
  { path: 'something', component: PageNotFoundComponent }
]


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
export const appComponent = [
  HomeComponent,
  ContactsComponent,
  ContactComponent,
  PageNotFoundComponent
]

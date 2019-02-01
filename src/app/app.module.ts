import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule, appComponent} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';//navbar should nt be kept inside app-routing because navar will displayed twice while using router-outlet
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeService } from './home/home.service'; 


@NgModule({
  declarations: [
    AppComponent,
    appComponent,
    NavbarComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

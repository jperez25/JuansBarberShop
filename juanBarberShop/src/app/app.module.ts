import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBanComponent } from './nav-ban/nav-ban.component';
=======
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
>>>>>>> edb9370bc87f9993d02067c1ddd6ac78f109b9f6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavBanComponent
=======
    NavBarComponent,
    HomeComponent
>>>>>>> edb9370bc87f9993d02067c1ddd6ac78f109b9f6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

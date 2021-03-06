import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { Page404Component } from './Shared/page404/page404.component';
import { BookComponent } from './book/book.component';
import { BarbersComponent } from './barbers/barbers.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    Page404Component,
    BookComponent,
    BarbersComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

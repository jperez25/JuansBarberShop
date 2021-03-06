import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbersComponent } from './barbers/barbers.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'barbers', component: BarbersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

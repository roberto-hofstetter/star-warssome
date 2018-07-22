import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component'
import { FilmService } from './film.service';

@NgModule({
  declarations: [AppComponent, FilmsListComponent, FilmDetailsComponent],
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppModule { }

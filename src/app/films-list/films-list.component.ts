import { Component, OnInit } from '@angular/core'
import { Film } from '../film'
import { FilmService } from '../film.service'

@Component({
  selector: 'app-films-list',
  template: `
  <section class="container">
  <ul class="col-md-12">  
    <li *ngFor="let film of films" class="col-md-4">    
      <a [routerLink]="['/films', film.id]" class="col-md-12">        
        <h3 class="col-md-12">Star Wars: Episode {{film.episode_id}} - {{film.title}} ({{film.release_date | date: 'yyyy'}})</h3>
        <div class="col-md-12 description">            
          {{film.opening_crawl}}
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">            
          <div class="col-md-6 col-sm-12 col-xs-12">
            <strong class="col-md-12">Release Date</strong> 
            <span class="col-md-12">{{film.release_date | date: 'dd/MM/yyyy'}}</span>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
              <strong class="col-md-12">Director</strong> 
              <span class="col-md-12">{{film.director}}</span>
            </div>
        </div>        
      </a>
    </li>
  </ul>
  </section>
        
  `,
  styleUrls: ['./films-list.component.sass'],
})
export class FilmsListComponent implements OnInit {
  films: Film[] = []
  selectedFilm: Film

  constructor(private filmService: FilmService) {}

  ngOnInit() {    
    this.filmService
        .getAll()
        .subscribe(f => this.films = f);        
  }

  selectFilm(film) {
    this.selectedFilm = film
  }  
}

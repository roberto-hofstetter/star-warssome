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
        <h3 class="col-md-12">{{film.title}}</h3>
        <div class="col-md-12 description">            
          {{film.opening_crawl}}
        </div>
        <div class="col-md-12 card-footer">            
          <span class="col-md-6">
            <span class="col-md-12">Data de lançamento</span> 
            <span class="col-md-12">{{film.release_date | date: 'dd/MM/yyyy'}}</span>
          </span>
          <span class="col-md-6">
              <span class="col-md-12">Diretor</span> 
              <span class="col-md-12">{{film.director}}</span>
            </span>
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

import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Film } from '../film'
import { ActivatedRoute, Router } from '@angular/router'
import { FilmService } from '../film.service'
import { iif } from 'rxjs';

@Component({
  selector: 'app-film-details',
  template: `  
  <section *ngIf="film" class="film-details container">
{{film.characters}}
  
    <div class="col-md-12 header">  
      <h1 class="col-md-12">Star Wars: Episode {{film.episode_id}} - {{film.title}} ({{film.release_date | date: 'yyyy'}})</h1>              
      <span class="col-md-6 col-xs-12 release-date"><strong>Release Date:</strong> {{film.release_date | date: 'dd/MM/yyyy'}}</span>      
      <h2 class="col-md-12"><strong>Director:</strong> {{film.director}}</h2>      
      <span class="col-md-12"><strong>Producer:</strong> {{film.producer}}</span>      
    </div>    

    <div class="col-md-12 description">
      <p>{{film.opening_crawl}}</p>
    </div>

    <div class="list-group col-md-6">
      <a href="javascript:void(0)" class="list-group-item list-group-item-action active">
        Characters
      </a>
      <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
    </div>
    
    <div class="col-md-12">
      <button class="btn btn-warning" (click)="gotoFilmsList()">Back To List</button>      
    </div>    
  </section>

  `,
  styleUrls: ['./film-details.component.sass'],
})
export class FilmDetailsComponent implements OnInit, OnDestroy {
  
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id'])
      var teste = this.filmService
            .get(id)
            .subscribe(p => this.film = p);

            console.log(teste[0])

    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  gotoFilmsList() {
    window.history.back();
  }

  @Input() film: Film
}
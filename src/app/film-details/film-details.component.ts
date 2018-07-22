import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Film } from '../interfaces/film'
import { ActivatedRoute, Router } from '@angular/router'
import { FilmService } from '../services/film.service'
import { iif } from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
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
      this.filmService
            .get(id)
            .subscribe(p => this.film = p);                                            
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
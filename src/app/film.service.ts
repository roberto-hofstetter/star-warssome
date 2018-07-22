import { Injectable } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs'

import { Film } from './film'

@Injectable()
export class FilmService {
  private baseUrl: string = 'https://swapi.co/api'

  constructor(private http: Http) {}

  getAll(): Observable<Film[]> {
    let films$ = this.http
      .get(`${this.baseUrl}/films/`, { headers: this.getHeaders() })
      .pipe(map(mapFilms));         
    return films$
  }

  private getHeaders() {
    // get dos headers para servir o tipo json
    let headers = new Headers()
    headers.append('Accept', 'application/json');
    return headers
  }
  
  get(id: number): Observable<Film> {
    let film$ = this.http
      .get(`${this.baseUrl}/films/${id}`, { headers: this.getHeaders() })
      .pipe(map(mapFilm));            
    return film$
  }

}

function mapFilms(response: Response): Film[] {
  // mapeia a propriedade result da api    
  return response.json().results.map(toFilm)
}

function toFilm(r: any): Film {  
  let film = <Film>{
    id: extractId(r),
    url: r.url,
    title: r.title,
    episode_id: r.episode_id,
    opening_crawl: r.opening_crawl,
    director: r.director,
    producer: r.producer,
    release_date: r.release_date,
    /*characters: string;
    planets: string;
    starships: string;
    vehicles: string;
    species: string;*/
    created: r.created,
    edited: r.edited    
  }  
  return film
}

// extrai o id da url da api
function extractId(FilmData: any) {
  let extractedId = FilmData.url
    .replace('https://swapi.co/api/films/', '')
    .replace('/', '')
  return parseInt(extractedId)
}

function mapFilm(response: Response): Film {  
  return toFilm(response.json())
}
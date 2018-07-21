import { Component } from '@angular/core';
import { FilmService } from './film.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [FilmService]
})
export class AppComponent {
  title = 'Star WarsSome';
}

import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-List'
  studentName = 'Matthew Blain'
  studentId = 'S00211783'
  movies = {} as any;

  constructor(private movieService: MovieService){}

  ngOnInit(){
    this.movies = this.movieService.getMovies();
  }

}

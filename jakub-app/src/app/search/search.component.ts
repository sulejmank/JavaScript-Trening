import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  search = '';
  movies: Movie[];
  subscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getMovie(): void {
    this.subscription = this.movieService.searchMovie(this.search)
      .subscribe(x => {
        this.movies = x.Search.slice(0, 10);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

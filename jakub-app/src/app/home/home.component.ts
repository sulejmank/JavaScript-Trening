import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, Movie } from '../types';
import { MovieService } from '../services/movie.service';
// tslint:disable: deprecation

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  title = 'Movies';
  user: User;
  search = '';
  movies: Movie[];

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userService: UserService,
    private movieService: MovieService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  getMovie(): void {
    this.movieService.searchMovie(this.search)
      .subscribe(x => {
        this.movies = x.Search.slice(0, 10);
        console.log(this.movies);
      });
  }

  ngOnInit(): void {
    this.user = this.userService.loggedUser;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}

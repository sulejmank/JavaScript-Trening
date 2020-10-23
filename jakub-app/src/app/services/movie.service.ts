import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiRoute = 'http://www.omdbapi.com/';
  apiKey = '43337568';

  constructor(private httpClient: HttpClient) { }

  searchMovie(title: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiRoute}?s=${title}&apikey=${this.apiKey}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../types';

export interface SearchResponse {
  Search: Movie[];
  Response: boolean;
  totalResults: number;
}

export interface MovieResponse {
  Title: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiRoute = 'http://www.omdbapi.com/';
  apiKey = '43337568';

  constructor(private httpClient: HttpClient) { }

  searchMovie(title: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      `${this.apiRoute}?s=${title}&apikey=${this.apiKey}`
    );
  }

  getMovie(id: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.apiRoute}?i=${id}&apikey=${this.apiKey}`);
  }
}

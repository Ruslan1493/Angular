import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private service;
  private apiKey: string = '150eb112c3d940743c1cbd3f0e62b04d';
  private path = 'https://api.themoviedb.org/3/';
  private popular = 'discover/movie?sort_by=popularity.desc';
  private theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-01-22';
  private authentication = '&api_key=';

  constructor(public http: HttpClient) { }

  getPopular(){
    return this.http.
      get(this.path + this.popular + this.authentication + this.apiKey)
  }

  getInTheaters(){
    return this.http.
      get(this.path + this.theaters + this.authentication + this.apiKey)
  }
}

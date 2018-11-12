import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  COL_News = "https://newsapi.org/v2/top-headlines?country=co&language=es&apiKey=890ed3b022e44dedaae9d79d12a03426";
  US_News = "https://newsapi.org/v2/top-headlines?country=us&language=es&apiKey=890ed3b022e44dedaae9d79d12a03426";

  constructor(public http: HttpClient) {
    //this.getUsuario
  }

  getNews(){
    return this.http.get(this.COL_News);
  }
}

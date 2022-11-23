import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getData(i:number)
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${i}?api_key=cd1828f539ff239699f73adf3d5cd895`)
  }
}

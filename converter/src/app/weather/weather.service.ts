import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getdata(city:string)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=346d6f1d413c1f988d1afc1a50183c49`);
    
  }
}

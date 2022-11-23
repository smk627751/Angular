import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weather:WeatherService) { }
  city:string = "";
  img:string=""
  weatherDetails:any;
  temp:number = 0;
  feels_like:number = 0;
  temp_min:number = 0;
  temp_max:number = 0;
  humidity:number = 0;
  ngOnInit(){
   this.forcast();
  }

  forcast()
  {
    if(this.city == "")
      {
        this.temp = 0
        this.img = ""
        this.feels_like = 0
        this.temp_max = 0
        this.temp_min = 0
        this.humidity = 0
      }
    
    this.weather.getdata(this.city).subscribe((res: any) =>{
      this.weatherDetails = res
      this.temp=parseInt(this.weatherDetails.main.temp)-273
      this.feels_like=parseInt(this.weatherDetails.main.feels_like)-273.15
      this.temp_max=parseInt(this.weatherDetails.main.temp_max)-273.15
      this.temp_min=parseInt(this.weatherDetails.main.temp_min)-273.15
      this.humidity=parseInt(this.weatherDetails.main.humidity)
      if(this.weatherDetails.weather[0].main == "Clear")
      {
        this.img = "/assets/clear.jpg"
      }
      if(this.weatherDetails.weather[0].main == "Rain")
      {
        this.img = "/assets/Rain.jpg"
      }
      if(this.weatherDetails.weather[0].main == "Haze")
      {
        this.img = "/assets/haze.jpeg"
      }
      if(this.weatherDetails.weather[0].main == "Mist")
      {
        this.img = "/assets/mist.jpg"
      }

      if(this.weatherDetails.weather[0].main == "Fog")
      {
        this.img = "/assets/mist.jpg"
      }
      if(this.weatherDetails.weather[0].main == "Clouds")
      {
        if(this.temp <8)
        {
          this.img = "/assets/ice.jpg"
        }
        else if(this.weatherDetails.weather[0].description == "scattered clouds")
        this.img = "/assets/clear.jpg"

        else 
        this.img = "/assets/cloudy.jpg"
      }
      console.log(this.weatherDetails)
    });
  }

}

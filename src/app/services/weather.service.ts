import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiKey = '3bb86f13e23f27364a3783110d10d059';
  URI:string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName: string, countryCode: string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  }
}
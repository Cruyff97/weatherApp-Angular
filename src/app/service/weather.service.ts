import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../interfaces/city';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = 'e201cefb5811db9fbcdfe6e5c552dc3c';
  private rootURL = `https://www.metaweather.com/api`;
  results: any;
  constructor(public http: HttpClient) {}
  getCity(city: string) {
    return this.http.get<City>(
      `https://api.codetabs.com/v1/proxy/?quest=${this.rootURL}/location/search/?query=${city}`
    );
  }
  getWeather(woeid:any){
    return this.http.get<Weather>(
      `https://api.codetabs.com/v1/proxy/?quest=${this.rootURL}/location/${woeid}`
    )
  }
  getRes() {
    return this.results;
  }
  getIcon(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }
}

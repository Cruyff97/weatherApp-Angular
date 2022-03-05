import { WeatherService } from '../service/weather.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Weather } from '../interfaces/weather';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  city: string = '';
  arrResults:Array<Weather>=[];
  @Output() newResEvent = new EventEmitter();
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {}

  searchWeather(city: string) {
    this.weatherservice.getCity(city).subscribe((cityRes) => {
      let woeid = cityRes[0].woeid;
      console.log(cityRes);

      this.weatherservice.getWeather(woeid).subscribe((weatherRes) => {
    this.arrResults.push(weatherRes);
    this.newResEvent.emit(this.arrResults);
      });
    });
  }
}

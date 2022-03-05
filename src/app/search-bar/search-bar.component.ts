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
  isLoading:boolean = false;
  arrResults:Array<Weather>=[];
  @Output() newResEvent = new EventEmitter();
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
  }

  searchWeather(city: string) {
    console.log(city.substring(0,1).toUpperCase() + city.substring(1,city.length).toLocaleLowerCase())
    const selected = this.arrResults.find((e: any)=> e.title === city.substring(0,1).toUpperCase() + city.substring(1,city.length).toLocaleLowerCase());
    if(selected){
      return;
    }
    this.isLoading = true;
    this.weatherservice.getCity(city).subscribe((cityRes) => {
      let woeid = cityRes[0].woeid;
      console.log(cityRes);

      this.weatherservice.getWeather(woeid).subscribe((weatherRes) => {
        weatherRes.curr_day = 0;
        this.arrResults.push(weatherRes);
        this.newResEvent.emit(this.arrResults);
        this.isLoading = false;
      });
    });
  }
}

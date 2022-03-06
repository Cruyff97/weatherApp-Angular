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
  error?:string;
  isLoading:boolean = false;
  arrResults:Array<Weather>=[];
  @Output() newResEvent = new EventEmitter();
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
  }

  searchWeather(city: string) {
    const selected = this.arrResults.find((e: any)=> e.title === city.substring(0,1).toUpperCase() + city.substring(1,city.length).toLocaleLowerCase());
    if(selected){
      return;
    }
    this.weatherservice.getCity(city).subscribe((cityRes) => {
      this.isLoading = true;
      let woeid = cityRes[0]?.woeid;
      if(woeid==undefined){
        this.isLoading = false;
      }
    

      this.weatherservice.getWeather(woeid).subscribe({
        next: (weatherRes) => {
          this.error='';
          weatherRes.curr_day = 0;
          this.arrResults.push(weatherRes);
          this.newResEvent.emit(this.arrResults);
          this.isLoading = false;
        },
        error: (error) => {
          this.error= 'Search another city'
          this.isLoading = false;
        }
      }
      );
    });
  }
}

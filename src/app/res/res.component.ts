
import { Component, Input, OnChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css'],
})
export class ResComponent implements OnInit, OnChanges {
  @Input() results: any;
  index: number = 0;
  icon: any;
  iconName!: string;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
  }

  
  onDayClicked(  title:any, i:any, next_days_weather:any,  ){
    console.log('days',next_days_weather.id)
    
    const selected = this.results.find((e: any)=> e.title === title);
    console.log("selected", selected)
    selected.curr_day = i
    

    //this.index = i;
    //this.selectedDay= nextdaysweather

}    
onDeleteCard(result:any){
  
  let index= this.results.indexOf(result);

   this.results.splice(index, 1);

}

  }


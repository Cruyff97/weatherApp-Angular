
import { Component, Input, OnChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css'],
})
export class ResComponent implements OnInit, OnChanges {
  @Input() results: any;
  icon: any;
  iconName!: string;
  selectedDay!:any;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
  }

  
  onDayClicked(nextdaysweather:any){
   this.selectedDay= nextdaysweather
}    
onDeleteCard(result:any){
  let index= this.results.indexOf(result);
   this.results.splice(index, 1);

}

  }


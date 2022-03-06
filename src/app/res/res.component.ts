
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

  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }

  
  onDayClicked(  title:any, i:any){
    const selected = this.results.find((e: any)=> e.title === title);
    selected.curr_day = i
}    
onDeleteCard(result:any){
  
  let index= this.results.indexOf(result);

   this.results.splice(index, 1);

}

  }


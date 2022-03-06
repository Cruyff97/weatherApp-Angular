import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultSearch: any = [];
  resultFromSearch(res: any) {
    this.resultSearch = res;
  }
}

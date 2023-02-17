import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    {{data | json}}
  `
})
export class AppComponent {
  title = 'real-time-price-app';

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0');
  yyyy = this.today.getFullYear();

  newToday = this.yyyy + '-' + this.mm + '-' + this.dd;

  date = new Date();
  current_time = this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
  parseFloat(value: string): number {
    return parseFloat(value);
  }


}

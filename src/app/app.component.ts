import {Component, OnInit} from '@angular/core';
import {StatisticsService} from './statistics/statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  datenow = new Date(Date.now());
  dateTo: Date;

  title = 'app works!';

  // constructor(private statisticsService: StatisticsService) {
  // }
  //
  // ngOnInit() {
  //   console.log(this.datenow);
  //   console.log(this.dateTo);
  //   this.dateTo = this.statisticsService.dateAddDays(this.datenow, 28);
  //   this.statisticsService.getGuildStatistics(this.datenow, this.dateTo);
  //
  // }
}


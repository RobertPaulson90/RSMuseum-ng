import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../statistics/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datenow = new Date("05 10, 2017 01:15:00");
  dateTo: Date;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit() {

    this.dateTo = this.statisticsService.dateAddDays(this.datenow, 100);
    this.statisticsService.getGuildStatistics(this.datenow, this.dateTo);
    console.log(this.datenow);
    console.log(this.dateTo);
  }

}

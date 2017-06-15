import {Component, OnInit} from '@angular/core';
import {StatisticsService} from './statistics/statistics.service';
import {VolunteerService} from './volunteer/volunteer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  datenow = new Date(Date.now());
  dateTo: Date;

  title = 'app works!';

  constructor(private volunteerService: VolunteerService) {
    // Preload the volunteerservice
  }
  //
  // ngOnInit() {
  //   console.log(this.datenow);
  //   console.log(this.dateTo);
  //   this.dateTo = this.statisticsService.dateAddDays(this.datenow, 28);
  //   this.statisticsService.getGuildStatistics(this.datenow, this.dateTo);
  //
  // }
}


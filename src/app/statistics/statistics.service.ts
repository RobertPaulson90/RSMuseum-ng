import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {GuildStatistics, Stat} from '../shared/statistics.model';


@Injectable()
export class StatisticsService {
  guildStats: GuildStatistics[] = [];
  stats: Stat[] = [];
  stats2: Stat[] = [];
  barChartData: any[] = [];
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  dateLabels: string[] = [];

  constructor(private http: Http) {
  }

  getGuildStatistics(datefrom: Date, dateTo: Date) {
    this.guildStats = [];
    this.stats = [];
    this.stats2 = [];
    this.dateLabels = [];
    // Call Api to get data
    for (let i = 0; i <= 5; i++) {
      this.stats.push(new Stat(datefrom, i + 1, i));
    }
    // for (let i = 0; i <= 5; i++) {
    //   this.stats2.push(new Stat(dateTo, i + 2, i));
    // }
    this.guildStats.push(new GuildStatistics(this.stats, 1, 'laug 1'));
    this.guildStats.push(new GuildStatistics(this.stats2, 1, 'laug 2'));
    console.log(this.guildStats);
  }

  dateSubstractDays(date: Date, numberOfDays: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - numberOfDays);
    return newDate;
  }

  setDateLabels() {
    for (let j = 0; j <= this.guildStats[0].Stats.length - 1; j++) {
      console.log(this.dateLabels);
      this.dateLabels.push(this.guildStats[0].Stats[j].Date.getDate() + ' ' + this.monthNames[this.guildStats[0].Stats[j].Date.getUTCMonth()]);
    }

    return this.dateLabels;

  }

  // setBarChartData() {
  //   for (let j = 0; j <= this.guildStats[0].Stats.length - 1; j++) {
  //     console.log(this.dateLabels);
  //     this.barChartData.push(this.guildStats[0].Stats[j].TotalHours);
  //   }
  //
  //   return this.barChartData;
  // }


}

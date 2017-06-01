import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {GuildStatistics, Stat} from '../shared/statistics.model';
import {Subject} from 'rxjs/Subject';
import {BarChartData} from './barchartdata.model';


@Injectable()
export class StatisticsService {
  guildsStats: GuildStatistics[] = [];
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  barChartData: BarChartData[] = [];
  dateLabels: string[] = [];

  dateLabelsSubject = new Subject<string[]>();
  barChartDataSubject = new Subject<any>();

  constructor(private http: Http) {
  }

  createBarChartData() {
    this.barChartData = [];
    for (let i = 0; i <= this.guildsStats.length - 1; i++) {
      const barChart = new BarChartData();
      barChart.label = this.guildsStats[i].GuildName;
      barChart.data = [];
      for (let j = 0; j <= this.guildsStats[0].Stats.length - 1; j++) {
        barChart.data.push(this.guildsStats[i].Stats[j].TotalHours);
      }
      this.barChartData.push(barChart);
    }
    this.barChartDataSubject.next(this.barChartData);
  }



  getGuildStatistics(datefrom: Date, dateTo: Date) {
    const url = 'http://rsmuseummvc.azurewebsites.net/api/v2/statistics/' + datefrom.toISOString().substring(0, 10) + '/' + dateTo.toISOString().substring(0, 10);
    console.log(url);
    this.http.get(url)
      .map(
      (response: Response) => {
        console.log(response.json());
        this.guildsStats = response.json();
        this.setDateLabels();
        this.createBarChartData();
        // this.barChartDataSubject.next(this.guildsStats)
        // this.barChartDataSubject.next(this.)
        return response;
      }
    ).subscribe();
  }



  dateAddDays(date: Date, numberOfDays: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numberOfDays);
    return newDate;
  }

  setDateLabels() {
    // for (let j = 0; j <= this.guildsStats[0].Stats.length - 1; j++) {
    //   console.log(this.dateLabels);
    //   let day = this.guildsStats[0].Stats[j].Date;
    //   // "2017-05-28T00:00:00"
    //   day = day.substring(9, 2);
    //   const month = day.substring(6, 2);
    //   this.dateLabels.push(day + ' ' + this.monthNames[month]);
    // }
    // console.log('this.dateLabelsSubject.next(this.dateLabels)')
    // this.dateLabelsSubject.next(this.dateLabels);
  }
}


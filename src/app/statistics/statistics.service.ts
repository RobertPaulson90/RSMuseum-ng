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
  setDateLabels() {
    this.dateLabels = [];
    for (let j = 0; j <= this.guildsStats[0].Stats.length - 1; j++) {
      const dateString = this.guildsStats[0].Stats[j].Date
      const newDate = new Date(dateString);
      const day = newDate.getDate();
      const month = newDate.getUTCMonth();
      this.dateLabels.push(day + ' ' + this.monthNames[month]);
    }
    this.dateLabelsSubject.next(this.dateLabels);
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
}


import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticsService} from './statistics.service';
import {GuildStatistics} from '../shared/statistics.model';
import {BarChartData} from './barchartdata.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-data-view',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  dateFrom: Date;
  dateTo: Date;
  barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul'];
  barChartType = 'bar';
  barChartLegend = true;
  subscription: Subscription;

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData: any[] = [
    {data: [], label: 'Laug 1'},
    {data: [], label: 'Laug 2'},
  ];

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit() {
    this.barChartData = this.statisticsService.barChartData;
    this.subscription = this.statisticsService.dateLabelsSubject
      .subscribe(
        (dateLabel: string[]) => console.log(dateLabel),
        (error) => console.log('fejl'),
        () => console.log('complete')
      );

    this.statisticsService.barChartDataSubject
      .subscribe(
        (data: BarChartData[]) => {
          console.log(data)
          this.barChartData = data;
        },
        (error) => console.log('fejl'),
        () => console.log('complete')
      );
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  onDateSelected(date: Date) {
    this.dateFrom = date;
    this.dateTo = this.statisticsService.dateAddDays(this.dateFrom, 7);
    this.statisticsService.getGuildStatistics(this.dateFrom, this.dateTo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StatisticsService} from './statistics.service';

import {BarChartData} from './barchartdata.model';

@Component({
  selector: 'app-data-view',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @ViewChild('chart')  _chart;
  dateFrom: Date;
  dateTo: Date;
  barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul'];
  barChartType = 'bar';
  barChartLegend = true;

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData: any[] = [
    {data: [], label: 'Laug 1'},
    {data: [], label: 'Laug 2'},
    {data: [], label: 'Laug 3'},
    {data: [], label: 'Laug 4'},
    {data: [], label: 'Laug 5'}
  ];

  constructor(private statisticsService: StatisticsService) { }
  ngOnInit() {
    this.statisticsService.dateLabelsSubject
      .subscribe(
        (dateLabel: string[]) => this.test(dateLabel) ,
        (error) => console.log('fejl')
    );

    this.statisticsService.barChartDataSubject
      .subscribe(
        (data: BarChartData[]) => this.barChartData = data,
        (error) => console.log('fejl'),
        () => console.log('complete')
      );
  }

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  onDateSelected(date: Date) {
    this.dateFrom = date;
    this.dateTo = this.statisticsService.dateAddDays(this.dateFrom, 7);
    this.statisticsService.getGuildStatistics(this.dateFrom, this.dateTo);
  }

  test(stringarray: string[]) {
    this.barChartLabels = stringarray;
    this._chart.ngOnChanges();
    console.log(this.barChartLabels);
     // this.chart.ngOnChanges();
  }
}

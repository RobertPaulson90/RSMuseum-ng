import {Component, OnInit} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {StatisticsService} from './statistics.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  dateForm: Date;
  dateTo: Date;
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 0, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C'}
  ];

  constructor(private statisticsService: StatisticsService) {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  ngOnInit() {
  }


  onDateSelected(date: Date) {
    this.dateForm = date;
    this.dateTo = this.statisticsService.dateSubstractDays(this.dateForm, 28);
    console.log(this.dateForm);
    console.log(this.dateTo);
    this.statisticsService.getGuildStatistics(this.dateForm, this.dateTo);
    this.barChartLabels = this.statisticsService.setDateLabels();
  }
}

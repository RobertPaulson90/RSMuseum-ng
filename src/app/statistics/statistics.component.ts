import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-data-view',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private charts: ChartsModule) { }

  ngOnInit() {
  }

}

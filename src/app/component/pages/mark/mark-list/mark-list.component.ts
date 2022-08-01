import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-mark-list',
  templateUrl: './mark-list.component.html',
  styleUrls: ['./mark-list.component.scss']
})
export class MarkListComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = ['21/7/2022', '22/7/2022', '23/7/2022', '24/7/2022', '25/7/2022', '26/7/2022', '28/7/2022'];
  public lineChartType: ChartType = "line";
  public lineChartLegend = true;
  public lineChartData = [
    {data: [5, 10, 9, 3, 6, 5, 5], label: 'Toán'},
    {data: [8, 3, 5, 9, 6, 7, 8], label: 'Văn'},
    {data: [1, 5, 5, 8, 6, 9, 8], label: 'Anh'}
  ];
  ngOnInit(): void {
  }

}

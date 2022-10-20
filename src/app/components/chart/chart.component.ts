import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Stock',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Consumed',
            backgroundColor: '#FFA726',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

data = {
  labels: ['Discharged','Admitted','First Visit'],
  datasets: [
      {
          data: [300, 50, 100],
          backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726"
          ],
          hoverBackgroundColor: [
              "#64B5F6",
              "#81C784",
              "#FFB74D"
          ]
      }
  ]
};

  basicOptions: any;

  @Input()
  chartBar=true;
  constructor() { }

  ngOnInit(): void {
  }

}

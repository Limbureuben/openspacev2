import { Component,  AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements AfterViewInit{
  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['Reports', 'Users', 'Resolved Issues'],
        datasets: [{
          data: [120, 50, 80], // Example values
          backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0']
        }]
      }
    });
  }

}

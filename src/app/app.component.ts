import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // Import HttpClientModule here
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  data: any = {};

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>('http://localhost:4400/data')
      .subscribe(
        (response) => {
          this.data = response;
          console.log('Data received from server:', this.data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';
  title = 'frontend';
  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http.get<{ message: string }>('http://localhost:3000/api/message')
          .subscribe(response => this.message = response.message);
  }

}

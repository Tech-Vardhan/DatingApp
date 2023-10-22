import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  users : any;
  constructor(private http : HttpClient)
  {
    this.http.get("https://localhost:5000/api/User").subscribe({
      next : response => this.users = response,
      error : error => console.log(error),
      complete : () => console.log("Request Completed")
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { GetCurrent4chanService } from './GetCurrent4chan.service';

import { Http, } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Time404';
  constructor(private GetCurrent4chanService: GetCurrent4chanService,private http: Http) { }
ngOnInit(){
  alert("bla")
  // Make the HTTP request:
  this.http.get('http://a.4cdn.org/b/2.json').subscribe(res => console.log(res.json()))

  }
}

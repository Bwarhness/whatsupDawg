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
  constructor() {

  }
ngOnInit(){
  }
}

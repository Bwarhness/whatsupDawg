import { Component, OnInit } from '@angular/core';
import { GetCurrent4chanService } from './GetCurrent4chan.service';

import { Http, } from '@angular/http';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Time404';
  ready = this.chanService.Threads.length;
  constructor(private chanService:GetCurrent4chanService) {

  }
ngOnInit(){
  console.log(this.ready);
  }
  test(){
    console.log(this.ready);
  }
}

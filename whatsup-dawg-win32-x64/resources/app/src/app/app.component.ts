import { Component, OnInit } from '@angular/core';
import { GetCurrent4chanService } from './GetCurrent4chan.service';

import { Http, } from '@angular/http';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
import { BoardServiceService } from './board-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Time404';
  ready = false
  constructor(public chanService:GetCurrent4chanService, public boardService:BoardServiceService, public router:Router) {
    this.ready = true;
  }
  Change(){
    this.router.navigate(['Categories']);
  }
ngOnInit(){
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from '../models/category'
import { CategoryService } from '../category.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
currentCategory:Category;
CurrentVideo:any;
Videos:any;
skip:number = 0;
  constructor(  private route: ActivatedRoute,
    private router: Router, private CategoryService: CategoryService,private http:HttpClient) {

      document.onkeydown = function(e) {
          switch (e.keyCode) {
              case 37:
                  alert('left');

                  break;
              case 38:
                  alert('up');
                  break;
              case 39:
                  alert('right');
                  break;
              case 40:
                  alert('down');
                  break;
          }
      };
    }
next(){
  this.skip++;
  this.setvideo();
}
prev(){
  this.skip--;
  this.setvideo();
}

setvideo(){
  this.CurrentVideo = this.Videos[this.skip];
  var myVideo = document.getElementsByTagName('video')[0];
  myVideo.load();
  myVideo.play();
}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>("http://a.4cdn.org/gif/thread/"+id+".json").subscribe(res => {
    this.Videos =  res["posts"].filter(p => p["ext"] == ".webm");
    this.setvideo();
    console.log(this.CurrentVideo);
    });

  }

}

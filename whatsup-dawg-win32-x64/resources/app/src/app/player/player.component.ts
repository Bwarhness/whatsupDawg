import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from '../models/category'
import { CategoryService } from '../category.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import { BoardServiceService } from '../board-service.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
src:string;
currentCategory:Category;
CurrentVideo:any;
Videos:any;
seenVideos = [];
ready:boolean = false;
skip:number = 0;
  constructor(  private route: ActivatedRoute,
    private router: Router, private CategoryService: CategoryService,private http:HttpClient, public boardService:BoardServiceService) {
      
      var bla = this;
      window.onkeydown = function(e) {
          switch (e.keyCode) {
              case 37:
              case 65:
                  bla.prev();

                  break;
              case 38:
                  alert('up');
                  break;
              case 39:
              case 68:
                  bla.next();
                  break;
              case 40:
                  alert('down');
                  break;
          }
      };
    }
next(){
  this.seenVideos.push(this.CurrentVideo)  
  this.skip++;
  this.setvideo();
}
prev(){
  this.skip--;
  this.setvideo();
}

setvideo(){
  this.CurrentVideo = this.Videos[this.skip];

  if(this.CurrentVideo["filename"] == undefined)
    this.CurrentVideo["filename"] = "Sup"
  this.ready = true;
  var myVideo = document.getElementsByTagName('video')[0];
  this.src = "http://i.4cdn.org/"+ this.boardService.Board+"/"+this.CurrentVideo.tim+".webm"
  myVideo.load();
  myVideo.play();
}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://a.4cdn.org/"+ this.boardService.Board +"/thread/"+id+".json").toPromise().then(res => {
    this.Videos =  res["posts"].filter(p => p["ext"] == ".webm");
    this.setvideo();
    });
  }

}

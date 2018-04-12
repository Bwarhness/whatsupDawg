import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BoardServiceService } from './board-service.service';

@Injectable()
export class GetCurrent4chanService {
  Threads:any = [];
  constructor(private http: Http, private boardService:BoardServiceService) {

    this.getstuff();
  }
  getstuff(){
    this.Threads = [];
     this.http.get('//a.4cdn.org/'+ this.boardService.Board + '/catalog.json').toPromise().then(
       res => {
         var test = res.json();
        for (let i = 0; i < test.length; i++) {
          
                  for (let s = 0; s < test[i].threads.length; s++) {
                      this.Threads.push(test[i].threads[s]);
                  }
              }
              this.Threads = this.Threads.sort(function(a, b){
              return b.replies-a.replies
              })
       }
     )
  }

}
interface Page {
  Page:number;
  threads:threads[];
}
interface threads{
  com:string;
}

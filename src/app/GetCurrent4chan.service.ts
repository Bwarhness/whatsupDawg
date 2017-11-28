import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GetCurrent4chanService {
  Threads:any = [];
  constructor(private http: Http) {
    let promise = new Promise((resolve, reject) => {
      //TODO
    });
    var bla = false
     this.http.get('http://a.4cdn.org/wsg/catalog.json').toPromise().then(
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
     console.log(this.Threads)

  }
  GetStuff(){

    let promise = new Promise((resolve, reject) => {
      //TODO
    });
    var bla = false
     this.http.get('http://a.4cdn.org/wsg/catalog.json').toPromise().then(
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
     console.log(this.Threads)
    return promise;
    
  }
}
interface Page {
  Page:number;
  threads:threads[];
}
interface threads{
  com:string;
}

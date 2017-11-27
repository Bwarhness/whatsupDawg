import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
@Injectable()
export class GetCurrent4chanService {
  Stuff:any;

  constructor(private http: Http) {
  }
  GetStuff(){
    var bla = false
     this.http.get('http://a.4cdn.org/gif/catalog.json').subscribe(res => {
      this.Stuff = res.json();
      bla =  true
      }, err => {
        bla = false
      }
    );
    return bla;
  }
}

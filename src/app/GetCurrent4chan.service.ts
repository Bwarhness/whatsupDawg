import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http,Headers } from '@angular/http';
@Injectable()
export class GetCurrent4chanService {
  Stuff:any;

  constructor(private http: Http) {
    // Make the HTTP request:
    const headers = new Headers({'Access-Control-Allow-Origin':"*"})
    this.http.get('http://a.4cdn.org/gif/catalog.json').subscribe(res => {
    this.Stuff = res.json();
    });
  }
  returnStuff():any{
    return this.Stuff;
  }
}

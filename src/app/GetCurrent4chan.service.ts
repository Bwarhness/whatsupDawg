import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
@Injectable()
export class GetCurrent4chanService {
  Stuff:any;

  constructor(private http: Http) {
    // Make the HTTP request:
    const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', '*');

    let options = new RequestOptions({ headers: headers });
    this.http.get('http://a.4cdn.org/gif/catalog.json',options).subscribe(res => {
    this.Stuff = res.json();
    });
  }
}

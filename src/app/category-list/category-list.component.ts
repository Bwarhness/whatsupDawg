import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category'
import { CategoryService } from '../category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
categories:Category[];
Pages:Page[];
Stuff:any;
Threads:any = [];
  constructor(private categoryService: CategoryService, private http:HttpClient) { }

  ngOnInit() {
    // Make the HTTP request:
    this.http.get<Page[]>("http://a.4cdn.org/gif/catalog.json").subscribe(res => {
    this.Pages =  res;
    for (let i = 0; i < this.Pages.length; i++) {

        for (let s = 0; s < this.Pages[i].threads.length; s++) {
            this.Threads.push(this.Pages[i].threads[s]);
        }
    }
    this.Threads = this.Threads.sort(function(a, b){
    return b.replies-a.replies
    })
    console.log(this.Threads);
    console.log(this.Pages[0])
    });
    this.categories = this.categoryService.getCategories();
  }

}
interface Page {
  Page:number;
  threads:threads[];
}
interface threads{
  com:string;
}

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

  }

}
interface Page {
  Page:number;
  threads:threads[];
}
interface threads{
  com:string;
}

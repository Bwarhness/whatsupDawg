import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { GetCurrent4chanService } from '../GetCurrent4chan.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(public categoryService: GetCurrent4chanService, private http:HttpClient) { 
  }

  ngOnInit() {

  }

}


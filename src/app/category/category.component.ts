import { Component, OnInit , Input} from '@angular/core';
import { Category } from '../models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
@Input() selectedCategory;
Title:string;
  constructor() { }

  ngOnInit() {
    if (this.selectedCategory.sub === undefined && this.selectedCategory.com === undefined) {
    this.Title = "no text";

    }
    else if (this.selectedCategory.sub === undefined)
    {
    this.Title = this.selectedCategory.com;
    }
    else{
    this.Title = this.selectedCategory.sub;
    
    }
  }

}

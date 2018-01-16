import { Component, OnInit , Input} from '@angular/core';
import { Category } from '../models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
@Input() selectedCategory;
  constructor() { }

  ngOnInit() {
    if (this.selectedCategory.sub === undefined) {
      if(this.selectedCategory.com === undefined) {
        this.selectedCategory.sub = "no text";

      }
      else {
        this.selectedCategory.sub = this.selectedCategory.com.substring(0, 50);
      }

    }
  }

}

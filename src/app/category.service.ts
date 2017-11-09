import { Injectable } from '@angular/core';
import {Category} from './models/category'
@Injectable()
export class CategoryService {
    categories:Category[];

    getCategories(){
        console.log(this.categories)
        return this.categories;
    }
    getSingleCategory(id) {
      return this.categories.find(p => p.id == + id);
    }
}

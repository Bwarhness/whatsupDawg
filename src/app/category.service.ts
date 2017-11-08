import { Injectable } from '@angular/core';
import {Category} from './models/category'
@Injectable()
export class CategoryService {
    categories:Category[] = [  { id: 11, name: 'Mr. Nice', elementCount: 2 },
  { id: 11, name: 'Mr. Nice', elementCount: 2 },
  { id: 12, name: 'Mr. Not Nice', elementCount: 5 },
  { id: 13, name: 'Mr. Awesome', elementCount: 10 },
  { id: 14, name: 'Mr. Fuck you', elementCount: 124 }]

    getCategories(){
        console.log(this.categories)
        return this.categories;
    }
    getSingleCategory(id) {
      return this.categories.find(p => p.id == + id);
    }
}

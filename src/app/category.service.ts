import { Injectable } from '@angular/core';
import {Category} from './models/category'
@Injectable()
export class CategoryService {
    categories:Category[] = [  { id: 11, name: 'Mr. Nice', elementCount: 2 }]

    getCategories(){
        console.log(this.categories)
        return this.categories;
    }
}
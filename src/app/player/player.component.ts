import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from '../models/category'
import { CategoryService } from '../category.service'

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
currentCategory:Category;
skip:number = 0;
  constructor(  private route: ActivatedRoute,
    private router: Router, private CategoryService: CategoryService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    var res = this.CategoryService.getSingleCategory(id);
    this.currentCategory = res;
    console.log(this.currentCategory);
  }

}

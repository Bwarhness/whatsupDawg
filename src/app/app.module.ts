import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryService } from './category.service';

const appRoutes: Routes = [
  { path: 'Categories', component: CategoryListComponent },
  { path: 'Player/:id',      component: PlayerComponent },
  { path: '',
    redirectTo: '/Categories',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    CategoryListComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

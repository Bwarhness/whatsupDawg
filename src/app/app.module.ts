import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryService } from './category.service';
import { GetCurrent4chanService } from './GetCurrent4chan.service';
import { HttpClientModule } from '@angular/common/http';
import { Http,HttpModule} from '@angular/http';
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
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [CategoryService,GetCurrent4chanService],
  bootstrap: [AppComponent]
})
export class AppModule { }

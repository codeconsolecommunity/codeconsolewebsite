import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent}
];
@NgModule({
 exports: [RouterModule],
 imports : [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

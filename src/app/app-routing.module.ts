import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DeleteComponent } from './delete/delete.component';
import { NotExists404Component } from './not-exists404/not-exists404.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddComponent },
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'ingredient', component: IngredientComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '404', component: NotExists404Component },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

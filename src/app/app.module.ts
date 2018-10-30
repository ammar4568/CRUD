import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientCategoryComponent } from './ingredient-category/ingredient-category.component';
import { DeleteComponent } from './delete/delete.component';
import { NotExists404Component } from './not-exists404/not-exists404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AddComponent,
    HomeComponent,
    CategoryComponent,
    IngredientComponent,
    IngredientCategoryComponent,
    DeleteComponent,
    NotExists404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

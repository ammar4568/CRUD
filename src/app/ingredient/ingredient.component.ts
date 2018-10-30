import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Ingredient { ingredientName: string; ingredientCategoryName: string; portionSize: string; }
interface Category { categoryName: string; }
interface Test { ingredientName: string; ingredientCategoryName: Category; portionSize: string; }

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  private ingredientCollection: AngularFirestoreCollection<Ingredient>;
  ingredientList: Observable<Ingredient[]>;
  categoriesList: Ingredient[] = [];
  categoriesList2: Ingredient[] = [];

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.ingredientCollection = this.afs.collection<Ingredient>('ingredients');
    this.ingredientList = this.ingredientCollection.valueChanges();
    this.afs.collection<Ingredient>('ingredients').valueChanges().subscribe((items) => {
      items.map(item => {
        // console.log(item);
        // this.categoriesList2.push(item);
        this.categoriesList.push(item);
        // let i = 0;
        this.afs.doc<Category>(`categories/${item.ingredientCategoryName}`).
          valueChanges().subscribe((items2) => {
            // console.log(items2.categoryName);
            // console.log(i);
            // items2.map((item2) => {
            // this.categoriesList[i].ingredientCategoryName = items2.categoryName;
            // i++;
            //   console.log(this.categoriesList);

            // })
          });
      });
    });
  }

  async getCategoryName(catName: any) {
    // console.log(this.categoriesList[0]);
    // this.ingredientList.subscribe(item => { console.log(item); });
    // console.log(catName);
    // console.log(this.afs.collection('categories')
    //   .doc(catName._key.path.segments[6]).valueChanges());
    // console.log(catName);
    // return 'Processing';
    // return this.afs.collection('categories')
    // .doc(catName._key.path.segments[6]).valueChanges();
  }

}

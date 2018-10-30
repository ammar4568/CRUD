import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Category { categoryName: string; }

@Component({
  selector: 'app-ingredient-category',
  templateUrl: './ingredient-category.component.html',
  styleUrls: ['./ingredient-category.component.css']
})
export class IngredientCategoryComponent implements OnInit {

  @Input() categoryRef;
  constructor(private afs: AngularFirestore) { }

  private categoryCollection: AngularFirestoreCollection<Category>;
  categoryList: Observable<Category[]>;
cat = null;
  category;

  ngOnInit() {
    // console.log(this.categoryRef);
    this.category = this.afs.collection('categories').doc(this.categoryRef).valueChanges();
    this.afs.collection('categories').doc(this.categoryRef).valueChanges().subscribe(item => {
      console.log(item);
      this.cat = item;
    });
  }

}

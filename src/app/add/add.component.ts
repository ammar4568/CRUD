import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Category { categoryName: string; }
interface Ingredient { ingredientName: string; ingredientCategoryName: string; portionSize: string; }

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  loadingCategory = false;
  successCategory = false;
  loadingIngredient = false;
  successIngredient = false;

  categoryForm: FormGroup;
  ingredientForm: FormGroup;

  private categoryCollection: AngularFirestoreCollection<Category>;
  categoryList: Observable<Category[]>;


  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryName: ''
    });
    this.categoryCollection = this.afs.collection<Category>('categories');
    this.categoryList = this.categoryCollection.valueChanges();
    // const categories = this.categoryList.forEach((cat) => cat);
    this.ingredientForm = this.fb.group({
      ingredientCategoryName: '',
      portionSize: '',
      ingredientName: ''
    });
  }

  async addCategory() {
    // console.log(this.categoryForm.value.categoryName);
    if (this.categoryForm.value.categoryName === '') {
      return;
    }
    this.loadingCategory = true;

    const formValue = this.categoryForm.value;

    try {
      await this.afs.collection('categories').add(formValue);
      this.successCategory = true;
    } catch (err) {
      console.error(err);
    }
    this.loadingCategory = false;
  }

  async addIngredients() {
    // this.categoryCollection.valueChanges().pipe(
    //   map(actions => actions.map(a => {
    //     console.log(a);
    //   }))
    // );
    /* this.categoryList.pipe((category: Category[]) => {
      console.log(category);
    });
 */

    // console.log(this.ingredientForm.value);
    // if (this.ingredientForm.value.ingredientCategoryName === '') {
    //   // Get First Element
    //   // this.ingredientForm.value.ingredientCategoryName = this.categoryList
    // } else
    if (
      this.ingredientForm.value.ingredientCategoryName.portionSize === '' ||
      this.ingredientForm.value.ingredientCategoryName.ingredientName === '') {
      // console.log('Not');
      return;
    }
    this.loadingIngredient = true;

    const formValue = this.ingredientForm.value;

    try {
      await this.afs.collection('ingredients').add(formValue);
      this.successCategory = true;
    } catch (err) {
      console.error(err);
    }
    this.loadingIngredient = false;
  }
}

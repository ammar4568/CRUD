import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

interface Category { name: string; }


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categoryCollection: AngularFirestoreCollection<Category>;
  categoryList: Observable<Category[]>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.categoryCollection = this.afs.collection<Category>('categories');
    this.categoryList = this.categoryCollection.valueChanges();
  }

}

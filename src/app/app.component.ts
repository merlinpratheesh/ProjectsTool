
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AngularFirestoreCollection ,AngularFirestore} from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


export interface collectiondoc{
  fruits: string[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;
  subAuth: Subscription;
  users$: Observable<string[]>;

  Testcollection: collectiondoc[]=
  [{
    fruits : ['Apple', 'Orange', 'Banana']

   }
    ];
  fruits: any;
  constructor(){
    const users$ = of(this.Testcollection);
        
    users$.subscribe(
      data => {
        console.log(data);
      },

      error => console.log(error),
      () => console.log('Completed'),
    );

  
}


    ngOnInit( ) {  
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );  
    }
  
    private _filter(value: string): string[] 
    {
      const filterValue = value.toUpperCase();
      console.log('myarray', this.Testcollection[0].fruits)
      return this.Testcollection[0].{"users$ | async"}.filter(fruit => fruit.toUpperCase().includes(filterValue));
    }
  
  }
ngOnDestroy() {
 this.subAuth.unsubscribe();
}
    }
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

export interface collectiondoc{
  fruits: string; 
 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apitestertesting';

  Testcollection: collectiondoc=
  {
    fruits : 'Apple'

   }
  constructor(){
    const names$ = of(this.Testcollection);
    names$.subscribe(
      data1 => {
        console.log(data1);
      },

      error => console.log(error),
      () => console.log('Completed'),
    );

  }
}

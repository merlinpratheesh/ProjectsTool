import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';



export interface Food{
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apitestertesting';


  foods: Food = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(){
    const users$ = of(this.foods);
        
    users$.subscribe(
      data => {
        console.log(data);
      },

      error => console.log(error),
      () => console.log('Completed'),
    );

  }
}

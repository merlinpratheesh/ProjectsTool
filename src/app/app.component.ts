import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apitestertesting';

  
    myControl = new FormControl();
    options: String[] = ['One', 'Two', 'Three'];
  
  constructor(){
    const users$ = of(this.options);
        
    users$.subscribe(
      data => {
        console.log(data);
      },

      error => console.log(error),
      () => console.log('Completed'),
    );

  }
}

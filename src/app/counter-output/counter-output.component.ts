import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectCountDouble } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  countDouble$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    //this.count$ = store.select('counter');
    this.count$ = store.select(selectCount);
    this.countDouble$ = store.select(selectCountDouble);
  }
}

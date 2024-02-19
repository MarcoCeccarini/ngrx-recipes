import { createAction, props } from '@ngrx/store';

export const init = createAction(
  '[Counter] init'
);

export const set = createAction(
  '[Counter] set',
  props<{value: number}>()
);

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
);

export const decrement = createAction(
  '[counter] decrement',
   props<{value: number}>()
);

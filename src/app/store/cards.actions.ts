import { createAction, props } from '@ngrx/store';
import { Option } from '../models/option.model';

export const loadCards = createAction(
  '[Cards] Load Cards'
);

export const loadCardsSuccess = createAction(
  '[Cards] Load Cards Success',
  props<{ cards: Option[] }>()
);

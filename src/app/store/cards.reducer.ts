import { createReducer, on } from '@ngrx/store';
import { Option } from '../models/option.model';
import { loadCards, loadCardsSuccess } from './cards.actions';

export interface CardsState {
  cards: Option[]
}

export const initialState: CardsState = {
  cards: []
}

export const reducers = createReducer(
  initialState,
  on(loadCards, (state) => ({
    ...state
  })),
  on(loadCardsSuccess, (state, action) => ({
    ...state,
    cards: action.cards
  }))
);

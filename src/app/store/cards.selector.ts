import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectFeature = (state: AppState) => state.cards;

export const selectCards = createSelector(
  selectFeature,
  (state) => state.cards
);



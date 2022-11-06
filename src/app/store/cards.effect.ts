import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { CardsService } from '../services/cards.service';
import { loadCards, loadCardsSuccess } from './cards.actions';

@Injectable()
export class CardsEffect {

  constructor (
    private actions$: Actions,
    private service: CardsService
  ) {}

  getCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCards),
      mergeMap(() => {
        return this.service
          .getCards()
          .pipe(
            map(cards => loadCardsSuccess({ cards }))
          )
      })
    )
  );
}

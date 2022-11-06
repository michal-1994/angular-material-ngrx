import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Option } from 'src/app/models/option.model';
import { AppState } from 'src/app/store/app.state';
import { loadCards } from 'src/app/store/cards.actions';
import { CardsState } from 'src/app/store/cards.reducer';
import { selectCards } from 'src/app/store/cards.selector';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards$: Observable<Option[]>;

  constructor (
    private store: Store<AppState>
  ) {
    this.cards$ = this.store.pipe(select(selectCards));
  }

  ngOnInit (): void {
    this.store.dispatch(loadCards());
  }

}

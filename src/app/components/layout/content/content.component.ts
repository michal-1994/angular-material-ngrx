import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/option.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards?: Option[];

  constructor (
    private cardsService: CardsService
  ) { }

  ngOnInit (): void {
    this.cardsService.getCards().subscribe(value => {
      this.cards = value;
    });
  }

}

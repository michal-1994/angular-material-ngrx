import { Component, OnInit } from '@angular/core';
import { CARDS } from './cards.mock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit(): void {
  }

}

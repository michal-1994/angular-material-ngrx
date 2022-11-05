import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from './aside.mock';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  categories?: string[] = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}

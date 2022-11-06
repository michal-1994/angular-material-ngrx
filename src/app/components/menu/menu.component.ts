import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/models/option.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() options?: Option[] | null;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor () {}

  changeTheme (themeToSet: any) {
    this.themeChange.emit(themeToSet);
  }

}

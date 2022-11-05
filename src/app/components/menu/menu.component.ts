import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Option } from '../layout/header/option.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() options?: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private themeService: ThemeService
  ) {}

  changeTheme(themeToSet: any) {
    this.themeChange.emit(themeToSet);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from 'src/app/models/option.model';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  options$: Observable<Option[]> = this.themeService.getThemeOptions();

  constructor (
    private readonly themeService: ThemeService
  ) { }

  ngOnInit () {
    this.themeService.setTheme("indigo-pink");
  }

  themeChangeHandler (themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }

}

import { Injectable } from "@angular/core";

import { StyleManagerService } from "./style-manager.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Option } from "../models/option.model";

@Injectable()
export class ThemeService {

  constructor (
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) { }

  getThemeOptions (): Observable<Option[]> {
    return this.http.get<Array<Option>>("assets/options.json");
  }

  setTheme (themeToSet: any) {
    this.styleManager.setStyle(
      "theme",
      `materialThemes/${themeToSet}.css`
    );
  }
}

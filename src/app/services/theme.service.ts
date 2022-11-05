import { Injectable } from "@angular/core";

import { StyleManagerService } from "./style-manager.service";
import { Option } from "../components/layout/header/option.model";
import { OPTIONS } from "../components/layout/header/options.mock";

@Injectable()
export class ThemeService {
  constructor(
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Option[] {
    return OPTIONS;
  }

  setTheme(themeToSet: any) {
    this.styleManager.setStyle(
      "theme",
      `./node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}

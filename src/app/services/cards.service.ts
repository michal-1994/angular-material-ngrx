import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Option } from "../models/option.model";

@Injectable()
export class CardsService {

  constructor (
    private http: HttpClient
  ) { }

  getCards (): Observable<Option[]> {
    return this.http.get<Array<Option>>("assets/cards.json");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filter } from '../models/filter';

interface ResponseObject {
  drinks: Filter[];
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  constructor(private http: HttpClient) {}

  getItems(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.url);
  }
}

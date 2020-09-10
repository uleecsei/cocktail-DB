import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

interface ResponseObject {
  drinks: Card[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.url}?c=${name}`);
  }
}

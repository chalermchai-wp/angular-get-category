import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<any>('https://api.publicapis.org/categories');
  }
}

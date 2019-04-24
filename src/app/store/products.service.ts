import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return of([]);
  }
}

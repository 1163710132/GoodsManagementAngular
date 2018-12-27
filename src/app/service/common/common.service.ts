import { Injectable } from '@angular/core';
import {CommonApi} from '../../api/common.api';
import {Observable} from 'rxjs';
import {Goods} from '../../entity/goods';
import {Shelf} from '../../entity/shelf';
import {Stock} from '../../entity/stock';
import {Store} from '../../entity/store';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements CommonApi {

  constructor(private http: HttpClient) { }

  listGoods(): Observable<Goods[]> {
    return this.http.get<Goods[]>('/api/common/listGoods');
  }

  listShelves(): Observable<Shelf[]> {
    return this.http.get<Shelf[]>('/api/common/listShelves');
  }

  listStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/common/listStocks');
  }

  listStores(): Observable<Store[]> {
    return this.http.get<Store[]>('/api/common/listStores');
  }
}

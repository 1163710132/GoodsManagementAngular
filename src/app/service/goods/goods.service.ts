import { Injectable } from '@angular/core';
import {GoodsApi} from '../../api/goods.api';
import {Observable} from 'rxjs';
import {GoodsStorage} from '../../entity/goods-storage';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService implements GoodsApi {

  constructor(private http: HttpClient) { }

  createGoodsStorage(): Observable<GoodsStorage> {
    return this.http.get<GoodsStorage>('/api/goods/createGoodsStorage');
  }
}

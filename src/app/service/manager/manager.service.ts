import { Injectable } from '@angular/core';
import {ManagerApi} from '../../api/manager.api';
import {Observable} from 'rxjs';
import {Goods} from '../../entity/goods';
import {Shelf} from '../../entity/shelf';
import {Stock} from '../../entity/stock';
import {Store} from '../../entity/store';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService implements ManagerApi {

  constructor(private http: HttpClient) { }

  createGoods(): Observable<Goods> {
    return this.http.get<Goods>('/api/manager/createGoods');
  }

  createShelf(storeId: number): Observable<Shelf> {
    return this.http.get<Shelf>('/api/manager/createShelf', {
      params: {
        storeId: String(storeId)
      }
    });
  }

  createStock(storeId: number): Observable<Stock> {
    return this.http.get<Stock>('/api/manager/createStock', {
      params: {
        storeId: String(storeId)
      }
    });
  }

  createStore(): Observable<Store> {
    return this.http.get<Store>('/api/manager/createStore');
  }

  modifyGoods(id: number, name: string, description: string): Observable<Goods> {
    return this.http.get<Goods>('/api/manager/modifyGoods', {
      params: {
        id: String(id),
        name: String(name),
        description: String(description)
      }
    });
  }

  modifyShelf(id: number, name: string, description: string): Observable<Shelf> {
    return this.http.get<Shelf>('/api/manager/modifyShelf', {
      params: {
        id: String(id),
        name: String(name),
        description: String(description)
      }
    });
  }

  modifyStock(id: number, name: string, description: string): Observable<Stock> {
    return this.http.get<Stock>('/api/manager/modifyStock', {
      params: {
        id: String(id),
        name: String(name),
        description: String(description)
      }
    });
  }

  modifyStore(id: number, name: string, description: string): Observable<Store> {
    return this.http.get<Store>('/api/manager/modifyStore', {
      params: {
        id: String(id),
        name: String(name),
        description: String(description)
      }
    });
  }

}

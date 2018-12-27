import {Observable} from 'rxjs';
import {Store} from '../entity/store';
import {Shelf} from '../entity/shelf';
import {Stock} from '../entity/stock';
import {Goods} from '../entity/goods';

export interface ManagerApi {
  createStore(): Observable<Store>;
  createShelf(storeId: number): Observable<Shelf>;
  createStock(storeId: number): Observable<Stock>;
  createGoods(): Observable<Goods>;
  modifyStore(id: number, name: string, description: string): Observable<Store>;
  modifyShelf(id: number, name: string, description: string): Observable<Shelf>;
  modifyStock(id: number, name: string, description: string): Observable<Stock>;
  modifyGoods(id: number, name: string, description: string): Observable<Goods>;
}

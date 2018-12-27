import {Observable} from 'rxjs';
import {Store} from '../entity/store';
import {Shelf} from '../entity/shelf';
import {Stock} from '../entity/stock';
import {Goods} from '../entity/goods';
import {ShelfItem} from '../entity/shelf-item';
import {StockItem} from '../entity/stock-item';

export interface CommonApi {
  listStores(): Observable<Store[]>;
  listShelves(): Observable<Shelf[]>;
  listStocks(): Observable<Stock[]>;
  listGoods(): Observable<Goods[]>;
}

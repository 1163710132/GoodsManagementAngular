import {Observable} from 'rxjs';
import {StockItem} from '../entity/stock-item';
import {ShelfItem} from '../entity/shelf-item';

export interface InventoryApi {
  listStockItems(stock: number): Observable<StockItem[]>;
  listShelfItems(shelf: number): Observable<ShelfItem[]>;
  getShelfItemById(id: number): Observable<ShelfItem>;
  getStockItemById(id: number): Observable<StockItem>;
  createShelfItem(shelf: number, goods: number, price: number): Observable<ShelfItem>;
  createStockItem(stock: number, goods: number, price: number): Observable<StockItem>;
}

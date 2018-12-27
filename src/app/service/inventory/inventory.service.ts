import { Injectable } from '@angular/core';
import {InventoryApi} from '../../api/inventory.api';
import {ShelfItem} from '../../entity/shelf-item';
import {Observable} from 'rxjs';
import {StockItem} from '../../entity/stock-item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService implements InventoryApi {

  constructor(private http: HttpClient) { }

  listShelfItems(shelf: number): Observable<ShelfItem[]> {
    return this.http.get<ShelfItem[]>('/api/inventory/listShelfItems', {
      params: {
        shelf: String(shelf)
      }
    });
  }

  listStockItems(stock: number): Observable<StockItem[]> {
    return this.http.get<StockItem[]>('/api/inventory/listStockItems', {
      params: {
        stock: String(stock)
      }
    });
  }

  getShelfItemById(id: number): Observable<ShelfItem> {
    return this.http.get<ShelfItem>('/api/inventory/getShelfItemById', {
      params: {
        id: String(id)
      }
    });
  }

  getStockItemById(id: number): Observable<StockItem> {
    return this.http.get<StockItem>('/api/inventory/getStockItemById', {
      params: {
        id: String(id)
      }
    });
  }

  createShelfItem(shelf: number, goods: number, price: number): Observable<ShelfItem> {
    return this.http.get<ShelfItem>('/api/inventory/createShelfItem', {
      params: {
        shelf: String(shelf),
        goods: String(goods),
        price: String(price)
      }
    });
  }

  createStockItem(stock: number, goods: number, price: number): Observable<StockItem> {
    return this.http.get<StockItem>('/api/inventory/createStockItem', {
      params: {
        stock: String(stock),
        goods: String(goods),
        price: String(price)
      }
    });
  }
}

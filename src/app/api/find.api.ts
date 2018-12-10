import {PurchaseOrder} from '../entity/purchase-order';
import {StockSupply} from '../entity/stock-supply';
import {Observable} from 'rxjs';

export interface FindApi {
  findPurchaseById(id: number): Observable<PurchaseOrder>;
  findStockSupplyById(id: number): Observable<StockSupply>;
}

import {PurchaseOrder} from '../entity/purchase-order';
import {Observable} from 'rxjs';

export interface BuyerApi {
  purchase(purchase: PurchaseOrder): Observable<PurchaseOrder>;
  findPurchaseById(id: number): Observable<PurchaseOrder>;
}

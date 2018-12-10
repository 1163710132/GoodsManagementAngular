import { Injectable } from '@angular/core';
import {FindApi} from '../../api/find.api';
import {PurchaseOrder} from '../../entity/purchase-order';
import {StockSupply} from '../../entity/stock-supply';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindService implements FindApi {

  constructor(private http: HttpClient) { }

  findPurchaseById(id: number): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>('/api/find/purchaseOrder',
      {
        'params': {
          'id': id.toString()
        }
      });
  }

  findPurchaseSetById(id: number): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>('/api/find/purchaseOrderSet',
      {
        'params': {
          'id': id.toString()
        }
      });
  }

  findStockSupplyById(id: number): Observable<StockSupply> {
    return this.http.get<StockSupply>('/api/find/stockSupply',
      {
        'params': {
          'id': id.toString()
        }
      });
  }
}

import { Injectable } from '@angular/core';
import {BuyerApi} from '../../api/buyer.api';
import {Observable} from 'rxjs';
import {PurchaseOrder} from '../../entity/purchase-order';
import {HttpClient} from '@angular/common/http';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class BuyerService implements BuyerApi {

  constructor(private http: HttpClient) { }

  findPurchaseById(id: number): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>('/api/buyer/findPurchaseById', {
      'params': {
        'id': id.toString()
      }
    });
  }

  purchase(purchase: PurchaseOrder): Observable<PurchaseOrder> {
    const params = {};
    for (const key in purchase) {
      if (purchase[key] != null) {
        params[key] = String(purchase[key]);
      }
    }
    console.log(JSON.stringify(params));
    return this.http.get<PurchaseOrder>('/api/buyer/purchase', {
      'params': params,
      'responseType': 'json'
    });
  }
}

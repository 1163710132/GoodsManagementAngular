import { Injectable } from '@angular/core';
import {AffairApi} from '../../api/affair.api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PartOfAffair} from '../../entity/constraint/part-of-affair';
import {Affair} from '../../entity/affair';
import {Purchase} from '../../entity/purchase';
import {Sale} from '../../entity/sale';
import {MoneyTrans} from '../../entity/money-trans';
import {GoodsTrans} from '../../entity/goods-trans';
import {Cart} from '../../entity/cart';

@Injectable({
  providedIn: 'root'
})
export class AffairService implements AffairApi {

  constructor(private http: HttpClient) { }

  allParts(affair: number): Observable<PartOfAffair[]> {
    return this.http.get<PartOfAffair[]>('/api/affair/allParts', {
      params: {
        affair: String(affair)
      }
    });
  }

  createAffair(): Observable<Affair> {
    return this.http.get<Affair>('/api/affair/createAffair', {
      params: {}
    });
  }

  createGoodsTrans(affair: number, goods: number, amount: number, source: number, target: number): Observable<GoodsTrans> {
    return this.http.get<GoodsTrans>('/api/affair/createGoodsTrans', {
      params: {
        affair: String(affair),
        goods: String(goods),
        amount: String(amount),
        source: String(source),
        target: String(target)
      }
    });
  }

  createMoneyTrans(affair: number, total: number, source: number, target: number): Observable<MoneyTrans> {
    return this.http.get<MoneyTrans>('/api/affair/createMoneyTrans', {
      params: {
        affair: String(affair),
        total: String(total),
        source: String(source),
        target: String(target)
      }
    });
  }

  createPurchase(affair: number, supplier: number): Observable<Purchase> {
    return this.http.get<Purchase>('/api/affair/createPurchase', {
      params: {
        affair: String(affair),
        supplier: String(supplier)
      }
    });
  }

  createSale(affair: number, customer: number): Observable<Sale> {
    return this.http.get<Sale>('/api/affair/createSale', {
      params: {
        affair: String(affair),
        customer: String(customer)
      }
    });
  }

  createCart(affair: number): Observable<Cart> {
    return this.http.get<Cart>('/api/affair/createCart', {
      params: {
        affair: String(affair)
      }
    });
  }
}

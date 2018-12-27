import {Affair} from '../entity/affair';
import {Purchase} from '../entity/purchase';
import {Sale} from '../entity/sale';
import {GoodsTrans} from '../entity/goods-trans';
import {Observable} from 'rxjs';
import {MoneyTrans} from '../entity/money-trans';
import {PartOfAffair} from '../entity/constraint/part-of-affair';
import {Cart} from '../entity/cart';

export interface AffairApi {
  createAffair(): Observable<Affair>;
  createPurchase(affair: number, supplier: number): Observable<Purchase>;
  createSale(affair: number, customer: number): Observable<Sale>;
  createGoodsTrans(affair: number, goods: number, amount: number, source: number, target: number): Observable<GoodsTrans>;
  createMoneyTrans(affair: number, total: number, source: number, target: number): Observable<MoneyTrans>;
  allParts(affair: number): Observable<PartOfAffair[]>;
  createCart(affair: number): Observable<Cart>;
}


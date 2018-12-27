import {Observable} from 'rxjs';
import {Supplier} from '../entity/supplier';
import {Customer} from '../entity/customer';
import {Buyer} from '../entity/buyer';

export interface UnitApi {
  findSupplier(id: number): Observable<Supplier>;
  findCustomer(id: number): Observable<Customer>;
  findBuyerByAccountId(id: number): Observable<Buyer>;
}

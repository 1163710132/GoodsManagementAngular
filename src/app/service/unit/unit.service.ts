import { Injectable } from '@angular/core';
import {UnitApi} from '../../api/unit.api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../entity/customer';
import {Supplier} from '../../entity/supplier';
import {Buyer} from '../../entity/buyer';

@Injectable({
  providedIn: 'root'
})
export class UnitService implements UnitApi {

  constructor(private http: HttpClient) { }

  findCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>('/api/unit/findCustomer', {
      params: {
        id: String(id)
      }
    });
  }

  findSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>('/api/unit/findSupplier', {
      params: {
        id: String(id)
      }
    });
  }

  findBuyerByAccountId(id: number): Observable<Buyer> {
    return this.http.get<Buyer>('/api/unit/findBuyerByAccountId', {
      params: {
        accountId: String(id)
      }
    });
  }
}

import {Account} from '../entity/account';
import {Observable} from 'rxjs';

export interface AccountApi {
  // block api
  login(account: Account): Observable<number>;
  logout(): Observable<void>;
  uid(): Observable<number>;
  register(account: Account): Observable<number>;
}

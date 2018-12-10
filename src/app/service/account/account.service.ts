import {Injectable} from '@angular/core';
import {AccountApi} from '../../api/account.api';
import {Account} from '../../entity/account';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements AccountApi {

  constructor(public http: HttpClient) {
  }


  login(account: Account): Observable<number> {
    return this.http.get<number>('/api/account/login',
      {
        'params': {
          'username': account.username,
          'password': account.password
        }
      });
  }

  logout(): Observable<void> {
    return this.http.get<void>('/api/logout');
  }

  uid(): Observable<number> {
    return this.http.get<number>('/api/account/uid');
  }

  username(): Observable<string> {
    return this.http.get('/api/account/username', {'responseType': 'text'});
  }

  register(account: Account): Observable<number> {
    return this.http.get<number>('/api/account/register',
      {
        'params': {
          'username': account.username,
          'password': account.password
        }
      });
  }
}

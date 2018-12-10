import {StockSupply} from '../entity/stock-supply';
import {Observable} from 'rxjs';

export interface StockmanApi {
  supply(supply: StockSupply): Observable<StockSupply>;
}

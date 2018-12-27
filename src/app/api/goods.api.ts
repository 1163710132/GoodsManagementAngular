import {Observable} from 'rxjs';
import {GoodsStorage} from '../entity/goods-storage';

export interface GoodsApi {
  createGoodsStorage(): Observable<GoodsStorage>;
}

import {SomeGoods} from './constraint/some-goods';
import {Identified} from './constraint/identified';
import {Counted} from './constraint/counted';
import {Mutable} from './constraint/mutable';

export class StockItem implements SomeGoods, Identified, Counted, Mutable {
  amount: number;
  goods: number;
  id: number;
  lastModified: Date;
  version: number;
  stock: number;
  created: Date;
}

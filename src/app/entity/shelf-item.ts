import {Mutable} from './constraint/mutable';
import {SomeGoods} from './constraint/some-goods';
import {Priced} from './constraint/priced';

export class ShelfItem implements Mutable, SomeGoods, Priced {
  amount: number;
  created: Date;
  goods: number;
  lastModified: Date;
  price: number;
  version: number;
  shelf: number;
  id: number;
  goodsStorage: number;
}

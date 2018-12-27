import {SomeGoods} from './constraint/some-goods';
import {Identified} from './constraint/identified';
import {Mutable} from './constraint/mutable';
import {Priced} from './constraint/priced';

export class StockItem implements SomeGoods, Identified, Mutable, Priced{
  amount: number;
  created: Date;
  goods: number;
  id: number;
  lastModified: Date;
  price: number;
  version: number;
  stock: number;
  goodsStorage: number;
}

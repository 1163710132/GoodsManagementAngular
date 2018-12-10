import {Identified} from './constraint/identified';
import {Mutable} from './constraint/mutable';
import {SomeGoods} from './constraint/some-goods';

export class ShelfItem implements Identified, Mutable, SomeGoods{
  amount: number;
  goods: number;
  id: number;
  lastModified: Date;
  version: number;
  price: number;
  shelf: number;
  created: Date;
}

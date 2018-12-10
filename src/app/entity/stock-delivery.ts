import {SomeGoods} from './constraint/some-goods';
import {Successor} from './constraint/successor';
import {Action} from './constraint/action';
import {Identified} from './constraint/identified';
import {Record} from './constraint/record';
import {EntityType} from './entity-type';

export class StockDelivery implements SomeGoods, Successor, Action, Identified, Record {
  actor: number;
  amount: number;
  goods: number;
  id: number;
  created: Date;
  precursor: number;
  precursorType: EntityType;
  stock: number;
}

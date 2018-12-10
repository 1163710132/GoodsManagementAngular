import {Identified} from './constraint/identified';
import {Record} from './constraint/record';
import {SomeGoods} from './constraint/some-goods';
import {Successor} from './constraint/successor';
import {Action} from './constraint/action';
import {EntityType} from './entity-type';

export class ShelfDelivery implements Identified, Record, SomeGoods, Successor, Action {
  actor: number;
  amount: number;
  goods: number;
  id: number;
  created: Date;
  precursor: number;
  precursorType: EntityType;
  shelf: number;
  item: number;
}

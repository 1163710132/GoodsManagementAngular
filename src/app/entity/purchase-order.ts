import {Identified} from './constraint/identified';
import {Record} from './constraint/record';
import {SomeGoods} from './constraint/some-goods';
import {Successor} from './constraint/successor';
import {Action} from './constraint/action';
import {EntityType} from './entity-type';

export class PurchaseOrder implements Identified, Record, SomeGoods, Successor, Action {
  actor: number = null;
  amount: number = null;
  goods: number = null;
  id: number = null;
  created: Date = null;
  precursor: number = null;
  precursorType: EntityType = null;
  total: number = null;
  supplier: number = null;
}

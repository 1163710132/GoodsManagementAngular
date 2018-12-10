import {Identified} from './constraint/identified';
import {Record} from './constraint/record';
import {SomeGoods} from './constraint/some-goods';
import {Action} from './constraint/action';

export class StockAllocate implements Identified, Record, SomeGoods, Action{
  actor: number;
  amount: number;
  goods: number;
  id: number;
  created: Date;
  from: number;
  to: number;
}

import {Immutable} from './constraint/immutable';
import {SomeGoods} from './constraint/some-goods';
import {Trans} from './constraint/trans';
import {Caused} from './constraint/caused';
import {PartOfAffair} from './constraint/part-of-affair';

export class GoodsTrans implements Immutable, SomeGoods, Trans, PartOfAffair {
  amount: number;
  created: Date;
  creator: number;
  goods: number;
  id: number;
  source: number;
  target: number;
  affair: number;
}

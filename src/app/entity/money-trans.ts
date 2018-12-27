import {Immutable} from './constraint/immutable';
import {Trans} from './constraint/trans';
import {Caused} from './constraint/caused';
import {SomeMoney} from './constraint/some-money';
import {PartOfAffair} from './constraint/part-of-affair';

export class MoneyTrans implements Immutable, SomeMoney, Trans, PartOfAffair {
  created: Date;
  creator: number;
  id: number;
  source: number;
  target: number;
  total: number;
  affair: number;
}

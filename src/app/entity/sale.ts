import {Immutable} from './constraint/immutable';
import {SomeMoney} from './constraint/some-money';
import {PartOfAffair} from './constraint/part-of-affair';

export class Sale implements Immutable, PartOfAffair {
  created: Date;
  creator: number;
  id: number;
  customer: number;
  affair: number;
}

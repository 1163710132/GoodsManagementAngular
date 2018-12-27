import {Immutable} from './constraint/immutable';
import {SomeMoney} from './constraint/some-money';
import {PartOfAffair} from './constraint/part-of-affair';

export class Purchase implements Immutable, PartOfAffair {
  created: Date;
  creator: number;
  id: number;
  supplier: number;
  affair: number;
}

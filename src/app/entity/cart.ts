import {Immutable} from './constraint/immutable';
import {PartOfAffair} from './constraint/part-of-affair';

export class Cart implements Immutable, PartOfAffair{
  affair: number;
  created: Date;
  creator: number;
  id: number;
  goodsStorage: number;
}

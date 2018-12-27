import {Immutable} from './constraint/immutable';

export class GoodsStorage implements Immutable {
  created: Date;
  creator: number;
  id: number;
}

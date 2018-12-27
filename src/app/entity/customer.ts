import {Immutable} from './constraint/immutable';

export class Customer implements Immutable{
  created: Date;
  creator: number;
  id: number;
  goodsStorage: number;
}

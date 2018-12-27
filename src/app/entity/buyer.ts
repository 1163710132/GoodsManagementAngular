import {Immutable} from './constraint/immutable';

export class Buyer implements Immutable {
  created: Date;
  creator: number;
  id: number;
  moneyStorage: number;
}

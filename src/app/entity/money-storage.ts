import {Immutable} from './constraint/immutable';

export class MoneyStorage implements Immutable {
  created: Date;
  creator: number;
  id: number;
}

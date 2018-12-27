import {Immutable} from './constraint/immutable';

export class Affair implements Immutable {
  created: Date;
  creator: number;
  id: number;
}

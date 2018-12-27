import {Immutable} from './constraint/immutable';

export class Temp implements Immutable{
  created: Date;
  creator: number;
  id: number;
  content: string;
}

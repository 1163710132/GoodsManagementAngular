import {Identified} from './identified';

export interface Immutable extends Identified {
  creator: number;
  created: Date;
}

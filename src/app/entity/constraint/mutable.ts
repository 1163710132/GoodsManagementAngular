import {Identified} from './identified';

export interface Mutable extends Identified {
  created: Date;
  lastModified: Date;
  version: number;
}

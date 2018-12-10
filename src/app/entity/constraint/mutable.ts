import {Record} from './record';

export interface Mutable extends Record {
  version: number;
  lastModified: Date;
}

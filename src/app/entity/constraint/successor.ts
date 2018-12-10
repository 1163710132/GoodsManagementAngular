import {EntityType} from '../entity-type';

export interface Successor {
  precursor: number;
  precursorType: EntityType;
}

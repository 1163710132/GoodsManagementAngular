import {Identified} from './constraint/identified';
import {Named} from './constraint/named';
import {Described} from './constraint/described';
import {Mutable} from './constraint/mutable';
import {Successor} from './constraint/successor';
import {EntityType} from './entity-type';

export class Store implements Identified, Named, Described, Mutable, Successor {
  description: string;
  id: number;
  lastModified: Date;
  name: string;
  precursor: number;
  precursorType: EntityType;
  version: number;
  created: Date;

}

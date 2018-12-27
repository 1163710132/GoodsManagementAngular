import {Mutable} from './constraint/mutable';
import {Named} from './constraint/named';
import {Described} from './constraint/described';
import {Identified} from './constraint/identified';

export class Shelf implements Identified, Mutable, Named, Described {
  created: Date;
  lastModified: Date;
  name: string;
  version: number;
  description: string;
  store: number;
  id: number;
}

import {Identified} from './constraint/identified';
import {Mutable} from './constraint/mutable';
import {Named} from './constraint/named';

export class Shelf implements Identified, Mutable, Named{
  id: number;
  lastModified: Date;
  name: string;
  version: number;
  store: number;
  created: Date;
}

import {Mutable} from './constraint/mutable';
import {Named} from './constraint/named';
import {Described} from './constraint/described';
import {Identified} from './constraint/identified';

export class Goods implements Identified, Mutable, Named, Described{
  created: Date;
  description: string;
  lastModified: Date;
  name: string;
  version: number;
  id: number;
}

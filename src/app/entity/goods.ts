import {Mutable} from './constraint/mutable';
import {Identified} from './constraint/identified';
import {Named} from './constraint/named';
import {Described} from './constraint/described';

export class Goods implements Mutable, Identified, Named, Described{
  description: string;
  id: number;
  lastModified: Date;
  name: string;
  version: number;
  created: Date;

}

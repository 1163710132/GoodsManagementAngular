import {Identified} from './constraint/identified';
import {Named} from './constraint/named';
import {Described} from './constraint/described';
import {Mutable} from './constraint/mutable';

export class Stock implements Identified, Named, Described, Mutable {
  description: string;
  id: number;
  lastModified: Date;
  name: string;
  version: number;
  created: Date;
}
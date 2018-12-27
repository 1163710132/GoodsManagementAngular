import {Identified} from './constraint/identified';
import {Named} from './constraint/named';
import {Described} from './constraint/described';
import {Mutable} from './constraint/mutable';

export class Store implements Identified, Named, Described, Mutable {
  created: Date;
  description: string;
  id: number;
  lastModified: Date;
  name: string;
  version: number;

}

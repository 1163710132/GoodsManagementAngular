import {Mutable} from './constraint/mutable';
import {Named} from './constraint/named';
import {Described} from './constraint/described';

export class Supplier implements Mutable, Named, Described {
  created: Date;
  description: string;
  lastModified: Date;
  name: string;
  version: number;
  goodsStorage: number;
  moneyStorage: number;
  id: number;
}

import {Counted} from './counted';
import {MetadataOverride} from '@angular/core/testing';

export interface SomeGoods extends Counted {
  goods: number;
  amount: number;
}

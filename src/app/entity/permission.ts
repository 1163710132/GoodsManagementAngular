import {Immutable} from './constraint/immutable';

export class Permission implements Immutable{
  created: Date;
  creator: number;
  id: number;
  target: number;
  targetType: number;
  accountId: number;

}

import {Identified} from './constraint/identified';
import {Mutable} from './constraint/mutable';

export class Account implements Mutable {
  id: number;
  lastModified: Date;
  version: number;
  username: string;
  password: string;
  created: Date;


  static of(username: string, password: string): Account {
    const account: Account = new Account();
    account.username = username;
    account.password = password;
    return account;
  }
}

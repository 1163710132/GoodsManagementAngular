import { Injectable } from '@angular/core';
import {StockmanApi} from '../../api/stockman.api';

@Injectable({
  providedIn: 'root'
})
export class StockmanService implements StockmanApi {

  constructor() { }

  supply(supply: StockSupply) {
    
  }
}

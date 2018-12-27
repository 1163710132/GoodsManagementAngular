import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {InventoryService} from '../../../service/inventory/inventory.service';
import {FormControls} from '../../../control/form-controls';
import {Affair} from '../../../entity/affair';
import {Observable, of} from 'rxjs';
import {AffairService} from '../../../service/affair/affair.service';
import {Cart} from '../../../entity/cart';
import {flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  stockControl = new FormControl();
  entries: FormControl[];
  dataSource = new MatTableDataSource(this.entries);
  observableAffair: Observable<Affair> = null;
  observableCart: Observable<Cart> = null;
  affair: Affair = null;
  cart: Cart = null;

  constructor(private affairService: AffairService, private inventoryService: InventoryService) {

  }

  ngOnInit() {

  }

  loadStock(stockId: number) {
    this.inventoryService.listStockItems(stockId).forEach(stockItems => {
      const stockItemControls = [];
      stockItems.forEach(stockItem => {
        const stockItemControl = FormControls.arrayOf(4);
        stockItemControl[0].setValue(stockItem.id);
        stockItemControl[1].setValue(stockItem.price);
        stockItemControl[2].setValue(stockItem.amount);
        stockItemControl[3].setValue(stockItem.goodsStorage);
        stockItemControls.push(stockItemControl);
      });
      this.entries = stockItemControls;
      this.dataSource = new MatTableDataSource(this.entries);
    });
  }

  getAffair(): Observable<Affair> {
    if (this.affair != null) {
      return of(this.affair);
    } else {
      if (this.observableAffair == null) {
        this.observableAffair = map(affair => {
          this.affair = <Affair>affair;
          return <Affair>affair;
        })(this.affairService.createAffair());
        console.log('request for observableAffair');
      }
      return this.observableAffair;
    }
  }

  getCart(): Observable<Cart> {
    if (this.cart != null) {
      return of(this.cart);
    } else {
      if (this.observableCart == null) {
        this.observableCart = flatMap(affair => {
          return map(cart => {
            this.cart = <Cart>cart;
            return <Cart>cart;
          })(this.affairService.createCart((<Affair>affair).id));
        })(this.getAffair());
      }
      return this.observableCart;
    }
  }

  done(stockItemControl: FormControl[]) {
    this.getAffair().forEach(affair => {
      const stockItemId: null = stockItemControl[0].value;
      const goodsStorage: number = stockItemControl[3].value;
      const goods: number = stockItemControl[1].value;
      const amount: number = stockItemControl[2].value;
      const target: number = null;
      this.inventoryService.getStockItemById(stockItemId).forEach(stockItem => {
        this.getCart().forEach(cart => {
          const delta = amount - stockItem.amount;
          if (delta > 0) {
            this.affairService.createGoodsTrans(affair.id, goods, delta, cart.goodsStorage, goodsStorage).forEach(() => {
              alert('submit success');
            });
          } else if (delta < 0) {
            this.affairService.createGoodsTrans(affair.id, goods, -delta, goodsStorage, cart.goodsStorage).forEach(() => {
              alert('submit success');
            });
          }
        });
      });
    });
  }

  refresh(stockItemControl: FormControl[]) {

  }

  delete(stockItemControl: FormControl[]) {

  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {InventoryService} from '../../../service/inventory/inventory.service';
import {Observable, of} from 'rxjs';
import {Affair} from '../../../entity/affair';
import {FormControls} from '../../../control/form-controls';
import {AffairService} from '../../../service/affair/affair.service';
import {Cart} from '../../../entity/cart';
import {flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-shelf-inventory',
  templateUrl: './shelf-inventory.component.html',
  styleUrls: ['./shelf-inventory.component.css']
})
export class ShelfInventoryComponent implements OnInit {

  shelfControl = new FormControl();
  entries: FormControl[];
  dataSource = new MatTableDataSource(this.entries);
  observableAffair: Observable<Affair> = null;
  observableCart: Observable<Cart> = null;
  affair: Affair = null;
  cart: Cart = null;

  constructor(private affairService: AffairService, private inventoryService: InventoryService) { }

  ngOnInit() {

  }

  loadShelf(shelfId: number) {
    this.inventoryService.listShelfItems(shelfId).forEach(shefItems => {
      const shelfItemControls = [];
      shefItems.forEach(shelfItem => {
        const shelfItemControl = FormControls.arrayOf(4);
        shelfItemControl[0].setValue(shelfItem.id);
        shelfItemControl[1].setValue(shelfItem.price);
        shelfItemControl[2].setValue(shelfItem.amount);
        shelfItemControl[3].setValue(shelfItem.goodsStorage);
        shelfItemControls.push(shelfItemControl);
      });
      this.entries = shelfItemControls;
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

  done(shelfItemControl: FormControl[]) {
    this.getAffair().forEach(affair => {
      const shelfItemId: null = shelfItemControl[0].value;
      const goodsStorage: number = shelfItemControl[3].value;
      const goods: number = shelfItemControl[1].value;
      const amount: number = shelfItemControl[2].value;
      this.getCart().forEach(cart => {
        this.inventoryService.getShelfItemById(shelfItemId).forEach(shelfItem => {
          const delta = amount - shelfItem.amount;
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

  refresh(shelfItemControl: FormControl[]) {

  }

  delete(shelfItemControl: FormControl[]) {

  }

  addTerm(): void {

  }

}

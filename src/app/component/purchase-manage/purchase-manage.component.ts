import {Component, OnInit} from '@angular/core';
import {PurchaseOrder} from '../../entity/purchase-order';
import {BuyerApi} from '../../api/buyer.api';
import {EntityType} from '../../entity/entity-type';
import {BuyerService} from '../../service/buyer/buyer.service';
import {AccountService} from '../../service/account/account.service';
import {MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-purchase-manage',
  templateUrl: './purchase-manage.component.html',
  styleUrls: ['./purchase-manage.component.css']
})

export class PurchaseManageComponent implements OnInit {

  order: MainOrderControl;
  subOrders: SubOrderControl[];
  displayedColumns: string[];
  tableDataSource: MatTableDataSource<SubOrderControl>;
  submitting: boolean;

  constructor(private buyerService: BuyerService, private accountService: AccountService) {
    this.displayedColumns = [
      'goods', 'amount', 'total', 'remove'
    ];
    this.order = new MainOrderControl();
    this.subOrders = [];
    this.tableDataSource = new MatTableDataSource(this.subOrders);
    this.submitting = false;
  }

  ngOnInit() {
  }

  submit() {
    this.submitting = true;
    this.accountService.uid().forEach(uid => {
      const mainOrder = new PurchaseOrder();
      mainOrder.actor = uid;
      mainOrder.supplier = this.order.supplier.value;
      this.order = new MainOrderControl();
      this.buyerService.purchase(mainOrder).forEach(response => {
        const id = response.id;
        if (response != null) {
          this.subOrders.forEach(subOrder => {
            const order = new PurchaseOrder();
            order.actor = uid;
            order.supplier = response.supplier;
            order.precursor = id;
            order.precursorType = EntityType.PO;
            order.goods = subOrder.goods.value;
            order.total = subOrder.total.value;
            order.amount = subOrder.amount.value;
            this.buyerService.purchase(order).subscribe();
          });
          this.subOrders = [];
          this.tableDataSource = new MatTableDataSource(this.subOrders);
          this.submitting = false;
          alert('submit succeed');
        } else {
          alert('submit failed');
          this.submitting = false;
        }
      });
    });
  }

  addRow() {
    this.subOrders.push(new SubOrderControl());
    this.tableDataSource = new MatTableDataSource(this.subOrders);
  }

  removeRow(subOrder: SubOrderControl) {
    this.subOrders.splice(this.subOrders.indexOf(subOrder), 1);
    this.tableDataSource = new MatTableDataSource(this.subOrders);
  }

}

class SubOrderControl {
  'goods': FormControl;
  'amount': FormControl;
  'total': FormControl;

  constructor() {
    this.goods = new FormControl();
    this.amount = new FormControl();
    this.total = new FormControl();
  }
}

class MainOrderControl {
  'supplier': FormControl;

  constructor() {
    this.supplier = new FormControl();
  }
}

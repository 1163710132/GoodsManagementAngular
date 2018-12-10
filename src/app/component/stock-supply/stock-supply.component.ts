import { Component, OnInit } from '@angular/core';
import {StockSupply} from '../../entity/stock-supply';
import {FormControl} from '@angular/forms';
import {DataSource} from '@angular/cdk/table';
import {ArrayDataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {FindService} from '../../service/find/find.service';
import {EntityType} from '../../entity/entity-type';

@Component({
  selector: 'app-stock-supply',
  templateUrl: './stock-supply.component.html',
  styleUrls: ['./stock-supply.component.css']
})
export class StockSupplyComponent implements OnInit {

  purchaseControl: FormControl;
  tableDataSource: DataSource<StockSupplyControl>;
  stockSupplyControls: StockSupplyControl[];
  stock: FormControl;
  displayedColumns = [
    'goods', 'amount', 'precursor', 'precursorType'
  ];

  constructor(private findService: FindService) {
    this.stockSupplyControls = [];
    this.tableDataSource = new MatTableDataSource(this.stockSupplyControls);
    this.stock = new FormControl();
    this.purchaseControl = new FormControl();
  }

  ngOnInit() {
  }

  addEmptyRow() {
    this.addRow(new StockSupplyControl());
  }

  addRow(row: StockSupplyControl) {
    this.stockSupplyControls.push(row);
    this.tableDataSource = new MatTableDataSource(this.stockSupplyControls);
  }

  clearRows() {
    this.stockSupplyControls = [];
    this.tableDataSource = new MatTableDataSource(this.stockSupplyControls);
  }

  fillBy(purchaseId: number) {
    this.findService.findPurchaseSetById(purchaseId).forEach(purchaseSet => {
      if (purchaseSet.length === 0) {
        alert('cannot find this order');
      } else {
        purchaseSet.forEach(purchase => {
          if (purchase.goods != null && purchase.goods !== undefined) {
            const row = new StockSupplyControl();
            row.goods.setValue(purchase.goods);
            row.amount.setValue(purchase.amount);
            row.precursor.setValue(purchase.id);
            row.precursorType.setValue(EntityType.PO);
            this.addRow(row);
          }
        });
        alert('操作成功');
      }
    });
  }

}

class StockSupplyControl {
  'goods': FormControl;
  'amount': FormControl;
  'precursor': FormControl;
  'precursorType': FormControl;

  constructor() {
    this.goods = new FormControl();
    this.amount = new FormControl();
    this.precursor = new FormControl();
    this.precursorType = new FormControl();
  }
}

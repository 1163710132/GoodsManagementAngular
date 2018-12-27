import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ManagerService} from '../../../service/manager/manager.service';
import {CommonService} from '../../../service/common/common.service';
import {FormControls} from '../../../control/form-controls';
import {GeneralDialogComponent} from '../../../dialog/general-dialog/general-dialog.component';
import {DialogConstraint, DialogData} from '../../../dialog/general-dialog/dialog-data';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  entries: FormControl[][];
  dataSource: MatTableDataSource<FormControl[]>;

  constructor(private managerService: ManagerService, private commonService: CommonService, private dialog: MatDialog) {
    this.entries = [];
    this.dataSource = new MatTableDataSource(this.entries);
    this.refreshList();
  }

  ngOnInit() {
  }

  addTerm() {
    this.dialog.open<GeneralDialogComponent, DialogConstraint, DialogData>(GeneralDialogComponent, {
      data: {
        storeId: {
          type: 'number',
          predicate: function (storeId): boolean {
            return (Number(storeId) != null);
          }
        }
      },
      height: '1024'
    }).afterClosed().forEach(data => {
      if (data != null) {
        this.managerService.createStock(Number(data.storeId)).forEach(stock => {
          const stockControl = FormControls.arrayOf(4);
          stockControl[0].setValue(stock.id);
          stockControl[1].setValue(stock.name);
          stockControl[2].setValue(stock.description);
          stockControl[3].setValue(stock.store);
          this.entries.push(stockControl);
          this.dataSource = new MatTableDataSource(this.entries);
        });
      }
    });
  }

  refreshList() {
    this.commonService.listStocks().forEach(stocks => {
      const stockControls = [];
      stocks.forEach(stock => {
        const stockControl = FormControls.arrayOf(4);
        stockControl[0].setValue(stock.id);
        stockControl[1].setValue(stock.name);
        stockControl[2].setValue(stock.description);
        stockControl[3].setValue(stock.store);
        stockControls.push(stockControl);
      });
      this.entries = stockControls;
      this.dataSource = new MatTableDataSource<FormControl[]>(stockControls);
    });
  }

  done(stockControl: FormControl[]) {
    this.managerService.modifyStock(stockControl[0].value, stockControl[1].value, stockControl[2].value).forEach(stock => {
      stockControl[0].setValue(stock.id);
      stockControl[1].setValue(stock.name);
      stockControl[2].setValue(stock.description);
      stockControl[3].setValue(stock.store);
    });
  }

  refresh(stockControls: FormControl[]) {}

  delete(stockControls: FormControl[]) {}
}

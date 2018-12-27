import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {ManagerService} from '../../../service/manager/manager.service';
import {CommonService} from '../../../service/common/common.service';
import {FormControls} from '../../../control/form-controls';

@Component({
  selector: 'app-goods-manage',
  templateUrl: './goods-manage.component.html',
  styleUrls: ['./goods-manage.component.css']
})
export class GoodsManageComponent implements OnInit {

  entries: FormControl[][];
  dataSource: MatTableDataSource<FormControl[]>;

  constructor(private managerService: ManagerService, private commonService: CommonService) {
    this.entries = [];
    this.dataSource = new MatTableDataSource(this.entries);
    this.refreshList();
  }

  ngOnInit() {
  }

  addTerm() {
    this.managerService.createGoods().forEach(goods => {
      const goodsControl = FormControls.arrayOf(3);
      goodsControl[0].setValue(goods.id);
      this.entries.push(goodsControl);
      this.dataSource = new MatTableDataSource(this.entries);
    });
  }

  refreshList() {
    this.commonService.listGoods().forEach(goodsList => {
      const goodsControls = [];
      goodsList.forEach(goods => {
        const goodsControl = FormControls.arrayOf(3);
        goodsControl[0].setValue(goods.id);
        goodsControl[1].setValue(goods.name);
        goodsControl[2].setValue(goods.description);
        goodsControls.push(goodsControl);
      });
      this.entries = goodsControls;
      this.dataSource = new MatTableDataSource<FormControl[]>(goodsControls);
    });
  }

  done(goodsControl: FormControl[]) {
    this.managerService.modifyGoods(goodsControl[0].value, goodsControl[1].value, goodsControl[2].value).forEach(goods => {
      goodsControl[0].setValue(goods.id);
      goodsControl[1].setValue(goods.name);
      goodsControl[2].setValue(goods.description);
    });
  }

  refresh(goodsControl: FormControl[]) {}

  delete(goodsControl: FormControl[]) {}
}

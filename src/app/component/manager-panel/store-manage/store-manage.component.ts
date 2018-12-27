import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {FormControls} from '../../../control/form-controls';
import {ManagerService} from '../../../service/manager/manager.service';
import {CommonService} from '../../../service/common/common.service';

@Component({
  selector: 'app-store-manage',
  templateUrl: './store-manage.component.html',
  styleUrls: ['./store-manage.component.css']
})
export class StoreManageComponent implements OnInit {

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
    this.managerService.createStore().forEach(store => {
      const storeControl = FormControls.arrayOf(3);
      storeControl[0].setValue(store.id);
      this.entries.push(storeControl);
      this.dataSource = new MatTableDataSource(this.entries);
    });
  }

  refreshList() {
    this.commonService.listStores().forEach(stores => {
      const storeControls = [];
      stores.forEach(store => {
        const storeControl = FormControls.arrayOf(3);
        storeControl[0].setValue(store.id);
        storeControl[1].setValue(store.name);
        storeControl[2].setValue(store.description);
        storeControls.push(storeControl);
      });
      this.entries = storeControls;
      this.dataSource = new MatTableDataSource<FormControl[]>(storeControls);
    });
  }

  done(storeControl: FormControl[]) {
    this.managerService.modifyStore(storeControl[0].value, storeControl[1].value, storeControl[2].value).forEach(store => {
      storeControl[0].setValue(store.id);
      storeControl[1].setValue(store.name);
      storeControl[2].setValue(store.description);
    });
  }

  refresh(storeControl: FormControl[]) {}

  delete(storeControl: FormControl[]) {}
}

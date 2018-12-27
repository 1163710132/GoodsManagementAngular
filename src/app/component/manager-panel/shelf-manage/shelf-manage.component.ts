import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ManagerService} from '../../../service/manager/manager.service';
import {CommonService} from '../../../service/common/common.service';
import {FormControls} from '../../../control/form-controls';
import {GeneralDialogComponent} from '../../../dialog/general-dialog/general-dialog.component';
import {DialogConstraint, DialogData} from '../../../dialog/general-dialog/dialog-data';

@Component({
  selector: 'app-shelf-manage',
  templateUrl: './shelf-manage.component.html',
  styleUrls: ['./shelf-manage.component.css']
})
export class ShelfManageComponent implements OnInit {

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
        this.managerService.createShelf(Number(data.storeId)).forEach(shelf => {
          const shelfControl = FormControls.arrayOf(4);
          shelfControl[0].setValue(shelf.id);
          shelfControl[1].setValue(shelf.name);
          shelfControl[2].setValue(shelf.description);
          shelfControl[3].setValue(shelf.store);
          this.entries.push(shelfControl);
          this.dataSource = new MatTableDataSource(this.entries);
        });
      }
    });
  }

  refreshList() {
    this.commonService.listShelves().forEach(shelves => {
      const shelfControls = [];
      shelves.forEach(shelf => {
        const shelfControl = FormControls.arrayOf(4);
        shelfControl[0].setValue(shelf.id);
        shelfControl[1].setValue(shelf.name);
        shelfControl[2].setValue(shelf.description);
        shelfControl[3].setValue(shelf.store);
        shelfControls.push(shelfControl);
      });
      this.entries = shelfControls;
      this.dataSource = new MatTableDataSource<FormControl[]>(shelfControls);
    });
  }

  done(shelfControl: FormControl[]) {
    this.managerService.modifyShelf(shelfControl[0].value, shelfControl[1].value, shelfControl[2].value).forEach(shelf => {
      shelfControl[0].setValue(shelf.id);
      shelfControl[1].setValue(shelf.name);
      shelfControl[2].setValue(shelf.description);
      shelfControl[3].setValue(shelf.store);
    });
  }

  refresh(shelfControl: FormControl[]) {}

  delete(shelfControl: FormControl[]) {}
}

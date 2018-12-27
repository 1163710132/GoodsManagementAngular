import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {DialogConstraint, DialogControls, DialogData} from './dialog-data';

@Component({
  selector: 'app-general-dialog',
  templateUrl: './general-dialog.component.html',
  styleUrls: ['./general-dialog.component.css']
})
export class GeneralDialogComponent implements OnInit {

  dataControls: DialogControls;
  keys: string[] = [];

  constructor(public dialogRef: MatDialogRef<GeneralDialogComponent>, @Inject(MAT_DIALOG_DATA) public constraints: DialogConstraint) {
    this.dataControls = {};
    for (const key of Object.keys(constraints)) {
      this.dataControls[key] = new FormControl();
      this.keys.push(key);
    }
  }

  ngOnInit() {
  }

  getData(): DialogData {
    const data = {};
    for (const key of this.keys) {
      const result = this.dataControls[key].value;
      if (!this.constraints[key].predicate(result)) {
        return null;
      }
      data[key] = result;
    }
    return data;
  }

}

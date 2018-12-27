import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {UnitService} from '../../../service/unit/unit.service';
import {AffairService} from '../../../service/affair/affair.service';
import {FormControls} from '../../../control/form-controls';

@Component({
  selector: 'app-create-shelf-out',
  templateUrl: './create-shelf-out.component.html',
  styleUrls: ['./create-shelf-out.component.css']
})
export class CreateShelfOutComponent implements OnInit {

  entries: FormControl[][];
  dataSource: MatTableDataSource<FormControl[]>;
  affairControl = new FormControl('');
  targetControl = new FormControl('');

  constructor(private unitService: UnitService, private affairService: AffairService) {
    this.entries = [];
    this.dataSource = new MatTableDataSource<FormControl[]>(this.entries);
  }

  ngOnInit() {
  }

  submit() {
    const affair = <number>this.affairControl.value;
    const target = <number>this.targetControl.value;
    let count = this.entries.length;
    this.entries.forEach(entry => {
      const goods: number = entry[0].value;
      const amount: number = entry[1].value;
      const source: number = entry[2].value;
      this.affairService.createGoodsTrans(affair, goods, amount, source, target).forEach(() => {
        count = count - 1;
        if (count === 0) {
          alert('submit success');
        }
      });
    });
  }

  addTerm() {
    this.entries.push(FormControls.arrayOf(3));
    this.dataSource = new MatTableDataSource(this.entries);
  }
}

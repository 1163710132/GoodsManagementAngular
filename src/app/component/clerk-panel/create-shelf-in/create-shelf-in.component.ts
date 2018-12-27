import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {UnitService} from '../../../service/unit/unit.service';
import {AffairService} from '../../../service/affair/affair.service';
import {FormControls} from '../../../control/form-controls';

@Component({
  selector: 'app-create-shelf-in',
  templateUrl: './create-shelf-in.component.html',
  styleUrls: ['./create-shelf-in.component.css']
})
export class CreateShelfInComponent implements OnInit {
  entries: FormControl[][];
  dataSource: MatTableDataSource<FormControl[]>;
  affairControl = new FormControl('');
  sourceControl = new FormControl('');

  constructor(private unitService: UnitService, private affairService: AffairService) {
    this.entries = [];
    this.dataSource = new MatTableDataSource<FormControl[]>(this.entries);
  }

  ngOnInit() {
  }

  submit() {
    const affair = <number>this.affairControl.value;
    const source = <number>this.sourceControl.value;
    let count = this.entries.length;
    this.entries.forEach(entry => {
      const goods: number = entry[0].value;
      const amount: number = entry[1].value;
      const target: number = entry[2].value;
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

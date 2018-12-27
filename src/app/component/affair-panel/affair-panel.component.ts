import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {UnitService} from '../../service/unit/unit.service';
import {AffairService} from '../../service/affair/affair.service';
import {FormControls} from '../../control/form-controls';
import {GoodsTrans} from '../../entity/goods-trans';

@Component({
  selector: 'app-affair-panel',
  templateUrl: './affair-panel.component.html',
  styleUrls: ['./affair-panel.component.css']
})
export class AffairPanelComponent implements OnInit {
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

  addTerm() {
    this.entries.push();
  }

}

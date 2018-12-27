import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {AffairService} from '../../service/affair/affair.service';
import {UnitService} from '../../service/unit/unit.service';
import {AccountService} from '../../service/account/account.service';
import {FormControls} from '../../control/form-controls';
import {GoodsTrans} from '../../entity/goods-trans';

@Component({
  selector: 'app-salesman-panel',
  templateUrl: './salesman-panel.component.html',
  styleUrls: ['./salesman-panel.component.css']
})
export class SalesmanPanelComponent implements OnInit {
  total = new FormControl('');
  customer = new FormControl('');
  entries: FormControl[][] = [];
  dataSource = new MatTableDataSource(this.entries);
  displayedColumns = ['goodsStorage', 'goods', 'amount', 'remove'];

  constructor(private affairService: AffairService, private unitService: UnitService, private accountService: AccountService) {
    this.addTerm();
  }

  ngOnInit() {
  }

  addTerm() {
    this.entries.push(FormControls.arrayOf(2));
    this.dataSource = new MatTableDataSource(this.entries);
  }

  removeTerm(term: FormControl[]) {
    this.entries.splice(this.entries.indexOf(term), 1);
    this.dataSource = new MatTableDataSource(this.entries);
  }

  submit() {
    const customer: number = this.customer.value;
    const total: number = this.total.value;
    this.affairService.createAffair().forEach(affair => {
      this.affairService.createSale(affair.id, customer).forEach(sale => {
        this.affairService.createCart(affair.id).forEach(cart => {
          this.entries.forEach(entry => {
            const goodsStorage: number = entry[0].value;
            const goods: number = entry[1].value;
            const amount: number = entry[2].value;
            this.affairService.createGoodsTrans(affair.id, goods, amount, goodsStorage, cart.goodsStorage)
              .subscribe();
          });
        });
      });
    });
  }
}

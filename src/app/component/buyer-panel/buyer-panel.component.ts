import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AffairService} from '../../service/affair/affair.service';
import {GoodsService} from '../../service/goods/goods.service';
import {UnitService} from '../../service/unit/unit.service';
import {AccountService} from '../../service/account/account.service';
import {FormControls} from '../../control/form-controls';

@Component({
  selector: 'app-buyer-panel',
  templateUrl: './buyer-panel.component.html',
  styleUrls: ['./buyer-panel.component.css']
})
export class BuyerPanelComponent implements OnInit {

  total = new FormControl('');
  supplier = new FormControl('');
  entries: FormControl[][] = [];
  dataSource = new MatTableDataSource(this.entries);
  displayedColumns = ['goods', 'amount', 'remove'];

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
    const total: number = this.total.value;
    const supplierId: number = this.supplier.value;
    this.affairService.createAffair().forEach(affair => {
      this.affairService.createPurchase(affair.id, supplierId).forEach(purchase => {
        this.affairService.createCart(affair.id).forEach(cart => {
          this.unitService.findSupplier(supplierId).forEach(supplier => {
            this.entries.forEach(entry => {
              const goodsId = entry[0].value;
              const amount = entry[1].value;
              this.affairService.createGoodsTrans(affair.id, goodsId, amount, supplier.goodsStorage, cart.goodsStorage)
                .subscribe();
            });
            this.accountService.uid().forEach(uid => {
              this.unitService.findBuyerByAccountId(uid).forEach(buyer => {
                this.affairService.createMoneyTrans(affair.id, total, buyer.moneyStorage, supplier.moneyStorage).forEach(() => {
                  alert('submit success');
                });
              });
            });
          });
        });
      });
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {PurchaseManageComponent} from './component/purchase-manage/purchase-manage.component';
import {StockSupplyComponent} from './component/stock-supply/stock-supply.component';

const routes: Routes = [
  { 'path': 'login', 'component': LoginComponent },
  { 'path': 'purchase', 'component': PurchaseManageComponent },
  { 'path': 'stock/supply', 'component': StockSupplyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      'enableTracing': true
    })
  ],
  declarations: []
})
export class AppRoutingModule { }

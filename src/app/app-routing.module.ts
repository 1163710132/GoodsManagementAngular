import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {BuyerPanelComponent} from './component/buyer-panel/buyer-panel.component';
import {StockmanPanelComponent} from './component/stockman-panel/stockman-panel.component';
import {ClerkPanelComponent} from './component/clerk-panel/clerk-panel.component';
import {ManagerPanelComponent} from './component/manager-panel/manager-panel.component';
import {InventoryPanelComponent} from './component/inventory-panel/inventory-panel.component';
import {SalesmanPanelComponent} from './component/salesman-panel/salesman-panel.component';

const routes: Routes = [
  { 'path': 'account', 'component': LoginComponent },
  { 'path': 'buyer', 'component': BuyerPanelComponent },
  { 'path': 'stockman', 'component': StockmanPanelComponent },
  { 'path': 'clerk', 'component': ClerkPanelComponent },
  { 'path': 'manager', 'component': ManagerPanelComponent },
  { 'path': 'inventory', 'component': InventoryPanelComponent },
  { 'path': 'salesman', 'component': SalesmanPanelComponent }
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

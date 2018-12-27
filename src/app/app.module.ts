import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule, MatCommonModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatTableDataSource,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { PanelComponent } from './component/panel/panel.component';
import {HttpClientModule} from '@angular/common/http';
import {FormControlDirective, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { BuyerPanelComponent } from './component/buyer-panel/buyer-panel.component';
import { StockmanPanelComponent } from './component/stockman-panel/stockman-panel.component';
import { ClerkPanelComponent } from './component/clerk-panel/clerk-panel.component';
import { SalesmanPanelComponent } from './component/salesman-panel/salesman-panel.component';
import { ManagerPanelComponent } from './component/manager-panel/manager-panel.component';
import { InventoryPanelComponent } from './component/inventory-panel/inventory-panel.component';
import { CreateStockInComponent } from './component/stockman-panel/create-stock-in/create-stock-in.component';
import { CreateStockOutComponent } from './component/stockman-panel/create-stock-out/create-stock-out.component';
import { CreateShelfInComponent } from './component/clerk-panel/create-shelf-in/create-shelf-in.component';
import { CreateShelfOutComponent } from './component/clerk-panel/create-shelf-out/create-shelf-out.component';
import { StoreManageComponent } from './component/manager-panel/store-manage/store-manage.component';
import { ShelfManageComponent } from './component/manager-panel/shelf-manage/shelf-manage.component';
import { StockManageComponent } from './component/manager-panel/stock-manage/stock-manage.component';
import { GoodsManageComponent } from './component/manager-panel/goods-manage/goods-manage.component';
import { StockInventoryComponent } from './component/inventory-panel/stock-inventory/stock-inventory.component';
import { ShelfInventoryComponent } from './component/inventory-panel/shelf-inventory/shelf-inventory.component';
import { AffairPanelComponent } from './component/affair-panel/affair-panel.component';
import { GeneralDialogComponent } from './dialog/general-dialog/general-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    ToolbarComponent,
    BuyerPanelComponent,
    StockmanPanelComponent,
    ClerkPanelComponent,
    SalesmanPanelComponent,
    ManagerPanelComponent,
    InventoryPanelComponent,
    CreateStockInComponent,
    CreateStockOutComponent,
    CreateShelfInComponent,
    CreateShelfOutComponent,
    StoreManageComponent,
    ShelfManageComponent,
    StockManageComponent,
    GoodsManageComponent,
    StockInventoryComponent,
    ShelfInventoryComponent,
    AffairPanelComponent,
    GeneralDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatCommonModule,
    MatListModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GeneralDialogComponent
  ]
})

export class AppModule { }
